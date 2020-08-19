/**
 * https://leetcode-cn.com/problems/binary-tree-inorder-traversal/
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
var inorderTraversal = function (root) {
  const result = []
  inOrderTraversalNode(root)
  return result
  function inOrderTraversalNode(node) {
    if (node == null) return
    inOrderTraversalNode(node.left)
    result.push(node.val)
    inOrderTraversalNode(node.right)
  }
}
