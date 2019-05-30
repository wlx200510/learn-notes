/**
 * 实现一个局部洗牌算法，保证不会针对相同的牌处理两次
 */

const pokeCards = []
for (let i = 0; i < 54; i++) {
    pokeCards.push(i + 1)
}

function shuffle(arr) {
    for (let j = 0; j < arr.length - 1; j++) {
        let randBase = 53 - j
        let randIndex = Math.floor(Math.random() * randBase) + j + 1 // 这个是核心
        let temp = arr[j]
        arr[j] = arr[randIndex]
        arr[randIndex] = temp
    }
    return arr
}

console.log(shuffle(pokeCards)[53])