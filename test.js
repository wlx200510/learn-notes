function createIterator(arr) {
    var i = 0, j = 0, state = true;
    if (!Array.isArray(arr)) {
        state = false
    }
    arr = arr.filter((item) => item.length > 0)
    if (arr.length === 0) {
        state = false
    }
    function getNextIndex() {
        if (j === arr[i].length - 1) {
            if (i === arr.length - 1) {
                state = false
            } else {
                j = 0
                i++
            }
        } else {
            j++
        }
    }
    return {
        hasNext: function() {
            return state
        },
        next: function() {
            var result = arr[i][j]
            getNextIndex()
            return result
        }
    }
}

var testArr = [[1,2,3],[null, 1],[undefined, 0],[]]
var a = createIterator(testArr)
// while(a.hasNext()) {
//     console.log(a.next())
// }

function debounce (func, wait = 50, immediate = true) {
    let context, args, timer
    // 把定时器函数给单独抽出来
    function later() {
        return setTimeout(() => {
            timer = null
            if (!immediate) {
                func.apply(context, args)
                context = args = null
            }
        }, wait)
    }

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
}

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