/**
 * 什么是防抖和节流函数，有哪些应用场景？(debounce throttle)
 * 如何使用setTimeout实现简单的防抖和节流功能
 * 尝试利用闭包实现一个可以立即执行的debounce函数
 */

function debounce (func, wait = 50, immediate = true) {
    let timer = null, context, args
    // 如果是没有immediate的情况
    const later = () => setTimeout(() => {
        timer = null
        if (!immediate) {
            func.apply(context, args)
            context = args = null
        }
    }, wait)
    return function(...params) {
        if (!timer) {
            timer = later()
            if (immediate) {
                func.apply(this, params)
            } else {
                context = this
                args = params
            }
        } else {
            clearTimeout(timer)
            timer = later()
        }
    }
    // function withImdiate(...params) {
    //     if (!timer) {
    //         timer = setTimeout(() => {
    //             timer = null
    //         }, wait)
    //         func.apply(this, params)
    //     } else {
    //         clearTimeout(timer)
    //         timer = setTimeout(() => {
    //             timer = null
    //         }, wait)
    //     }
    // }
    // function noImediate(...params) {
    //     if (!timer) {
    //         timer = setTimeout(() => {
    //             timer = null
    //             func.apply(this, params)
    //         }, wait)
    //     } else {
    //         clearTimeout(timer)
    //         timer = setTimeout(() => {
    //             timer = null
    //             func.apply(this, params)
    //         }, wait)
    //     }
    // }
}