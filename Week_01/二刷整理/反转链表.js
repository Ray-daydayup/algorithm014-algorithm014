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
  // 思路：单链表能找到下一个节点，所以在让下一个节点指向自己之前需要保存下下个节点, 双指针
  // 时间 O(n) 空间O(1)
  if (head === null || head.next === null) return head
  let prev = null
  let curr = head
  while (curr !== null) {
    // 保存节点
    const temp = curr.next
    // 改变方向
    curr.next = prev
    // 向下走
    prev = curr
    curr = temp
  }
  // 返回结果
  return prev
}
