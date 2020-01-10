/**
 * throttle limits the frequency of function calls. 
 * @param func the underlying applied function. It is recommended to use arrow function to avoid 'this' problem.
 * @param interval the minimum time gap between two function calls in milliseconds
 */
export function throttle(func: (...args: any[]) => void, interval: number): (...args: any[]) => void {
    let lastTime = new Date()
    let timeoutHandler: number

    return (...args) => {
        let now = new Date()
        window.clearTimeout(timeoutHandler)
        if (now.getTime() - lastTime.getTime() >= interval) {
            func(args)
            lastTime = now
        } else {
            timeoutHandler = window.setTimeout(func, interval);
        }
    }
}