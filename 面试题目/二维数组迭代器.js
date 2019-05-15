/**
 * 尝试实现一个二维数组的迭代器，即有一个next方法和hasNext方法
 * next方法用于输出下一个元素，按照二维数组的顺序迭代
 * hasNext方法用于判断是否存在下一个可供输出的元素
 * 注意处理空数组和元素为null或者undefined的情况
 */





// answer
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
while(a.hasNext()) {
    console.log(a.next())
}