/**
 * https://leetcode-cn.com/problems/n-ary-tree-preorder-traversal/description/
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function (root) {
  const result = []
  preOrderNode(root)
  return result

  function preOrderNode(node) {
    if (node == null) return
    result.push(node.val)
    if (node.children) {
      node.children.forEach((element) => {
        preOrderNode(element)
      })
    }
  }
}
