/**
 * https://leetcode-cn.com/problems/generate-parentheses/
 * @param {number} n
 * @return {string[]}
 */
// 1. 暴力法，遍历出所有可能的括号，然后验证
var generateParenthesis = function (n) {
  /**
   * 一个序列的数组，从第一位开始就有两种可能，'('或')'，
   * 那么f(3) = '(' + f(2) 或 f(3) = ')' + f(2)
   * 以此类推，f(n) = '(' + f(n-1)或 f(n) = ')' + f(n)
   * 时间复杂度：是生成序列执行了2^2n每次验证为n次 O(n*2^2n)
   * 空间复杂度，生成了一个两倍的数组O(2n)
   */
  const result = []
  const temp = ''
  const limit = 2 * n
  getAll(temp, limit, result, 0)
  return result
}

function getAll(temp, limit, result, i) {
  // 1.结束的边界
  if (i === limit) {
    // 结束前处理
    if (valid(temp)) result.push(temp)
    return
  }
  // 2. 当前层处理(左括号)
  let next0 = temp + '('
  // 3. 向下递归
  getAll(next0, limit, result, i + 1)
  // 2. 当前层处理(右括号)
  let next1 = temp + ')'
  // 3. 向下递归
  getAll(next1, limit, result, i + 1)
}

function valid(s) {
  if (s.length === 0) return true
  if (s.length === 1) return false

  // 遇到左边入栈，遇到右边出栈
  const stack = []
  for (const c of s) {
    if (c === '(') {
      stack.push(c)
    } else {
      if (stack.length === 0) return false
      stack.pop()
    }
  }
  return stack.length === 0
}

// 2. 优化，在选择当前括号前先验证是否能选择
var generateParenthesis = function (n) {
  /**
   * 一个左括号必定对应一个右括号，只要左括号在n之内就能放
   * 已放的右括号的数目只要小于已放的左括号就可以放右括号
   * 时间复杂度：是生成序列执行了2^2n每次验证为n次 O(n*2^2n)
   * 空间复杂度，生成了一个两倍的数组O(2n)
   */
  const result = []
  const temp = ''
  const limit = 2 * n
  getAll(temp, limit, result, 0, 0, 0)
  return result
}

function getAll(temp, limit, result, i, left, right) {
  // 1.结束的边界
  if (i === limit) {
    // 结束前处理
    result.push(temp)
    return
  }
  // 2. 当前层处理(左括号)
  if (left < limit / 2) {
    let next0 = temp + '('
    // 3. 向下递归
    getAll(next0, limit, result, i + 1, left + 1, right)
  }
  if (left > right) {
    // 2. 当前层处理(右括号)
    let next1 = temp + ')'
    // 3. 向下递归
    getAll(next1, limit, result, i + 1, left, right + 1)
  }
}
