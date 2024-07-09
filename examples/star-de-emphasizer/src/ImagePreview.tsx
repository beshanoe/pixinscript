import { FrameStyle_Box, TextAlign_Center } from "@pixinscript/core";
import {
  UIControl,
  UIFrame,
  UIHorizontalSizer,
  UILabel,
  UIStretch,
  UIVerticalSizer,
} from "@pixinscript/ui";
import React, { useEffect, useMemo, useRef, useState } from "react";

export type ReadoutData = [
  x: number,
  y: number,
  channelsCount: number,
  c0: number,
  c1: number,
  c2: number
];

export function ImagePreview({
  image,
  title,
  active,
  children,
  showReadout,
  onMousePress,
  ...props
}: {
  image?: Image;
  title?: string;
  active?: boolean;
  showReadout?: boolean;
} & React.ComponentProps<typeof UIFrame>) {
  const controlRef = useRef<Control>(null);
  const [size, setSize] = useState<{ w: number; h: number }>({ w: 0, h: 0 });
  const [cross, setCross] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [readout, setReadout] = useState<ReadoutData>();
  const [readoutText, setReadoutText] = useState("");
  const [bmp, offsetX, offsetY, channelsCount] = useMemo(() => {
    const ratio = image?.width / image?.height;
    const [sw, sh] = [size.w, size.h];

    let width, height;
    const controlRatio = sw / sh;
    if (controlRatio >= 1) {
      const eh =
        image?.height / sh > 1
          ? Math.round(image?.height / sh)
          : 1 / Math.round(sh / image?.height);
      height = image?.height / eh;
      width = height * ratio;
    } else {
      const ew =
        image?.width / sw > 1
          ? Math.round(image?.width / sw)
          : 1 / Math.round(sw / image?.width);
      width = image?.width / ew;
      height = width / ratio;
    }

    const bmp = image?.render().scaledTo(width, height, 0);
    return [
      bmp,
      size.w / 2 - bmp?.width / 2,
      size.h / 2 - bmp?.height / 2,
      image?.numberOfChannels,
    ];
  }, [image, size]);

  useEffect(() => {
    controlRef.current?.update();
  }, [size, image, cross]);

  function onPaint() {
    if (!controlRef.current || !bmp) {
      return;
    }
    const control = controlRef.current;
    const G = new Graphics(control);

    G.drawBitmap(offsetX, offsetY, bmp);
    if (showReadout) {
      G.pen = new Pen(0xffffffff);
      G.drawLine(cross.x - 15, cross.y, cross.x + 15, cross.y);
      G.drawLine(cross.x, cross.y - 15, cross.x, cross.y + 15);
    }
    G.end();

    gc();
  }

  function onResize(w: number, h: number) {
    setSize({ w, h });
  }

  function onMouseMove(x: number, y: number) {
    if (!showReadout) {
      return;
    }
    setCross({ x, y });

    const [rx, ry] = [x - offsetX, y - offsetY];
    if (rx < 0 || ry < 0 || rx > bmp?.width || ry > bmp?.height) {
      return;
    }
    const pixelValue = bmp?.pixel(rx, ry);
    const [c0, c1, c2] = [
      ((pixelValue & 0x00ff0000) >> 16) / 0xff,
      ((pixelValue & 0x0000ff00) >> 8) / 0xff,
      (pixelValue & 0x000000ff) / 0xff,
    ];

    const [imageX, imageY] = [
      Math.round((rx * image?.width) / bmp?.width),
      Math.round((ry * image?.height) / bmp?.height),
    ];

    let readout = `X: ${imageX} Y: ${imageY}`;
    if (channelsCount === 1 && c0 != null) {
      readout += ` K: ${c0.toFixed(4)}`;
    } else {
      readout += ` R: ${c0.toFixed(4)} G: ${c1.toFixed(4)} B: ${c2.toFixed(4)}`;
    }
    setReadoutText(readout);
    setReadout([imageX, imageY, channelsCount, c0, c1, c2]);
  }

  function onMousePressInternal(...args: any[]) {
    onMousePress?.(...args, readout);
  }

  return (
    <UIVerticalSizer>
      {title &&
        (active ? (
          <UIControl
            onPaint={function (this: Control) {
              const g = new Graphics(this);
              g.brush = new Brush(0xff00ff00);
              g.fillRect(0, 0, this.width, this.height);
              g.end();
            }}
          >
            <UILabel textAlignment={TextAlign_Center} text={title} />
          </UIControl>
        ) : (
          <UILabel textAlignment={TextAlign_Center} text={title} />
        ))}
      <UIFrame
        frameStyle={FrameStyle_Box}
        minWidth={100}
        minHeight={100}
        {...props}
        onMousePress={onMousePressInternal}
      >
        {image ? (
          <UIControl
            ref={controlRef}
            onPaint={onPaint}
            onResize={onResize}
            onMouseMove={onMouseMove}
            mouseTracking={Boolean(showReadout)}
          >
            {children}
          </UIControl>
        ) : null}
      </UIFrame>
      <UIHorizontalSizer>
        <UIStretch />
        <UILabel text={readoutText} />
      </UIHorizontalSizer>
    </UIVerticalSizer>
  );
}
