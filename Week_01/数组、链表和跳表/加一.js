/**
 * https://leetcode-cn.com/problems/plus-one/
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  // 从后面开始指针，加一，大于九进位，没有进位则停止迭代
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] + 1 > 9) {
      digits[i] = 0
      if (i === 0) {
        digits.unshift(1)
      }
    } else {
      digits[i] = digits[i] + 1
      break
    }
  }
  return digits
}
console.log(plusOne([1, 2, 3]))
