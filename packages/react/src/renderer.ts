import * as Reconciler from "react-reconciler";

declare const global: any;
type WithId<T> = T & { __id: string };

jsStrictMode = false;
console.clear();

console.log = console.writeln;
console.warn = console.warning;
console.error = console.critical;

const rootHostContext = {};
const childHostContext = {};

const tagToFactoryMap = {
  dialog: () => new Dialog(),
  vsizer: () => new Sizer(true),
  hsizer: () => new Sizer(false),
  label: () => new Label(),
  button: () => new PushButton(),
};

let id = 0;
let debugMode = false;

const debug = (...args: any[]) => {
  if (debugMode) {
    console.log(...args);
  }
};

const PixInsightReconciler = Reconciler({
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
  createInstance(type: keyof typeof tagToFactoryMap, props: any) {
    debug("createInstance", type, props);
    let instance = tagToFactoryMap[type]();
    //@ts-ignore
    instance.__id = type + id++;
    for (const key of Object.keys(props)) {
      instance[key] = props[key];
    }
    return instance;
  },
  createTextInstance(text) {
    debug("createTextInstance ", text);
    const label = new Label();
    //@ts-ignore
    label.__id = "textNode" + id++;
    label.text = text;
    return label;
  },
  appendInitialChild(parent: WithId<Sizer>, child: WithId<Control>) {
    debug(`appendInitialChild ${parent.__id} ${child.__id}`);
    parent.add(child);
  },
  appendChild(parent: WithId<Sizer>, child: WithId<Control>) {
    debug(`appendChild ${parent.__id} ${child.__id}`);
    parent.add(child);
  },
  finalizeInitialChildren(domElement, type, props) {
    debug("finalizeInitialChildren");
    return false;
  },
  supportsMutation: true,
  appendChildToContainer(parent: WithId<Sizer>, child: WithId<Control>) {
    debug(`appendChildToContainer ${parent.__id} ${child.__id}`);
    parent.add(child);
  },
  prepareUpdate(control: WithId<Control>, type, oldProps, newProps) {
    debug(
      `prepareUpdate ${control.__id} ${type} ${JSON.stringify({
        oldProps,
      })} ${JSON.stringify({ newProps })}`
    );
    return true;
  },
  commitUpdate(
    control: WithId<Control>,
    updatePayload,
    type,
    oldProps,
    newProps
  ) {
    debug(
      `commitUpdate ${type} ${JSON.stringify({
        oldProps,
      })} ${JSON.stringify({ newProps })}`
    );
    Object.keys(newProps).forEach((propName) => {
      const propValue = newProps[propName];
      control[propName] = propValue;
    });
  },
  commitTextUpdate(textInstance: WithId<Label>, oldText, newText) {
    debug(`commitTextUpdate ${textInstance.__id} ${oldText} ${newText}`);
    textInstance.text = newText;
  },
  removeChild(parent: WithId<Sizer>, child: WithId<Control>) {
    debug(`removeChild ${parent.__id} ${child.__id}`);
    parent.remove(child);
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
