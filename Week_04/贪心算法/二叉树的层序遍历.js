/**
 * https://leetcode-cn.com/problems/binary-tree-level-order-traversal/#/description
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  /**
   * 广度优先搜索
   */
  if (root === null) return []
  const result = []
  const queue = [{ node: root, level: 0 }]
  while (queue.length > 0) {
    const { node, level } = queue.shift()
    if (!result[level]) {
      result[level] = []
    }
    result[level].push(node.val)

    if (node.left) queue.push({ node: node.left, level: level + 1 })
    if (node.right) queue.push({ node: node.right, level: level + 1 })
  }
  return result
}
