/**
 * https://leetcode-cn.com/problems/linked-list-cycle-ii/
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
var detectCycle = function (head) {
  // 1. 获得相遇点 2. 双指针相遇的点为交点
  let meet = getMeetNode(head)
  if (!meet) {
    return null
  }
  let start = head
  while (start !== meet) {
    start = start.next
    meet = meet.next
  }
  return start
  function getMeetNode(head) {
    if (head === null) {
      return null
    }
    let slow = head
    let fast = head
    do {
      if (fast === null || fast.next === null) return null
      slow = slow.next
      fast = fast.next.next
    } while (slow !== fast)
    return slow
  }
}
