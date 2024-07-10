import { NumericControl, NumericEdit } from "@pixinscript/core";
import * as React from "react";

type SizerChildProps<Base> = Partial<Base> & {
  constructorProps?: any[];
  stretchFactor?: number;
  alignment?: number;
  children?: React.ReactNode;
  margin?: number;
  spacing?: number;
  scaledMargin?: number;
  scaledSpacing?: number;
  unscaledMargin?: number;
  unscaledSpacing?: number;
};

declare global {
  namespace JSX {
    interface IntrinsicElements {
      picontrol: { [key: string]: any; type: string };
    }
  }
}

export function useCombinedRefs<T = any>(...refs: React.ForwardedRef<any>[]) {
  const targetRef = React.useRef<T>(null);

  React.useEffect(() => {
    refs.forEach((ref) => {
      if (!ref || !targetRef.current) return;

      if (typeof ref === "function") {
        ref(targetRef.current);
      } else {
        ref.current = targetRef.current;
      }
    });
  }, [refs]);

  return targetRef;
}

export const UIControl = React.forwardRef<Control, SizerChildProps<Control>>(
  (props, ref) => {
    return <picontrol ref={ref} type="Control" {...props} />;
  }
);

export const UICheckBox = React.forwardRef<CheckBox, SizerChildProps<CheckBox>>(
  (props, ref) => {
    return <picontrol ref={ref} type="CheckBox" {...props} />;
  }
);

export const UIComboBox = React.forwardRef<
  ComboBox,
  SizerChildProps<ComboBox> & { items: { text: string; icon?: string }[] }
>(({ items, ...props }, ref) => {
  const innerRef = React.useRef<ComboBox>(null);
  const combinedRef = useCombinedRefs(ref, innerRef);

  React.useEffect(() => {
    innerRef.current?.clear();
    for (const item of items) {
      innerRef.current?.addItem(item.text);
    }
  }, [items]);
  return <picontrol ref={combinedRef} type="ComboBox" {...props} />;
});

export const UIDialog = React.forwardRef<
  Dialog,
  SizerChildProps<Dialog> & {
    isOpen?: boolean;
    children: React.ReactNode;
    windowTitle: string;
  }
>(({ isOpen, ...props }, ref) => {
  const innerRef = React.useRef<Dialog & { __isOpen?: boolean }>(null);
  const combinedRef = useCombinedRefs(ref, innerRef);

  React.useEffect(() => {
    const dialog = innerRef.current;
    if (!dialog) {
      return;
    }
    if (isOpen && !dialog.__isOpen) {
      dialog.__isOpen = true;
      dialog.execute();
    }
    if (!isOpen && dialog.__isOpen) {
      dialog.__isOpen = false;
      dialog.done(0);
    }
  }, [isOpen]);

  return <picontrol ref={combinedRef} type="Dialog" {...props} />;
});

export const UIEdit = React.forwardRef<Edit, SizerChildProps<Edit>>(
  (props, ref) => {
    return <picontrol ref={ref} type="Edit" {...props} />;
  }
);

export const UIFrame = React.forwardRef<Frame, SizerChildProps<Frame>>(
  (props, ref) => {
    return <picontrol ref={ref} type="Frame" {...props} />;
  }
);

export const UIGroupBox = React.forwardRef<GroupBox, SizerChildProps<GroupBox>>(
  (props, ref) => {
    return <picontrol ref={ref} type="GroupBox" {...props} />;
  }
);

export const UILabel = React.forwardRef<Label, SizerChildProps<Label>>(
  (props, ref) => {
    return <picontrol ref={ref} type="Label" {...props} />;
  }
);

export const UINumericEdit = React.forwardRef<
  NumericEdit,
  SizerChildProps<NumericEdit>
>((props, ref) => {
  return (
    <picontrol ref={ref} type="NumericEdit" ctor={NumericEdit} {...props} />
  );
});

export const UINumericControl = React.forwardRef<
  NumericControl,
  SizerChildProps<
    Omit<NumericControl, "label"> & {
      sliderRange?: [number, number];
      label?: {
        text?: string;
        width?: number;
      };
    }
  >
>((props, outerRef) => {
  const { label, ...rest } = props;

  const innerRef = React.useRef<NumericControl>(null);
  const ref = useCombinedRefs(outerRef, innerRef);

  React.useEffect(() => {
    if (ref.current && label) {
      for (const [key, value] of Object.entries(label)) {
        ref.current.label[key] = value;
      }
    }
  }, [JSON.stringify(label)]);

  React.useEffect(() => {
    if (props.sliderRange) {
      ref.current?.slider.setRange(props.sliderRange[0], props.sliderRange[1]);
    }
  }, [props.sliderRange]);

  React.useEffect(() => {
    if (props.precision !== undefined) {
      ref.current?.setPrecision(props.precision);
    }
  }, [props.precision]);

  React.useEffect(() => {
    if (props.value !== undefined) {
      ref.current?.setValue(props.value);
    }
  }, [props.value]);

  return (
    <picontrol
      ref={ref}
      type="NumericControl"
      ctor={NumericControl}
      {...rest}
    />
  );
});

export const UIPushButton = React.forwardRef<
  PushButton,
  SizerChildProps<PushButton>
>((props, ref) => {
  return <picontrol ref={ref} type="PushButton" {...props} />;
});

export const UIRadioButton = React.forwardRef<
  RadioButton,
  SizerChildProps<RadioButton>
>((props, ref) => {
  return <picontrol ref={ref} type="RadioButton" {...props} />;
});

export const UIScrollBox = React.forwardRef<
  ScrollBox,
  SizerChildProps<ScrollBox>
>((props, ref) => {
  return <picontrol ref={ref} type="ScrollBox" {...props} />;
});

export const UISlider = React.forwardRef<Slider, SizerChildProps<Slider>>(
  (props, ref) => {
    return <picontrol ref={ref} type="Slider" {...props} />;
  }
);

export const UISpinBox = React.forwardRef<SpinBox, SizerChildProps<SpinBox>>(
  (props, ref) => {
    return <picontrol ref={ref} type="SpinBox" {...props} />;
  }
);

export const UITabBox = React.forwardRef<TabBox, SizerChildProps<TabBox>>(
  (props, ref) => {
    return <picontrol ref={ref} type="TabBox" {...props} />;
  }
);

export const UITextBox = React.forwardRef<TextBox, SizerChildProps<TextBox>>(
  (props, ref) => {
    return <picontrol ref={ref} type="TextBox" {...props} />;
  }
);

export const UIToolButton = React.forwardRef<
  ToolButton,
  SizerChildProps<ToolButton>
>((props, ref) => {
  return <picontrol ref={ref} type="ToolButton" {...props} />;
});

export const UITreeBox = React.forwardRef<TreeBox, SizerChildProps<TreeBox>>(
  (props, ref) => {
    return <picontrol ref={ref} type="TreeBox" {...props} />;
  }
);

export const UIViewList = React.forwardRef<
  ViewList,
  SizerChildProps<ViewList> & { mode?: `all` | `main` | `preview` }
>(({ mode, ...props }, ref) => {
  const innerRef = React.useRef<ViewList>(null);
  const combinedRef = useCombinedRefs(ref, innerRef);

  React.useEffect(() => {
    if (mode === "main") {
      combinedRef.current?.getMainViews();
    } else if (mode === "preview") {
      combinedRef.current?.getPreviews();
    } else {
      combinedRef.current?.getAll();
    }
  }, [mode]);

  return <picontrol type="ViewList" ref={combinedRef} {...props} />;
});

export const UIWebView = React.forwardRef<WebView, SizerChildProps<WebView>>(
  (props, ref) => {
    return <picontrol ref={ref} type="WebView" {...props} />;
  }
);

export function UISizer(
  props: SizerChildProps<Sizer> & { children?: React.ReactNode }
) {
  return <picontrol type="Sizer" {...props} />;
}

export function UIHorizontalSizer(
  props: SizerChildProps<Sizer> & { children?: React.ReactNode }
) {
  return <picontrol type="Sizer" {...props} />;
}

export function UIVerticalSizer(
  props: SizerChildProps<Sizer> & { children?: React.ReactNode }
) {
  return <picontrol type="Sizer" constructorProps={[true]} {...props} />;
}

export function UISpacing({ size }: { size: number }) {
  return (
    <picontrol type="Sizer" spacing={size}>
      0
    </picontrol>
  );
}

export function UIStretch({ stretchFactor = 100 }: { stretchFactor?: number }) {
  return <picontrol type="Frame" stretchFactor={stretchFactor}></picontrol>;
}
