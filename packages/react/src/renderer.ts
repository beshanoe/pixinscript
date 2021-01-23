/// <reference types="@pixinsight/core/types/controls" />
/// <reference types="@pixinsight/core/types/globals" />

import "core-js/modules/es.map";
import "core-js/modules/es.object.entries";
import Reconciler from "react-reconciler";

declare const global: any;
type Extended<T> = T & {
  __id: string;
  stretchFactor?: number;
  alignment?: number;
  parentSizer?: Sizer;
};
type Instance = Extended<Control | Sizer>;

const sizerPropsSet = new Set([
  "margin",
  "spacing",
  "scaledMargin",
  "scaledSpacing",
  "unscaledMargin",
  "unscaledSpacing",
] as const);

jsStrictMode = false;
console.clear();

console.log = console.writeln;
console.warn = console.warning;
console.error = console.critical;

const rootHostContext = {};
const childHostContext = {};

let id = 0;
let debugMode = false;

const debug = (...args: any[]) => {
  if (debugMode) {
    console.log(...args);
  }
};

const garbage = new Control();

const PixInsightReconciler = Reconciler({
  supportsMutation: true,
  now: Date.now,
  getRootHostContext() {
    debug("getRootHostContext");
    return rootHostContext;
  },
  getChildHostContext() {
    debug("getChildHostContext");
    return childHostContext;
  },
  prepareForCommit() {
    debug("prepareForCommit");
    return null;
  },
  resetAfterCommit() {
    debug("resetAfterCommit");
  },
  //@ts-ignore
  clearContainer() {
    debug("clearContainer");
  },
  shouldSetTextContent(type, props) {
    debug("shouldSetTextContent");
    return false;
  },
  getPublicInstance(instance: any) {
    debug(`getPublicInstance ${instance.__id}`);
    return instance;
  },
  createInstance(
    _type: "picontrol",
    {
      type: controlType,
      ctor,
      constructorProps,
      stretchFactor = 0,
      alignment = 0,
      ...props
    }: {
      type: string;
      ctor: new (...args: any[]) => any;
      constructorProps?: any[];
      stretchFactor?: number;
      alignment?: number;
    }
  ) {
    debug("createInstance", controlType, props);
    let instance = new (ctor ?? global[controlType])(
      ...(constructorProps ?? [])
    );
    const instanceProps: Record<string, any> = {
      __id: controlType + id++,
      stretchFactor,
      alignment,
      ...props,
    };
    if (instance instanceof Control && !instance.sizer) {
      instance.sizer = new Sizer(true);
    }

    for (const key of Object.keys(instanceProps)) {
      if (sizerPropsSet.has(key as any) && instance instanceof Control) {
        instance.sizer[key as keyof Sizer] = instanceProps[key];
      } else {
        instance[key] = instanceProps[key];
      }
    }

    return instance;
  },
  createTextInstance(text) {
    debug("createTextInstance ", text);
    const label = new Label();
    //@ts-ignore
    label.__id = "textNode" + id++;
    //@ts-ignore
    label.stretchFactor = 0;
    //@ts-ignore
    label.alignment = 0;
    label.text = text;

    return label;
  },
  appendInitialChild(parent: Instance, child: Instance) {
    debug(`appendInitialChild ${parent.__id} ${child.__id}`);
    const args = [child, child.stretchFactor];
    if (!(child instanceof Sizer)) {
      args.push(child.alignment);
    }
    const sizer = parent instanceof Sizer ? parent : parent.sizer;
    child.parentSizer = sizer;
    sizer.add(...args);
  },
  appendChild(parent: Instance, child: Instance) {
    debug(`appendChild ${parent.__id} ${child.__id}`);
    const args = [child, child.stretchFactor];
    if (!(child instanceof Sizer)) {
      args.push(child.alignment);
    }
    const sizer = parent instanceof Sizer ? parent : parent.sizer;
    child.parentSizer = sizer;
    sizer.add(...args);
  },
  appendChildToContainer(parent: Instance, child: Instance) {
    debug(`appendChildToContainer ${parent.__id} ${child.__id}`);
    const args = [child, child.stretchFactor];
    if (!(child instanceof Sizer)) {
      args.push(child.alignment);
    }
    const sizer = parent instanceof Sizer ? parent : parent.sizer;
    child.parentSizer = sizer;
    sizer.add(...args);
  },
  finalizeInitialChildren(domElement, type, props) {
    debug("finalizeInitialChildren");
    return false;
  },
  insertBefore(parent: Instance, child: Instance, beforeChild: Instance) {
    const sizer = parent instanceof Sizer ? parent : parent.sizer;
    const args = [sizer.indexOf(beforeChild), child, child.stretchFactor];
    if (!(child instanceof Sizer)) {
      args.push(child.alignment);
    }
    child.parentSizer = sizer;
    sizer.insert(...args);
  },
  removeChild(parent: Extended<Control>, child: Extended<Control>) {
    debug(`removeChild ${parent.__id} ${child.__id}`);
    const sizer = parent instanceof Sizer ? parent : parent.sizer;
    sizer.remove(child);
    child.parent = garbage;
  },
  removeChildFromContainer(
    parent: Extended<Control>,
    child: Extended<Control>
  ) {
    debug(`removeChildFromContainer ${parent.__id} ${child.__id}`);
    const sizer = parent instanceof Sizer ? parent : parent.sizer;
    sizer.remove(child);
    child.parent = garbage;
  },
  prepareUpdate(control: Extended<Control>, type, oldProps, newProps) {
    debug(`prepareUpdate ${control.__id} ${type}`);
    return true;
  },
  commitUpdate(
    control: Instance,
    updatePayload: any,
    type: string,
    oldProps: any,
    newProps: any
  ) {
    debug(`commitUpdate ${control.__id} ${type}`);
    Object.keys(newProps).forEach((propName) => {
      const propValue = newProps[propName];

      if (sizerPropsSet.has(propName as any)) {
        const sizer = control instanceof Sizer ? control : control.sizer;
        sizer[propName as keyof Sizer] = propValue;
      } else {
        (control as any)[propName] = propValue;
      }
    });
    if (newProps.stretchFactor !== oldProps.stretchFactor) {
      control.parentSizer?.setStretchFactor(control, newProps.stretchFactor);
    }
    if (newProps.alignment !== oldProps.alignment) {
      control.parentSizer?.setAlignment(control, newProps.alignment);
    }
  },
  commitTextUpdate(textInstance: Extended<Label>, oldText, newText) {
    debug(`commitTextUpdate ${textInstance.__id} ${oldText} ${newText}`);
    textInstance.text = newText;
  },
});

export function directRender(
  element: React.ReactElement,
  container: (Control | Sizer) & { _rootContainer?: any },
  callback?: () => void
) {
  if (!container._rootContainer) {
    container._rootContainer = PixInsightReconciler.createContainer(
      container,
      false,
      false
    );
  }
  return PixInsightReconciler.updateContainer(
    element,
    container._rootContainer,
    null,
    callback ?? (() => null)
  );
}

export function render(
  element: React.ReactElement,
  options: {
    debug?: boolean;
    dialog?: Partial<Dialog>;
  } = {}
) {
  var dialog = new Dialog();
  Object.entries(options.dialog ?? {}).forEach(([key, value]) => {
    (<any>dialog)[key] = value;
  });

  var sizer = new Sizer(true);
  dialog.sizer = sizer;

  global.setTimeout = function (cb: () => void, ms: number) {
    var timer = new Timer();
    timer.interval = ms / 1000;
    timer.periodic = false;
    timer.onTimeout = function () {
      cb();
    };
    timer.start();
  };

  debugMode = options.debug ?? false;

  directRender(element, dialog.sizer);

  dialog.execute();
}
