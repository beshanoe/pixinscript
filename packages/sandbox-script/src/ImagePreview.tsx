import { UIControl, UIVerticalSizer } from "@pixinsight/ui";
import React, { useEffect, useMemo, useRef } from "react";

export function ImagePreview({ image }: { image?: Image }) {
  const controlRef = useRef<Control>(null);
  const croppedImage = useMemo(() => {
    if (!image) {
      return;
    }

    const imageClone = new Image(image);
    imageClone.cropTo(100, 100, 200, 200);

    return imageClone;
  }, [image]);

  useEffect(() => {
    if (!controlRef.current || !croppedImage) {
      return;
    }
    const control = controlRef.current;
    const ratio = croppedImage?.width / croppedImage?.height;
    control.setFixedSize(croppedImage?.width, croppedImage?.height); // TODO: understand if size can be passed as a prop or should be called imperatively
    control.update()
  }, [croppedImage]);

  function onPaint() {
    if (!controlRef.current || !croppedImage) {
      return;
    }
    const control = controlRef.current;
    var G = new Graphics(control);
    G.drawScaledBitmap(control.boundsRect, croppedImage.render());
    // G.pen = new Pen(0xff00ff00); //Green
    // G.drawRect(this.imageRect());
    G.end();
  }

  return (
    <UIVerticalSizer>
      Image {image?.width} {image?.height}
      <UIControl ref={controlRef} onPaint={onPaint} />
    </UIVerticalSizer>
  );
}
