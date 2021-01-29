import { UIEdit, UIHorizontalSizer, UISlider } from "@pixinsight/ui";
import React, { ComponentProps, useEffect, useMemo, useState } from "react";

export function NumericControl(props: ComponentProps<typeof UISlider>) {
  const [factor, factorProps] = useMemo(() => {
    let factor: number = 1;
    if (props.stepSize != null) {
      const [, rest] = props.stepSize.toString().split(/[.,]/);
      if (rest) {
        factor = Math.pow(10, rest.length);
      }
    }
    return [
      factor,
      {
        minValue: props.minValue * factor,
        maxValue: props.maxValue * factor,
        stepSize: props.stepSize * factor,
        tickInterval: props.tickInterval * factor,
      },
    ];
  }, [
    props.stepSize,
    props.maxValue,
    props.minValue,
    props.stepSize,
    props.tickInterval,
  ]);

  const [text, setText] = useState<string>(props.value?.toString() ?? "0");
  const [value, setValue] = useState<number>(props.value ?? 0);

  useEffect(() => {
    setText(props.value.toString());
    setValue(props.value * factor);
  }, [props.value]);

  function validateText() {
    const parsed = parseFloat(text);
    if (
      isNaN(parsed) &&
      parsed >= factorProps.minValue &&
      parsed <= factorProps.maxValue
    ) {
      setText(value.toString());
    } else {
      setText(parsed.toString());
      setValue(parsed * factor);
    }
  }

  return (
    <UIHorizontalSizer spacing={5}>
      <UIEdit
        maxWidth={50}
        text={text}
        onTextUpdated={(text: string) => setText(text)}
        onEditCompleted={validateText}
        onLoseFocus={validateText}
      />
      <UISlider
        stretchFactor={1}
        {...props}
        {...factorProps}
        value={value}
        onValueUpdated={(value: number) => {
          setText((value / factor).toString());
          setValue(value);
          props.onValueUpdated?.(value / factor);
        }}
      />
    </UIHorizontalSizer>
  );
}
