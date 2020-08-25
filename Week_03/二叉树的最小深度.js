/**
 * https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
  /**
   * 递归遍历，遍历节点的深度，
   * 子叶节点遍历完成后，对最小深度赋值，
   * 遍历节点时，
   * 如果当前节点深度大于已经存在的最小深度，则不继续编历
   * 当前节点的深度=子节点深度 - 1
   * 遍历n次，最差时间复杂度O(n)
   */
  if (root == null) return 0 // 没加哨兵
  let min = Infinity
  preOrder(root, 1)
  return min
  function preOrder(node, depth) {
    // 截止条件
    if (node.left === null && node.right === null) {
      min = depth
      return
    }
    // 处理
    if (depth >= min) {
      return
    }
    if (node.left !== null) preOrder(node.left, depth + 1)
    if (node.right !== null) preOrder(node.right, depth + 1)
  }
}
