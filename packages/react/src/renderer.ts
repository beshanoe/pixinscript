/// <reference types="@pixinsight/core/types/controls" />
/// <reference types="@pixinsight/core/types/globals" />

import * as Reconciler from "react-reconciler";

declare const global: any;
type Extended<T> = T & {
  __id: string;
  stretchFactor?: number;
  alignment?: number;
};

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
      constructorProps,
      stretchFactor = 0,
      alignment = 0,
      ...props
    }: {
      type: string;
      constructorProps?: any[];
      stretchFactor?: number;
      alignment?: number;
    }
  ) {
    debug("createInstance", controlType, props);
    let instance = new global[controlType](...(constructorProps ?? []));
    const instanceProps = {
      __id: controlType + id++,
      stretchFactor,
      alignment,
      ...props,
    };

    for (const key of Object.keys(instanceProps)) {
      instance[key] = instanceProps[key];
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
  appendInitialChild(parent: Extended<Sizer>, child: Extended<Control>) {
    debug(`appendInitialChild ${parent.__id} ${child.__id}`);
    const args = [child, child.stretchFactor];
    if (!(child instanceof Sizer)) {
      args.push(child.alignment);
    }
    parent.add(...args);
  },
  appendChild(parent: Extended<Sizer>, child: Extended<Control>) {
    debug(`appendChild ${parent.__id} ${child.__id}`);
    const args = [child, child.stretchFactor];
    if (!(child instanceof Sizer)) {
      args.push(child.alignment);
    }
    parent.add(...args);
  },
  appendChildToContainer(parent: Extended<Sizer>, child: Extended<Control>) {
    debug(`appendChildToContainer ${parent.__id} ${child.__id}`);
    const args = [child, child.stretchFactor];
    if (!(child instanceof Sizer)) {
      args.push(child.alignment);
    }
    parent.add(...args);
  },
  finalizeInitialChildren(domElement, type, props) {
    debug("finalizeInitialChildren");
    return false;
  },
  insertBefore(
    parent: Extended<Sizer>,
    child: Extended<Control>,
    beforeChild: Extended<Control>
  ) {
    const args = [parent.indexOf(beforeChild), child, child.stretchFactor];
    if (!(child instanceof Sizer)) {
      args.push(child.alignment);
    }
    parent.insert(...args);
  },
  removeChild(parent: Extended<Sizer>, child: Extended<Control>) {
    debug(`removeChild ${parent.__id} ${child.__id}`);
    parent.remove(child);
  },
  removeChildFromContainer(parent: Extended<Sizer>, child: Extended<Control>) {
    debug(`removeChildFromContainer ${parent.__id} ${child.__id}`);
    parent.remove(child);
  },
  prepareUpdate(control: Extended<Control>, type, oldProps, newProps) {
    debug(`prepareUpdate ${control.__id} ${type}`);
    return true;
  },
  commitUpdate(
    control: Extended<Control>,
    updatePayload,
    type,
    oldProps,
    newProps
  ) {
    debug(`commitUpdate ${control.__id} ${type}`);
    Object.keys(newProps).forEach((propName) => {
      const propValue = newProps[propName];
      control[propName] = propValue;
    });
  },
  commitTextUpdate(textInstance: Extended<Label>, oldText, newText) {
    debug(`commitTextUpdate ${textInstance.__id} ${oldText} ${newText}`);
    textInstance.text = newText;
  },
});

export function directRender(element, container?, callback?: () => void) {
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
    callback
  );
}

export function render(
  element,
  options: {
    debug?: boolean;
  } = {}
) {
  var dialog = new Dialog();
  dialog.windowTitle = "Hello";

  var sizer = new Sizer(true);
  dialog.sizer = sizer;

  global.setTimeout = function (cb, ms) {
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
