class Observable {
    constructor(observe) {
        observe(this.emit)
    }
    emit = (data) => {
        this.listeners.forEach(listener => {
            listener(data);
        });
    }
    listeners = [];
    subscribe = (listener) => {
        this.listeners.push(listeners);
        return () => {
            const index = this.listeners.indexOf(listener);
            if (index === -1) {
                return false
            }

            this.listeners.splice(index, 1);
            return true;
        }
    }
}