/**
 * 二叉树的遍历
 * 前序遍历
 * 中序遍历
 * 深度优先遍历
 * 广度优先遍历
 */

function TreeNode(val) {
    this.val = val
    this.left = this.right = null
}

function preorderTraversal(root) {
    var stack = [], result = [], p = root
    while(p !== null) {
        result.push(p.val)
        if (p.right) {stack.push(p.right)}
        p = p.left
        if (p == null && stack.length > 0) {
            p = stack.pop()
        }
    }
    return result
}

function inorderTraversal(root) {
    var stack = [], result = [], p = root
    while(p !== null) {
        stack.push(p)
        p = p.left
        while(p == null && stack.length > 0) {
            p = stack.pop()
            result.push(p.val)
            p = p.right
        }
    }
}

function backorderTraversal(root) {
    var stack = [], result = [], p = root, pre = root
    stack.push(root)
    while(stack.length) {
        p = stack[stack.length - 1]
        if (p.left && pre !== p.left && pre !== p.right) {
            stack.push(p.left)
        } else if (p.right && pre !== p.right) {
            stack.push(p.right)
        } else {
            result.push(p.val)
            pre = p
            stack.pop()
        }
    }
    return result
}