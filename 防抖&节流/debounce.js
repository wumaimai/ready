//防抖
function debounce(fn, time, immediate) {
    let timer = null;
    return function () {
        if (timer) clearTimeout(timer);

        if (!!immediate) {
            !timer && fn.apply(this, arguments);
            timer = window.setTimeout(() => {
                timer = null
            }, time);

        } else {
            timer = window.setTimeout(() => {
                fn.apply(this, arguments);
            }, time);
        }

    }
}

