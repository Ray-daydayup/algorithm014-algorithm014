/**
 * https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-tree/
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  // 后序遍历,节点如果满足条件的祖先节点的话，那么他的子树一定是包含对应的结点的，设置标志位pFlag,qFlag包含对应的值就会置为true
  let target = null
  lastOrder(root)
  return target

  function lastOrder(node) {
    if (node == null) {
      return {
        p: false,
        q: false
      }
    }
    if (target) {
      return {
        p: false,
        q: false
      }
    }
    const leftFlag = lastOrder(node.left)
    const rightFlag = lastOrder(node.right)
    const flag = {
      p: false,
      q: false
    }

    if (node === p || leftFlag.p || rightFlag.p) {
      flag.p = true
    }
    if (node === q || leftFlag.q || rightFlag.q) {
      flag.q = true
    }
    if (flag.p && flag.q && !target) target = node // 防止回溯时回到最后一位
    return flag
  }
}
