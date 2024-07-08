import {
  Align_Center,
  FrameStyle_Box,
  TextAlign_Center,
} from "@pixinscript/core";
import { UIControl, UIFrame, UILabel, UIVerticalSizer } from "@pixinscript/ui";
import React, { useMemo, useRef, useState } from "react";

export function ImagePreview({
  image,
  title = "Preview",
  children,
  ...props
}: { image?: Image; title?: string } & React.ComponentProps<typeof UIFrame>) {
  const controlRef = useRef<Control>(null);
  const [size, setSize] = useState<{ w: number; h: number }>({ w: 0, h: 0 });

  const [bmp, offsetX, offsetY] = useMemo(() => {
    const ratio = image?.width / image?.height;
    const minSize = Math.min(size.w, size.h);
    const [sw, sh] =
      ratio > 1 ? [minSize, minSize / ratio] : [ratio * minSize, minSize];

    const [ew, eh] = [
      image?.width / sw > 1
        ? Math.round(image?.width / sw)
        : 1 / Math.round(sw / image?.width),
      image?.height / sh > 1
        ? Math.round(image?.height / sh)
        : 1 / Math.round(sh / image?.height),
    ];

    const bmp = image
      ?.render()
      .scaledTo(image?.width / ew, image?.width / ew, 0);
    return [bmp, size.w / 2 - bmp?.width / 2, size.h / 2 - bmp?.height / 2];
  }, [image, size]);

  function onPaint() {
    if (!controlRef.current || !bmp) {
      return;
    }
    const control = controlRef.current;
    const G = new Graphics(control);

    G.drawBitmap(offsetX, offsetY, bmp);
    G.end();

    gc();
  }

  function onResize(w: number, h: number) {
    setSize({ w, h });
  }

  return (
    <UIVerticalSizer>
      <UILabel textAlignment={TextAlign_Center} text={title} />
      <UIFrame
        frameStyle={FrameStyle_Box}
        minWidth={200}
        minHeight={200}
        {...props}
      >
        {image ? (
          <UIControl ref={controlRef} onPaint={onPaint} onResize={onResize}>
            {children}
          </UIControl>
        ) : null
        // <UILabel alignment={Align_Center} text={title} />
        }
      </UIFrame>
    </UIVerticalSizer>
  );
}
