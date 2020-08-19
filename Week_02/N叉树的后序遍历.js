/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var postorder = function (root) {
  const result = []
  postOrderNode(root)
  return result
  function postOrderNode(node) {
    if (node === null) return
    if (node.children) {
      node.children.forEach((element) => {
        postOrderNode(element)
      })
    }
    result.push(node.val)
  }
}
