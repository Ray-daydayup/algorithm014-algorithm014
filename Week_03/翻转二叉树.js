/**
 * https://leetcode-cn.com/problems/invert-binary-tree/description/
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
  // 递归,重复子问题为调换左右子节点
  reverse(root)
  return root
  function reverse(root) {
    // 1.结束条件
    if (root == null) return
    // 2.当前层处理
    let temp = root.left
    root.left = root.right
    root.right = temp
    // 3.下一层
    invertTree(root.left)
    invertTree(root.right)
  }
}
