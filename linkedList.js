/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

 function reverseList(head) {
    let prev = null, cur = head
    while(cur != null) {
        let tempNode = cur.next
        cur.next = prev
        prev = cur
        cur = tempNode
    }
 }