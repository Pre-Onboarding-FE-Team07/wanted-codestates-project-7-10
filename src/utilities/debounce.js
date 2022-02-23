export default function debounce(callback, delay) {
    let timer;
    return function () {
        clearTimeout(timer);
        timer = setTimeout(() => {
            callback.apply(this, arguments)
        }, delay)
    }
}