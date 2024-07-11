import "core-js/modules/es.map";
import "core-js/modules/es.object.entries";
import "core-js/modules/es.object.assign";
import "core-js/modules/es.promise";
import "core-js/modules/es.symbol";

console.log = (...args) => console.writeln(args.join(" "));
console.warn = console.warning;
console.error = console.critical;

const getNextTimerId = (
    (id = 0) =>
        () =>
            id++
)();
const timers = {};

global.setTimeout = function (cb, ms, ...args) {
    let timer = new Timer();
    timer.interval = ms / 1000;
    timer.periodic = false;
    timer.onTimeout = function () {
        cb(...args);
    };
    timer.start();

    let timerId = getNextTimerId();
    timers[timerId] = timer;
    return timerId;
};

global.clearTimeout = function (timerId) {
    timers[timerId]?.stop();
    delete timers[timerId];
};

global.setInterval = function (cb, ms, ...args) {
    let timer = new Timer();
    timer.interval = ms / 1000;
    timer.periodic = true;
    timer.onTimeout = function () {
        cb(...args);
    };
    timer.start();

    let timerId = getNextTimerId();
    timers[timerId] = timer;
    return timerId;
}

global.clearInterval = clearTimeout;