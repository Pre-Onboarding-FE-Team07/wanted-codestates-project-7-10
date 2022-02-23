export default function debounce(callback, delay) {
    let timer;
    return function () {
        let self = this;
        let args = arguments;
        clearTimeout(timer);
        timer = setTimeout(() => {
            callback.apply(self, args)
        }, delay)
    }
}