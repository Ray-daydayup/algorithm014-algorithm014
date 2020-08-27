/**
 * https://leetcode-cn.com/problems/powx-n/
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  // return x**n // 自带幂运算，哈哈哈哈
  // 重复子问题: n为奇数 f(x,n)=f(x,n/2)*f(x,n/2)*x 否则 f(x,n)=f(x,n/2)*f(x,n/2)
  // f(x,n)= n%2===0 ? f(x,n/2)*f(x,n/2) : f(x,n/2)*f(x,n/2)*x
  if (n === 0) return 1
  if (n === 1) return x
  if (n === -1) return 1 / x
  let target = 0
  if (n % 2 === 0) {
    target = myPow(x, n / 2)
    return target * target
  }
  target = myPow(x, (n - 1) / 2)
  return target * target * x
}
