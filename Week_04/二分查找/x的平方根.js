/**
 * https://leetcode-cn.com/problems/sqrtx/
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  // 自带操作符了解一下
  return parseInt(x ** 0.5)
}
// 二分法 找最大的满足k*k<=x
var mySqrt = function (x) {
  if (x === 1) return 1
  let left = 0
  let right = x
  let mid
  let res = -1
  while (left <= right) {
    mid = Math.floor((left + right) / 2)
    if (mid * mid <= x) {
      res = mid
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
  return res
}
console.log(mySqrt(5))
