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
// 哈希表，如果存在环那么会回头访问已经访问过的点 时间空间都O(n)
var detectCycle = function (head) {
  if (head == null || head.next == null) return null
  const set = new Set()
  let p = head
  while (p !== null) {
    // 如果已经访问了那就是相遇点
    if (set.has(p)) {
      return p
    }
    set.add(p)
    p = p.next
  }
  return null
}
