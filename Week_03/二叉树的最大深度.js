/**
 * https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/
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
var maxDepth = function (root) {
  /**
   * 递归,前序遍历，遍历出所有节点深度求最大值，
   * 当前节点的深度=子节点深度 - 1
   * 遍历n次，时间复杂度O(n)
   */
  if (root == null) return 0
  let max = 1
  preOrder(root, 1)
  return max
  function preOrder(node, depth) {
    // 截止条件
    if (node === null) return
    // 处理
    if (depth > max) {
      max = depth
    }
    preOrder(node.left, depth + 1)
    preOrder(node.right, depth + 1)
  }
}
