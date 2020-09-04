/**
 * https://leetcode-cn.com/problems/find-largest-value-in-each-tree-row/#/description
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function (root) {
  // 广度优先
  if (root === null) return []
  const result = []
  const queue = [[root, 1]]
  let currentLevel = 1
  let max = -Infinity
  while (queue.length > 0) {
    const [node, level] = queue.shift()
    if (level > currentLevel) {
      result.push(max)
      max = node.val
      currentLevel = level
    }
    if (node.val > max) max = node.val

    // 子节点入队
    if (node.left) queue.push([node.left, level + 1])
    if (node.right) queue.push([node.right, level + 1])
  }
  // 最后一行结果
  result.push(max)
  return result
}
