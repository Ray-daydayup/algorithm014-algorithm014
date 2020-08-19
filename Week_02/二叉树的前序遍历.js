/**
 * https://leetcode-cn.com/problems/binary-tree-preorder-traversal/
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  const result = []
  preOrderTraversalNode(root)
  return result
  function preOrderTraversalNode(node) {
    if (node == null) return
    result.push(node.val)
    preOrderTraversalNode(node.left)
    preOrderTraversalNode(node.right)
  }
}
