import { StdCursor_ClosedHand, StdCursor_OpenHand } from "@pixinscript/core";
import { UIScrollBox, useCombinedRefs } from "@pixinscript/ui";
import React from "react";

export const ScrollControl = React.forwardRef<
  ScrollBox,
  {
    image?: Image;
    minWidth: number;
    minHeight: number;
  }
>(({ image, minWidth, minHeight }, outerRef) => {
  const inner = React.useRef<ScrollBox>(null);

  const ref = useCombinedRefs(outerRef, inner);

  const initScrollBars = React.useCallback(() => {
    if (!ref.current) {
      return;
    }

    const ctrl = ref.current;

    if (!image || image.width <= 0 || image.height <= 0) {
      ctrl.setHorizontalScrollRange(0, 0);
      ctrl.setVerticalScrollRange(0, 0);
    } else {
      ctrl.setHorizontalScrollRange(
        0,
        Math.max(0, image.width - ctrl.viewport.width)
      );
      ctrl.setVerticalScrollRange(
        0,
        Math.max(0, image.height - ctrl.viewport.height)
      );
    }
    ctrl.viewport.update();
  }, [image]);

  React.useEffect(() => {
    if (!ref.current) {
      return;
    }

    const ctrl = ref.current;

    ctrl.autoScroll = true;
    ctrl.tracking = true;

    let dragging = false;
    let dragOrigin = new Point(0);

    ctrl.viewport.cursor = new Cursor(StdCursor_OpenHand);

    ctrl.viewport.onResize = function () {
      initScrollBars();
    };

    ctrl.viewport.onMousePress = function (x: number, y: number) {
      ctrl.viewport.cursor = new Cursor(StdCursor_ClosedHand);
      dragOrigin.x = x;
      dragOrigin.y = y;
      dragging = true;
    };

    ctrl.viewport.onMouseMove = function (x: number, y: number) {
      if (dragging) {
        ctrl.scrollPosition = new Point(ctrl.scrollPosition).translatedBy(
          dragOrigin.x - x,
          dragOrigin.y - y
        );
        dragOrigin.x = x;
        dragOrigin.y = y;
      }
    };

    ctrl.viewport.onMouseRelease = function () {
      ctrl.viewport.cursor = new Cursor(StdCursor_OpenHand);
      dragging = false;
    };

    ctrl.viewport.onPaint = function (
      x0: number,
      y0: number,
      x1: number,
      y1: number
    ) {
      var g = new Graphics(ctrl.viewport);
      if (!image) {
        g.fillRect(x0, y0, x1, y1, new Brush(0xff000000));
      } else {
        image.selectedRect = new Rect(x0, y0, x1, y1).translated(
          ctrl.scrollPosition
        );
        g.drawBitmap(x0, y0, image.render());
        image.resetRectSelection();
      }
      g.end();
      gc();
    };

    initScrollBars();
  }, [image]);

  return (
    <UIScrollBox
      ref={ref}
      autoScroll={true}
      tracking={true}
      minWidth={minWidth}
      minHeight={minHeight}
      onHorizontalScrollPosUpdated={() => {
        ref.current?.viewport.update();
      }}
      onVerticalScrollPosUpdated={() => {
        ref.current?.viewport.update();
      }}
    />
  );
});
