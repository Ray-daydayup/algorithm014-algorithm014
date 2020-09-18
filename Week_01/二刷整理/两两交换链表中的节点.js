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
  // 递归交换节点，返回转换后的头节点
  const res = reverse(head, head.next)
  return res

  function reverse(first, second) {
    // end
    if (first == null || second == null) {
      return first
    }
    // exchange
    const temp = second.next
    second.next = first
    // 向下 回溯的时候更改第二个结点指向,一定要判断null 即使null也要玩下去，否则有环
    first.next = reverse(temp, temp ? temp.next : null)
    return second
  }
}
