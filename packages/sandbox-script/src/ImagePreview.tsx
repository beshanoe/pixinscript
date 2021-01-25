import { UIControl, UIVerticalSizer } from "@pixinsight/ui";
import React, { useEffect, useMemo, useRef, useState } from "react";

export function ImagePreview({
  image,
  children,
}: { image?: Image } & React.ComponentProps<typeof UIControl>) {
  const controlRef = useRef<Control>(null);
  const [zoom, setZoom] = useState(1);

  useEffect(() => {
    if (!controlRef.current || !image) {
      return;
    }
    const control = controlRef.current;
    const ratio = image?.width / image?.height;
    control.setFixedSize(200, 200 / ratio); // TODO: understand if size can be passed as a prop or should be called imperatively
    control.update();
  }, [image]);

  function onPaint() {
    if (!controlRef.current || !image) {
      return;
    }
    const control = controlRef.current;
    const G = new Graphics(control);
    if (zoom === 1) {
      image.resetRectSelection();
    } else {
      const offset = zoom * 3;
      image.selectedRect = new Rect(
        offset,
        offset,
        image.width - offset,
        image.height - offset
      );
    }
    G.drawScaledBitmap(control.boundsRect, image.render());
    image.render();
    G.pen = new Pen(0xff00ff00); //Green
    G.drawRect(10, 10, 50, 50);
    G.end();

    gc();
  }

  function onMouseWheel(
    x: number,
    y: number,
    delta: number,
    buttonState: number,
    modifiers: any
  ) {
    if (Math.abs(delta) > 0) {
      const operand = delta / Math.abs(delta);
      setZoom(zoom + operand > 1 ? zoom + operand : 1);
      controlRef?.current?.repaint();
      console.log([x, y, delta, buttonState, modifiers].join(" "));
    }
  }

  return (
    <UIVerticalSizer>
      <UIControl ref={controlRef} onPaint={onPaint} onMouseWheel={onMouseWheel}>
        {children}
      </UIControl>
    </UIVerticalSizer>
  );
}
