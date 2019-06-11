/**
 * 非递归的前中后序遍历，通常用栈来实现
 * 先用js模拟个栈这种数据结构
 */
const testTree = {
  value: 1,
  lNode: {
    value: 2,
    lNode: null,
    rNode: {
      value: 3,
      lNode: null,
      rNode: null
    }
  },
  rNode: {
    value: 5,
    lNode: {
      value: 7,
      rNode: {
        value: 9,
        rNode: null,
        lNode: null
      },
      lNode: null
    },
    rNode: null
  }
}

function Stack() {
  let content = []

  this.peek = function () {
    if (content.length === 0) {
      return null
    }
    return content[content.length - 1]
  }

  this.push = function (item) {
    return content.push(item)
  }

  this.pop = function () {
    if (content.length === 0) {
      return null
    } else {
      return content.pop()
    }
  }

  this.isEmpty = function () {
    return content.length === 0
  }
}

// 前序遍历，先根 后左 再右

function preOrder(root) {
  if (!root) {
    return
  }
  let stack = new Stack()
  stack.push(root)
  while (!stack.isEmpty()) {
    let temp = stack.pop()
    console.log(temp.value + ' ')
    if (temp.rNode) {
      stack.push(temp.rNode)
    }
    if (temp.lNode) {
      stack.push(temp.lNode)
    }
  }
}

// 中序遍历 先左 再中 后右
// 难度在于在循环中先把一个节点的左子树遍历到头
// 然后层层出栈，如果某个节点有右子树，则入栈并再次循环

function inOrder(root) {
  if (!root) {
    return
  }
  let stack = new Stack()
  let temp = root
  while (!stack.isEmpty() || temp !== null) {
    while (temp !== null) {
      stack.push(temp)
      temp = temp.lNode
    }
    temp = stack.pop()
    console.log(temp.value + '*')
    temp = temp.rNode || null
  }
}

// 后序遍历 先左，再右，后中
function postOrder(root) {
  if (!root) { return }
  let stack = new Stack()
  stack.push(root)

  let pre = null, ptr = null
  while (!stack.isEmpty()) {
    ptr = stack.peek() // 获取栈顶元素但不出栈
    if (pre !== ptr.lNode && pre !== ptr.rNode) {
      if (ptr.rNode !== null) {
        stack.push(ptr.rNode)
      }
      if (ptr.lNode !== null) {
        stack.push(ptr.lNode)
      }
    }

    if ((ptr.lNode === null && ptr.rNode === null) || pre === ptr.lNode || pre === ptr.rNode) {
      console.log(ptr.value + '**')
      stack.pop()
    }
    pre = ptr
  }
}

// preOrder(testTree)
// inOrder(testTree)
// postOrder(testTree)