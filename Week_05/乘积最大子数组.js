/**
 * https://leetcode-cn.com/problems/maximum-product-subarray/description/
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  /**
   * 1.定义状态:f(i)为以下表为i的结尾的最大连续子数组乘积
   * 2.关系:存在两种情况
   *    如果当前为正数那么f(i) = max(f(i-1)*nums[i],nums[i])
   *    如果当前为负数那么f(i) = max(f(i-1)*nums[i],nums[i]*g(i-1))
   *    这里g(i-1)表示以i-1结尾的小于零且最小的连续子数组乘积
   * 3.合并:f(i) = max(f(i-1)*nums[i],nums[i]*g(i-1),nums[i])
   * 4.g(i)的小于零可以去掉了，只要保证是其乘积最小的即可
   * 因为 g(i) > 0时， f(i)>=g(i),都可以保证状态f是最大乘积
   * 5.初始状态：f(0) = nums[0] = g(0)
   * 6.只需要维护前一个状态的f和g，那么O(1)空间即可
   */
  let f = nums[0]
  let g = nums[0]
  let max = nums[0]
  for (let i = 1; i < nums.length; i++) {
    let temp = f
    f = Math.max(f * nums[i], nums[i], g * nums[i])
    g = Math.min(temp * nums[i], nums[i], g * nums[i])
    if (f > max) max = f
  }
  return max
}

console.log(maxProduct([-2, 0, -1]))
