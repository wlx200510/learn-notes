/**
 * 冒泡排序 n2
 */
function bubbleSort(targetArr) {
    let l = targetArr.length, sortFlag
    if (l < 2) { return targetArr }
    for (let i = 0; i < l; i++) {
        sortFlag = false
        for (let j = 0; j < l - i - 1; j++) {
            if (targetArr[j] > targetArr[j+1]) {
                sortFlag = true
                // 接下来是交换代码
                let temp = targetArr[j]
                targetArr[j] = targetArr[j+1]
                targetArr[j+1] = temp
            }
        }
        if (!sortFlag) {
            break
        }
    }
    return targetArr
}

/**
 * 插入排序的核心是取未排序数组中的元素，在已排序数组中找到合适的位置插入，并保证已排序数组始终有序
 * 注意三个问题 n2 O1
 */

function insertSort(targetArr) {
    let l = targetArr.length // 如果是其他语言，可能要把这个长度作为第二个参数传入
    if (l < 2) { return targetArr }
    for (let i = 1; i < l; i++) {
        let value = targetArr[i] // 呼应腾出了位置 j+1
        let j = i - 1 // i前面的i-1个数是已经排好位置的
        for (; j >= 0; j--) { // j 代表已排序完成的数组的索引
            if (targetArr[j] > value) {
                targetArr[j+1] = targetArr[j] // 自动向后腾出一个位置
            } else {
                break // 找到了插入位置
            }
        }
        targetArr[j+1] = value
    }
    return targetArr
}

/**
 * 选择排序
 * 找到剩余元素中的最小元素，放到末尾 n2
 */
function choseSort(targetArr) {
    let l = targetArr.length
    if (l < 2) { return targetArr }
    for (let i = 0; i < l; i++) {
        let temp = targetArr[i]
        for (let j = i + 1; j < l; j++) {
            if (temp > targetArr[j]) {
                targetArr[i] = targetArr[j]
                targetArr[j] = temp
                temp = targetArr[i]
            }
        }
    }
    return targetArr
}

let testArr = [7,5,2,8,2,8,1]
let testArr2 = [7,5,2,8,2,8,1]
let testArr3 = [7,5,2,8,2,8,1]
console.log(bubbleSort(testArr))
console.log(insertSort(testArr2))
console.log(choseSort(testArr3))

/**
 * 归并排序
 */
function mergeSort(targetArr) {
    
}