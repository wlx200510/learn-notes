/**
 * 先实现一个单链表结构
 * 使用hash来实现O(1)的访问速度
 * 实现LRU的具体算法
 */

class Node {
    constructor(key, value, next = null) {
      this.key = key // 链表中节点的值
      this.value = value
      this.next = next // 指向列表中下一个节点项的指针
    }
}

class Queue {
    constructor() {
        this.length = 0
        this.head = null
        this.last = null
    }

    search(key) {
        var tempNode = this.head
        if (!this.head) { return null }
        while(tempNode.key !== key) {
            if (!tempNode.next) {
                return null
            }
            tempNode = tempNode.next
        }
        return tempNode.value
    }

    remove(key) {
        var preNode = null
        preNode = this.head
        while(preNode && preNode.next.key !== key) {
            preNode = preNode.next
        }
        if (!preNode) {
            return
        }
        var nextNode = preNode.next.next
        preNode.next = nextNode
        this.length--
    }

    removeLast() {
        // 如何删除对应的hash表中的项
        var tempNode = this.head
        var preNode = null
        while (tempNode.next !== null) {
            preNode = tempNode
            tempNode = tempNode.next
        }
        if (preNode) {
            preNode.next = null
            this.length--
        }
        return tempNode.key
    }

    addFirst(node) {
        var temp = this.head
        node.next = temp
        this.head = node
        this.length++
    }
}

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.maxLength = capacity
    this.hasMap = {}
    this.linkedList = new Queue()
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (this.hasMap[key]) {
        this.linkedList.remove(key)
        this.linkedList.addFirst({
            key: key,
            value: this.hasMap[key],
            next: null
        })
        return this.hasMap[key]
    } else {
        return null
    }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if (this.linkedList.length < this.maxLength) {
        this.linkedList.addFirst({
            key: key,
            value: value,
            next: null
        })
        this.hasMap[key] = value
    } else {
        var removedKey = this.linkedList.removeLast()
        this.linkedList.addFirst({
            key: key,
            value: value,
            next: null
        })
        delete this.hasMap[removedKey]
        this.hasMap[key] = value
    }
};