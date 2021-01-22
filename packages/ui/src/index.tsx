/// <reference types="@pixinsight/core/types/controls" />

import * as React from "react";

type Props<Base> = Partial<Omit<Base, "constructor">> & {
  constructorProps?: any[];
};

type SizerChildProps<Base> = Props<Base> & {
  stretchFactor?: number;
  alignment?: number;
  children?: React.ReactNode;
};

declare global {
  namespace JSX {
    interface IntrinsicElements {
      picontrol: { [key: string]: any; type: string };
    }
  }
}

function useCombinedRefs<T>(...refs: React.ForwardedRef<T>[]) {
  const targetRef = React.useRef<T>();

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

export function CheckBox(props: SizerChildProps<CheckBox>) {
  return <picontrol type="CheckBox" {...props} />;
}
export function ComboBox(props: SizerChildProps<ComboBox>) {
  return <picontrol type="ComboBox" {...props} />;
}
export function Dialog(props: Props<Dialog>) {
  return <picontrol type="Dialog" {...props} />;
}
export function Edit(props: SizerChildProps<Edit>) {
  return <picontrol type="Edit" {...props} />;
}
export function Frame(props: SizerChildProps<Frame>) {
  return <picontrol type="Frame" {...props} />;
}
export function GroupBox(props: SizerChildProps<GroupBox>) {
  return <picontrol type="GroupBox" {...props} />;
}
export function Label(props: SizerChildProps<Label>) {
  return <picontrol type="Label" {...props} />;
}
export function PushButton(props: SizerChildProps<PushButton>) {
  return <picontrol type="PushButton" {...props} />;
}
export function RadioButton(props: SizerChildProps<RadioButton>) {
  return <picontrol type="RadioButton" {...props} />;
}
export function ScrollBox(props: SizerChildProps<ScrollBox>) {
  return <picontrol type="ScrollBox" {...props} />;
}
export function Slider(props: SizerChildProps<Slider>) {
  return <picontrol type="Slider" {...props} />;
}
export function SpinBox(props: SizerChildProps<SpinBox>) {
  return <picontrol type="SpinBox" {...props} />;
}
export function TabBox(props: SizerChildProps<TabBox>) {
  return <picontrol type="TabBox" {...props} />;
}
export function TextBox(props: SizerChildProps<TextBox>) {
  return <picontrol type="TextBox" {...props} />;
}
export function ToolButton(props: SizerChildProps<ToolButton>) {
  return <picontrol type="ToolButton" {...props} />;
}
export function TreeBox(props: SizerChildProps<TreeBox>) {
  return <picontrol type="TreeBox" {...props} />;
}
export const ViewList = React.forwardRef<
  ViewList,
  Props<ViewList> & { mode?: `all` | `main` | `preview` }
>(({ mode, ...props }, ref) => {
  const innerRef = React.useRef<ViewList>(null);
  const refToUse = useCombinedRefs(ref, innerRef);

  React.useEffect(() => {
    if (mode === "main") {
      refToUse.current?.getMainViews();
    } else if (mode === "preview") {
      refToUse.current?.getPreviews();
    } else {
      refToUse.current?.getAll();
    }
  }, [mode]);

  return <picontrol type="ViewList" ref={refToUse} {...props} />;
});
export function WebView(props: SizerChildProps<WebView>) {
  return <picontrol type="WebView" {...props} />;
}

export function Sizer(
  props: SizerChildProps<Sizer> & { children?: React.ReactNode }
) {
  return <picontrol type="Sizer" {...props} />;
}
export function HorizontalSizer(
  props: SizerChildProps<Sizer> & { children?: React.ReactNode }
) {
  return <picontrol type="Sizer" {...props} />;
}
export function VerticalSizer(
  props: SizerChildProps<Sizer> & { children?: React.ReactNode }
) {
  return <picontrol type="Sizer" constructorProps={[true]} {...props} />;
}
export function Spacing({ size }: { size: number }) {
  return (
    <picontrol type="Sizer" spacing={size}>
      0
    </picontrol>
  );
}
export function Stretch({ stretchFactor = 100 }: { stretchFactor?: number }) {
  return <picontrol type="Sizer" stretchFactor={stretchFactor}></picontrol>;
}
