import * as Reconciler from "react-reconciler";

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

const PixInsightReconciler = Reconciler({
  now: Date.now,
  getRootHostContext: () => {
    console.writeln("getRootHostContext");
    return rootHostContext;
  },
  getChildHostContext: () => {
    console.writeln("getChildHostContext");
    return childHostContext;
  },
  prepareForCommit: () => {
    console.writeln("prepareForCommit");
    return null;
  },
  resetAfterCommit: () => {
    console.writeln("resetAfterCommit");
  },
  clearContainer: () => {
    console.writeln("clearContainer");
  },
  shouldSetTextContent: (type, props) => {
    console.writeln("shouldSetTextContent");
    return false;
  },
  createInstance: (type, props: any) => {
    console.writeln("createInstance", type, props);
    let instance = tagToFactoryMap[type]();
    instance.__id = type + id++;
    for (const key of Object.keys(props)) {
      instance[key] = props[key];
    }
    return instance;
  },
  createTextInstance: (text) => {
    console.writeln("createTextInstance ", text);
    const label = new Label();
    label.__id = "textNode" + id++;
    label.text = text;
    return label;
  },
  appendInitialChild: (parent: Sizer, child) => {
    console.writeln(`appendInitialChild ${parent.__id} ${child.__id}`);
    parent.add(child);
  },
  appendChild(parent, child) {
    console.writeln(`appendChild ${parent.__id} ${child.__id}`);
    parent.add(child);
  },
  finalizeInitialChildren: (domElement, type, props) => {
    console.writeln("finalizeInitialChildren");
    return false;
  },
  supportsMutation: true,
  appendChildToContainer: (parent, child) => {
    console.writeln(`appendChildToContainer ${parent.__id} ${child.__id}`);
    parent.add(child);
  },
  prepareUpdate(control, type, oldProps, newProps) {
    console.writeln(
      `prepareUpdate ${control.__id} ${type} ${JSON.stringify({
        oldProps,
      })} ${JSON.stringify({ newProps })}`
    );
    return true;
  },
  commitUpdate(control, updatePayload, type, oldProps, newProps) {
    console.writeln(
      `commitUpdate ${type} ${JSON.stringify({
        oldProps,
      })} ${JSON.stringify({ newProps })}`
    );
    Object.keys(newProps).forEach((propName) => {
      const propValue = newProps[propName];
      control[propName] = propValue;
    });
  },
  commitTextUpdate(textInstance, oldText, newText) {
    console.writeln(
      `commitTextUpdate ${textInstance.__id} ${oldText} ${newText}`
    );
    textInstance.text = newText;
  },
  removeChild(parent: Sizer, child: Control) {
    console.writeln(`removeChild ${parent.__id} ${child.__id}`);
    parent.remove(child);
  },
} as any);

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

export function render(element) {
  var dialog = new Dialog();
  dialog.windowTitle = "Hello";

  var sizer = new Sizer(true);
  dialog.sizer = sizer;

  global.setTimeout = function (cb, ms) {
    console.log("setTimeout ", ms);
    var timer = new Timer();
    timer.interval = ms / 1000;
    timer.periodic = false;
    timer.onTimeout = function () {
      console.log("timeout cb ", ms);
      cb();
    };
    timer.start();
  };

  directRender(element, dialog.sizer);

  dialog.execute();
}
