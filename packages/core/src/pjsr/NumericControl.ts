//    "This product is based on software from the PixInsight project, developed
//    by Pleiades Astrophoto and its contributors (https://pixinsight.com/)."
// ----------------------------------------------------------------------------
import { FocusStyle_Click } from "./FocusStyle";
import { HorizontalSizer } from "./Sizer";
import { HorizontalSlider, TickStyle_NoTicks } from "./Slider";
import { StdButton_Ok } from "./StdButton";
import { StdIcon_Error } from "./StdIcon";
import { TextAlign_Right, TextAlign_VertCenter } from "./TextAlign";

// ----------------------------------------------------------------------------

/*
 * NumericEdit
 *
 * A label/edit compound control to edit numeric parameters.
 */
export class NumericEdit extends Control {
  value: number;
  lowerBound: number;
  upperBound: number;
  real: boolean;
  precision: number;
  fixed: boolean;
  scientific: boolean;
  sciTriggerExp: number;
  autoEditWidth: boolean;
  onValueUpdated: ((value: number) => void) | null;
  label: Label;
  edit: Edit;
  sizer: HorizontalSizer;
  childToFocus: Edit;
  backgroundColor: number;

  constructor(parent?: Control) {
    super();

    this.__base__ = Control;
    if (parent) this.__base__(parent);
    else this.__base__();

    this.value = 0.0;
    this.lowerBound = 0.0;
    this.upperBound = 1.0;
    this.real = true;
    this.precision = 6;
    this.fixed = false;
    this.scientific = false;
    this.sciTriggerExp = -1;
    this.autoEditWidth = true;
    this.onValueUpdated = null;

    this.label = new Label();
    this.label.textAlignment = TextAlign_Right | TextAlign_VertCenter;
    this.label.onMousePress = () => {
      if (!this.edit.readOnly) {
        this.evaluate();
        this.edit.hasFocus = true;
        this.edit.selectAll();
      }
    };

    this.edit = new Edit();
    this.edit.onEditCompleted = () => this.evaluate();
    this.edit.onGetFocus = () => {
      //if ( !this.readOnly )
      //   this.selectAll();
    };
    this.edit.onLoseFocus = () => {
      if (!this.edit.readOnly) this.evaluate();
    };

    this.sizer = new HorizontalSizer();
    this.sizer.spacing = 4;
    this.sizer.add(this.label);
    this.sizer.add(this.edit);

    this.adjustToContents();
    this.setFixedHeight();
    this.childToFocus = this.edit;

    this.backgroundColor = 0; // transparent
  }

  setValue(value: number) {
    this.value = Math.range(
      this.real ? value : Math.round(value),
      this.lowerBound,
      this.upperBound
    );
    this.updateControls();
  }

  updateControls() {
    this.edit.text = this.valueAsString(this.value);
  }

  valueAsString(value: number): string {
    value = Math.range(value, this.lowerBound, this.upperBound);

    if (this.real) {
      if (this.scientific)
        if (
          this.sciTriggerExp < 0 ||
          (value != 0 &&
            (Math.abs(value) > Math.pow10(+this.sciTriggerExp) ||
              Math.abs(value) < Math.pow10(-this.sciTriggerExp)))
        )
          return format("%.*e", this.precision, value);

      return format(
        "%.*f",
        this.precisionForValue(this.precision, value),
        value
      );
    }

    return format("%.0f", value);
  }

  minEditWidth(): number {
    let n = Math.trunc(
      Math.max(
        this.valueAsString(this.lowerBound).length,
        this.valueAsString(this.upperBound).length
      )
    );
    return (
      this.edit.font.width("0".repeat(n + 1)) +
      this.logicalPixelsToPhysical(1 + 2 + 2 + 1)
    );
  }

  adjustEditWidth() {
    this.edit.setFixedWidth(this.minEditWidth());
    this.adjustToContents();
  }

  setReal(real: boolean) {
    if (this.real != real) {
      this.real = real;
      if (!this.real) this.value = Math.round(this.value);
      if (this.autoEditWidth) this.adjustEditWidth();
      this.setValue(this.value);
    }
  }

  setRange(lr: number, ur: number) {
    this.lowerBound = Math.min(lr, ur);
    this.upperBound = Math.max(lr, ur);
    if (this.autoEditWidth) this.adjustEditWidth();
    this.setValue(this.value);
  }

  setPrecision(precision: number) {
    this.precision = Math.range(precision, 0, 15);
    if (this.autoEditWidth) this.adjustEditWidth();
    this.updateControls();
  }

  enableFixedPrecision(enable: boolean) {
    this.fixed = enable;
    if (this.autoEditWidth) this.adjustEditWidth();
    this.updateControls();
  }

  enableScientificNotation(enable: boolean) {
    this.scientific = enable;
    if (this.autoEditWidth) this.adjustEditWidth();
    this.updateControls();
  }

  setScientificNotationTriggerExponent(exp10: number) {
    this.sciTriggerExp = exp10;
    if (this.autoEditWidth) this.adjustEditWidth();
    this.updateControls();
  }

  precisionForValue(precision: number, value: number): number {
    if (!this.fixed) {
      value = Math.abs(value);
      if (value >= 10)
        return (
          Math.max(0, precision - Math.max(0, Math.trunc(Math.log10(value)))) |
          0
        );
    }
    return precision;
  }

  evaluate() {
    if (this.edit.readOnly) return;

    try {
      let newValue: number;
      if (this.real) {
        newValue = this.edit.text.toNumber();
        newValue = Math.roundTo(
          newValue,
          this.precisionForValue(this.precision, newValue)
        );
      } else {
        newValue = this.edit.text.toInt();
      }

      if (this.lowerBound < this.upperBound)
        if (newValue < this.lowerBound || newValue > this.upperBound)
          throw new Error(
            format(
              "Numeric value out of range: %.16g - valid range is [%.16g,%.16g]",
              newValue,
              this.lowerBound,
              this.upperBound
            )
          );

      let changed = newValue != this.value;
      if (changed) this.value = newValue;
      this.updateControls();
      if (changed && this.onValueUpdated) this.onValueUpdated(this.value);
    } catch (x) {
      new MessageBox(
        x.message,
        "Evaluation Error",
        StdIcon_Error,
        StdButton_Ok
      ).execute();
      this.updateControls();
    }
  }
}

// ----------------------------------------------------------------------------

/*
 * NumericControl
 *
 * A label/edit/slider compound control to edit numeric parameters.
 */
export class NumericControl extends NumericEdit {
  exponential: boolean;
  slider: HorizontalSlider;
  __base_1__: any;

  constructor(parent: Control) {
    super();
    this.__base_1__ = NumericEdit;
    this.__base_1__(parent);

    this.exponential = false;

    this.slider = new HorizontalSlider(this);
    this.slider.setRange(0, 50);
    this.slider.setScaledMinWidth(50 + 16);
    this.slider.setFixedHeight(this.edit.height);
    this.slider.pageSize = 5;
    this.slider.tickInterval = 5;
    this.slider.tickStyle = TickStyle_NoTicks;
    this.slider.focusStyle = FocusStyle_Click;
    this.slider.onGetFocus = () => {
      if (!this.edit.readOnly) {
        this.edit.hasFocus = true;
        this.edit.selectAll();
      }
    };
    this.slider.onValueUpdated = (sliderValue: number) => {
      let newValue = this.sliderValueToControl(sliderValue);
      if (newValue != this.value) {
        this.value = newValue;
        this.edit.text = this.valueAsString(newValue);
        if (this.onValueUpdated) this.onValueUpdated(newValue);
      }
    };

    this.sizer.add(this.slider, 100);
    this.adjustToContents();
  }

  sliderValueToControl(sliderValue: number): number {
    let sliderMinValue = this.slider.minValue;
    let sliderMaxValue = this.slider.maxValue;
    let sliderDelta = sliderMaxValue - sliderMinValue;
    let sliderNormValue = (sliderValue - sliderMinValue) / sliderDelta;
    return Math.range(
      Math.roundTo(
        this.exponential
          ? (1 + this.lowerBound) *
              Math.exp(
                Math.ln((1 + this.upperBound) / (1 + this.lowerBound)) *
                  sliderNormValue
              ) -
              1
          : this.lowerBound +
              (this.upperBound - this.lowerBound) * sliderNormValue,
        this.real ? Math.max(0, Math.trunc(Math.log10(sliderDelta))) : 0
      ),
      this.lowerBound,
      this.upperBound
    );
  }

  controlValueToSlider(value: number): number {
    let sliderMinValue = this.slider.minValue;
    let sliderMaxValue = this.slider.maxValue;
    let sliderDelta = sliderMaxValue - sliderMinValue;
    return Math.range(
      Math.round(
        sliderMinValue +
          sliderDelta *
            (this.exponential
              ? Math.ln((1 + value) / (1 + this.lowerBound)) /
                Math.ln((1 + this.upperBound) / (1 + this.lowerBound))
              : (value - this.lowerBound) / (this.upperBound - this.lowerBound))
      ),
      sliderMinValue,
      sliderMaxValue
    );
  }

  // Override NumericEdit.updateControls
  updateControls() {
    super.updateControls();
    this.slider.value = this.controlValueToSlider(this.value);
  }
}
