/**
 * https://leetcode-cn.com/problems/reverse-linked-list/
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
var reverseList = function (head) {
  // 思路：单链表能找到下一个节点，所以在让下一个节点指向自己之前需要保存下下个节点
  if (head === null || head.next === null) return head
  let currentNode = head
  let nextNode = head.next
  currentNode.next = null // 头变尾
  // 截止条件是遍历到最后一个节点
  while (nextNode !== null) {
    let temp = nextNode.next
    nextNode.next = currentNode
    currentNode = nextNode
    nextNode = temp
  }
  return currentNode
}
