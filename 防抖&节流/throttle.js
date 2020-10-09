//防抖
function throttle(fn, time) {
    let canRun = true;
    return function () {
        if (!canRun) {
            return;
        }
        canRun = false;
        setTimeout(() => {
            fn.call(this, arguments);
            canRun = true;
        }, time);
    }
}