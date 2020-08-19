/**
 * https://leetcode-cn.com/problems/n-ary-tree-level-order-traversal/
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  const result = []
  levelOrderNode(0, root)
  return result
  // 每层都是一个数组
  function levelOrderNode(level, node) {
    if (node == null) return
    if (!result[level]) result[level] = []
    result[level].push(node.val)
    if (node.children) {
      const nextLevel = level + 1
      node.children.forEach((element) => {
        levelOrderNode(nextLevel, element)
      })
    }
  }
}
