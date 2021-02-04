/// <reference types="@pixinsight/core/types/controls" />
/// <reference types="@pixinsight/core/types/globals" />
import "core-js/modules/es.map";
import "core-js/modules/es.object.entries";
import React from "react";
import Reconciler from "react-reconciler";
import { DialogContext } from "./DialogContext";

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

type SizerProps = typeof sizerPropsSet extends Set<infer T> ? T : never;

jsStrictMode = false;

console.log = (...args: any[]) => console.writeln(args.join(" "));
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
const childrenBySizerMap = new Map<Sizer, (Control | Sizer)[]>();

function addChild(
  parent: Sizer,
  ...[child, ...args]: Parameters<typeof Sizer.prototype.add>
) {
  if (!childrenBySizerMap.has(parent)) {
    childrenBySizerMap.set(parent, []);
  }
  const children = childrenBySizerMap.get(parent)!;
  children.push(child);
  parent.add(child, ...args);
}

function insertChild(
  parent: Sizer,
  ...[index, child, ...args]: Parameters<typeof Sizer.prototype.insert>
) {
  if (!childrenBySizerMap.has(parent)) {
    childrenBySizerMap.set(parent, []);
  }
  const children = childrenBySizerMap.get(parent)!;
  children.splice(index, 0, child);
  parent.insert(index, child, ...args);
}

function removeChild(
  parent: Sizer,
  ...[childToRemove]: Parameters<typeof Sizer.prototype.remove>
) {
  if (!childrenBySizerMap.has(parent)) {
    childrenBySizerMap.set(parent, []);
  }
  const children = childrenBySizerMap.get(parent)!;

  if (childToRemove instanceof Sizer && childrenBySizerMap.has(childToRemove)) {
    childrenBySizerMap
      .get(childToRemove)
      ?.forEach((subchild) => removeChild(childToRemove, subchild));
    childrenBySizerMap.delete(childToRemove);
  }

  childrenBySizerMap.set(
    parent,
    children.filter((child) => child !== childToRemove)
  );
  if (childToRemove instanceof Control) {
    childToRemove.parent = garbage;
  }
}

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
  resetAfterCommit(containerInfo: any) {
    debug("resetAfterCommit");
    setTimeout(() => {
      if (!containerInfo?.dialog?.userResizable) {
        containerInfo?.dialog?.adjustToContents();
      }
    }, 0);
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
      children,
      ...props
    }: {
      type: string;
      ctor: new (...args: any[]) => any;
      constructorProps?: any[];
      stretchFactor?: number;
      alignment?: number;
      children: any;
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
        instance.sizer[key as SizerProps] = instanceProps[key];
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
    if (child instanceof Dialog) {
      return;
    }
    const args: Parameters<typeof Sizer.prototype.add> = [
      child,
      child.stretchFactor,
    ];
    if (!(child instanceof Sizer)) {
      args.push(child.alignment);
    }
    const sizer = parent instanceof Sizer ? parent : parent.sizer;
    child.parentSizer = sizer;

    addChild(sizer, ...args);
  },
  appendChild(parent: Instance, child: Instance) {
    debug(`appendChild ${parent.__id} ${child.__id}`);
    if (child instanceof Dialog) {
      return;
    }
    const args: Parameters<typeof Sizer.prototype.add> = [
      child,
      child.stretchFactor,
    ];
    if (!(child instanceof Sizer)) {
      args.push(child.alignment);
    }
    const sizer = parent instanceof Sizer ? parent : parent.sizer;
    child.parentSizer = sizer;

    addChild(sizer, ...args);
  },
  appendChildToContainer(parent: Instance, child: Instance) {
    debug(`appendChildToContainer ${parent.__id} ${child.__id}`);
    if (child instanceof Dialog) {
      return;
    }
    const args: Parameters<typeof Sizer.prototype.add> = [
      child,
      child.stretchFactor,
    ];
    if (!(child instanceof Sizer)) {
      args.push(child.alignment);
    }
    const sizer = parent instanceof Sizer ? parent : parent.sizer;
    child.parentSizer = sizer;

    addChild(sizer, ...args);
  },

  finalizeInitialChildren(domElement, type, props) {
    debug("finalizeInitialChildren");
    return false;
  },

  insertBefore(parent: Instance, child: Instance, beforeChild: Instance) {
    debug(`insertBefore ${parent.__id} ${child.__id}`);
    if (child instanceof Dialog) {
      return;
    }
    const sizer = parent instanceof Sizer ? parent : parent.sizer;
    const args: Parameters<typeof Sizer.prototype.insert> = [
      sizer.indexOf(beforeChild),
      child,
      child.stretchFactor,
    ];
    if (!(child instanceof Sizer)) {
      args.push(child.alignment);
    }
    child.parentSizer = sizer;
    insertChild(sizer, ...args);
  },

  removeChild(parent: Extended<Control>, child: Extended<Control>) {
    debug(`removeChild ${parent.__id} ${child.__id}`);
    if (child instanceof Dialog) {
      return;
    }
    const sizer = parent instanceof Sizer ? parent : parent.sizer;

    removeChild(sizer, child);
  },
  removeChildFromContainer(
    parent: Extended<Control>,
    child: Extended<Control>
  ) {
    debug(`removeChildFromContainer ${parent.__id} ${child.__id}`);
    if (child instanceof Dialog) {
      return;
    }
    const sizer = parent instanceof Sizer ? parent : parent.sizer;
    removeChild(sizer, child);
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
    allNewProps: any
  ) {
    const {
      type: controlType,
      ctor,
      constructorProps,
      children,
      ...newProps
    } = allNewProps;

    debug(`commitUpdate ${control.__id} ${type}`);
    Object.keys(newProps).forEach((propName) => {
      const propValue = newProps[propName];

      if (sizerPropsSet.has(propName as any)) {
        const sizer = control instanceof Sizer ? control : control.sizer;
        if (sizer[propName as SizerProps] !== propValue) {
          sizer[propName as SizerProps] = propValue;
        };
      } else {
        if ((control as any)[propName] !== propValue) {
          (control as any)[propName] = propValue;
        }
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
    resizable?: boolean;
    dialog?: Partial<Dialog>;
  } = {}
) {
  var dialog = new Dialog();
  Object.entries(options.dialog ?? {}).forEach(([key, value]) => {
    (dialog as any)[key] = value;
  });

  var sizer = new Sizer(true);
  // @ts-ignore
  sizer.__id = "RootDialogSizer";
  // @ts-ignore
  sizer.dialog = dialog;
  dialog.sizer = sizer;

  global.setTimeout = function(cb: () => void, ms: number) {
    var timer = new Timer();
    timer.interval = ms / 1000;
    timer.periodic = false;
    timer.onTimeout = function() {
      cb();
    };
    timer.start();
  };

  debugMode = options.debug ?? false;

  // TODO add ErrorBoundaries
  directRender(
    <DialogContext.Provider value={dialog}>{element}</DialogContext.Provider>,
    dialog.sizer
  );

  if (!dialog.userResizable) {
    dialog.setFixedSize();
  }

  dialog.execute();
}
