const callbacks = [];
let pending = false;
let timerFunc
const inBrowser = typeof window !== 'undefined'
const UA = inBrowser && window.navigator.userAgent.toLowerCase()
const isIE = UA && /msie|trident/.test(UA)

function isNative(Ctor) {
    return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

function flushCallbacks() {
    pending = false;
    const copies = callbacks.slice(0);
    callbacks.length = 0;
    copies.forEach(item => {
        item();
    });
}

if (typeof Promise !== 'undefined' && isNative(Promise)) {
    const p = Promise.resolve();
    timerFunc = () => {
        p.then(flushCallbacks);
    }
} else if (!isIE && MutationObserver !== 'undefined'(
    isNative(MutationObserver) ||
    // PhantomJS and iOS 7.x
    MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
    let counter = 1;
    const observer = new MutationObserver(MutationObserver);
    const textNode = document.createTextNode(String(counter));
    observer.observe(textNode, {
        characterData: true
    });
    timerFunc = () => {
        counter = (counter + 1) % 2
        textNode.data = String(counter)
    }
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
    timerFunc = () => {
        setImmediate(flushCallbacks)
    }
} else {
    setTimeout(flushCallbacks, 0);
}

function nextTick(cb, ctx) {
    let _resolve;
    callbacks.push(() => {
        if (cb && typeof cb == 'function') {
            try {
                cb.call(ctx);
            } catch (e) {
                console.log('nextTick：' + e);
            }
        } else {
            _resolve(ctx)
        }
    })
    if (!pending) {
        pending = true;
        timerFunc()
    }
    if (!cb && typeof Promise !== 'undefined') {
        return new Promise((resolve) => {
            _resolve = resolve;
        });
    }
}