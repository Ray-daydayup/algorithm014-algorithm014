/**
 * https://leetcode-cn.com/problems/validate-binary-search-tree/
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
  // 递归验证，每个子树都验证他的左子树和右子树，有一个子树不对就错了
  return helper(root, Infinity, -Infinity)
  function helper(root, lower, higher) {
    // 终止条件
    if (root === null) return true
    // 当前层处理
    let leftRes = true
    let rightRes = true
    if (root.val >= lower || root.val <= higher) return false
    // 向下处理
    leftRes = helper(root.left, root.val, higher)
    if (!leftRes) return false // 提前return
    rightRes = helper(root.right, lower, root.val)
    if (!rightRes) return false // 提前return
    return true
  }
}
