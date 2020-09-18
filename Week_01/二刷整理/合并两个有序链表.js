/**
 * https://leetcode-cn.com/problems/merge-two-sorted-lists/
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 两个指针分别指向两个链表
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  if (l1 === null || l2 === null) {
    return l1 || l2
  }
  let head = null
  if (l1.val <= l2.val) {
    head = l1
    l1 = l1.next
  } else {
    head = l2
    l2 = l2.next
  }
  let pointer = head
  while (l1 !== null && l2 !== null) {
    if (l2.val <= l1.val) {
      pointer.next = l2
      l2 = l2.next
    } else {
      pointer.next = l1
      l1 = l1.next
    }
    pointer = pointer.next
  }
  if (l1 === null) {
    pointer.next = l2
  } else {
    pointer.next = l1
  }
  return head
}
