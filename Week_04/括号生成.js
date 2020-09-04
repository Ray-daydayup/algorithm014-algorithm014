/**
 * https://leetcode-cn.com/problems/generate-parentheses/
 * @param {number} n
 * @return {string[]}
 */

var generateParenthesis = function (n) {
  /**
   * 将这个抽像成n层二叉树。'('为左子树，')'为右子树
   * 然后用深度优先遍历实现
   * （前序遍历+回溯，因为先访问当前层,到达最底层为一个解）
   * 但是有些情况时无法继续向下深入的，提前return
   * 左子树'('：已经放的'('的数目 < n
   * 右子树')': 已经放的')'的数目 < 已经放的'('的数目
   */
  const result = []
  dfs('(', 1, 0)
  return result
  function dfs(str, left, right) {
    if (left === n && right === n) {
      return result.push(str)
    }
    if (left < n) {
      dfs(str + '(', left + 1, right)
    }
    if (right < left) {
      dfs(str + ')', left, right + 1)
    }
  }
}

console.log(generateParenthesis(3))
