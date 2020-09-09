function debounce(fn, time) {
    let timer = null;
    return function () {
        if (timer) {
            clearTimeout(timer);
        }
        timer = window.setTimeout(() => {
            fn.apply(this, arguments);
        }, time);
    }
}

