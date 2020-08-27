/**
 * https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  // 数字的个数就是字母的个数，那么就是组合问题，回溯
  const map = ['abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
  const res = []
  getLetterCombinations(digits, 0, [])
  return res
  function getLetterCombinations(digits, location, arr) {
    if (arr.length === digits.length) return res.push(arr.join(''))
    for (let i = 0; i < map[digits[location] - 2].length; i++) {
      arr.push(map[digits[location] - 2][i])
      getLetterCombinations(digits, location + 1, arr)
      arr.pop()
    }
  }
}
console.log(letterCombinations('23'))
