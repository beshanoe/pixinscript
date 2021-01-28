import { Align_Center, FrameStyle_Box } from "@pixinsight/core";
import { UIControl, UIFrame, UILabel, UIVerticalSizer } from "@pixinsight/ui";
import React, { useEffect, useMemo, useRef, useState } from "react";

export function ImagePreview({
  image,
  children,
  ...props
}: { image?: Image } & React.ComponentProps<typeof UIFrame>) {
  const controlRef = useRef<Control>(null);
  const [size, setSize] = useState<{ w: number; h: number }>({ w: 0, h: 0 });

  const [bmp, offsetX, offsetY] = useMemo(() => {
    const ratio = image?.width / image?.height;
    const minSize = Math.min(size.w, size.h);
    const [sw, sh] =
      ratio > 1 ? [minSize, minSize / ratio] : [ratio * minSize, minSize];
    const bmp = image?.render().scaledTo(sw, sh, 0);
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
    <UIFrame
      frameStyle={FrameStyle_Box}
      minWidth={200}
      minHeight={200}
      {...props}
    >
      <UIVerticalSizer>
        {image ? (
          <UIControl ref={controlRef} onPaint={onPaint} onResize={onResize}>
            {children}
          </UIControl>
        ) : (
          <UILabel alignment={Align_Center} text="Preview" />
        )}
      </UIVerticalSizer>
    </UIFrame>
  );
}
