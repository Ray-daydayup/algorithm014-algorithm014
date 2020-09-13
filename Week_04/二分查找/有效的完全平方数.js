/**
 * https://leetcode-cn.com/problems/valid-perfect-square/
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  let left = 0
  let right = num
  let mid = 0
  while (left <= right) {
    mid = Math.floor((left + right) / 2)
    if (mid * mid === num) {
      return true
    } else if (mid * mid < num) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
  return false
}
console.log(isPerfectSquare(14))
