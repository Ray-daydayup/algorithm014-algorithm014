/**
 * https://leetcode-cn.com/problems/reverse-nodes-in-k-group/
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  if (head === null || head.next === null || k < 2) return head
  // 1.选取片段保存前后 2. 反转片链表片段 3. 拼接上去
  let res = null
  let start = head
  let end = getKNode(head, k)
  if (!end) {
    return head
  }
  let prevNode = null
  let nextNode = end.next
  end.next = null
  while (end !== null) {
    // 正好分完也要反转
    const [reverseStart, reverseEnd] = reverseList(start)
    if (prevNode) {
      prevNode.next = reverseStart
    } else {
      res = reverseStart // 第一次反转的是头
    }
    prevNode = reverseEnd
    start = nextNode
    end = getKNode(start, k)
    if (!end) {
      prevNode.next = start
      break
    }
    nextNode = end.next
    end.next = null
  }
  return res
}

function getKNode(head, k) {
  let result = head
  for (let i = 0; i < k - 1; i++) {
    if (result === null) {
      return null
    }
    result = result.next
  }
  return result
}
function reverseList(head) {
  // 思路：单链表能找到下一个节点，所以在让下一个节点指向自己之前需要保存下下个节点
  let currentNode = head
  let nextNode = head.next
  const endNode = head
  // 截止条件是遍历到最后一个节点
  while (nextNode !== null) {
    let temp = nextNode.next
    nextNode.next = currentNode
    currentNode = nextNode
    nextNode = temp
  }
  return [currentNode, endNode]
}
