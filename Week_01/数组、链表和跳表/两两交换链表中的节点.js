/**
 * https://leetcode-cn.com/problems/swap-nodes-in-pairs/
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
var swapPairs = function (head) {
  if (head === null || head.next === null) return head
  // 三指针，跳着走
  let prevNode = null
  let currentNode = head
  let nextNode = head.next
  const res = head.next
  while (currentNode !== null && currentNode.next !== null) {
    // 奇数个
    // 交换
    let temp = nextNode.next
    nextNode.next = currentNode
    currentNode.next = temp
    // 继承一下前面的指向
    if (prevNode) {
      prevNode.next = nextNode
    }
    prevNode = currentNode
    // 跳到下一个
    currentNode = temp
    nextNode = currentNode && currentNode.next
  }
  return res
}
