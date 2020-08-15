/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * https://leetcode-cn.com/problems/linked-list-cycle
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  // 快慢指针，一个走两步一个走一步，如果是环肯定会相遇
  if (head === null) {
    return false
  }
  let slow = head
  let fast = head.next
  do {
    if (fast === null || fast.next === null) return false
    slow = slow.next
    fast = fast.next.next
  } while (slow !== fast)
  return true
}
