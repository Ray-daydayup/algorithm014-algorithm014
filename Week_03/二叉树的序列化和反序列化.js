/**
 * https://leetcode-cn.com/problems/serialize-and-deserialize-binary-tree/
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  // 前序遍历，遇到null，插入 #
  let str = ''
  preOrder(root, str)
  return str
  function preOrder(root) {
    if (root == null) {
      str += '#' + ','
      return
    }
    str += String(root.val) + ','
    preOrder(root.left)
    preOrder(root.right)
  }
}

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  // 按照前序遍历解开,由于#填空，相当于完全二叉树
  const arr = data.split(',')
  let i = 0
  return preOrder(0)
  function preOrder() {
    if (arr[i] == '#') {
      i++
      return null
    }
    const node = new TreeNode(arr[i])
    i++
    // console.log(node)
    if (i < arr.length - 1) node.left = preOrder()
    if (i < arr.length - 1) node.right = preOrder()
    return node
  }
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

deserialize('1,2,#,#,3,4,#,#,5,#,#,')
