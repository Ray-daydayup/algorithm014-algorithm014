/**
 * https://leetcode-cn.com/problems/valid-parentheses/
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length === 0) return true
  if (s.length === 1) return false

  // 遇到左边入栈，遇到右边出栈
  const map = {
    ')': '(',
    '}': '{',
    ']': '['
  }
  const stack = []
  for (const c of s) {
    if (!map[c]) {
      stack.push(c)
    } else if (stack[stack.length - 1] === map[c]) {
      stack.pop()
    } else {
      return false
    }
  }
  return stack.length === 0
}

console.log(isValid('(('))
