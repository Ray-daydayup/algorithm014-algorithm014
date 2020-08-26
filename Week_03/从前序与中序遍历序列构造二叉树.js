/**
 * https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  /**
   * 前序：[根节点,[左子树的前序遍历结果],[右子树的前序遍历结果]]
   * 中序：[[左子树的前序遍历结果],根节点,[右子树的前序遍历结果]]
   * 重复部分：获得根节点的左子树和右子树
   * 从前序遍历里的第一个找到根节点
   * 对应到中序的根节点，抽取左右子树的长度，然后从前序构造树
   * 为了查找中序根节点，构造哈希表，除了开始的构造O(n)，后面O(1)查找
   *
   */
  // 1. 构造哈希表
  const map = new Map()
  for (let i = 0; i < inorder.length; i++) {
    map.set(inorder[i], i)
  }
  return getTree(preOrderStart, inOrderStart, length)
  // []
  function getTree(preOrderStart, inOrderStart, length) {
    // 结束条件
    if (length <= 0) return null
    // 当前处理
    const root = new TreeNode(preorder[preOrderStart])
    const inRootIndex = map.get(preorder[preOrderStart])
    const leftTreeLength = inRootIndex - inOrderStart
    const rightTreeLength = length - leftTreeLength - 1

    const leftTree = getTree(preOrderStart + 1, inOrderStart, leftTreeLength)
    const rightTree = getTree(
      preOrderStart + leftTreeLength + 1,
      inRootIndex + 1,
      rightTreeLength
    )
    root.left = leftTree
    root.right = rightTree
    return root
  }
}
