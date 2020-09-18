/**
 * https://leetcode-cn.com/problems/maximum-subarray/
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  /**
   * 1. 定义f(i) 坐标从0到i点的连续子数组最大和,结尾必须是i
   * 2. 找关系： f(i) = Math.max(f(i-1)+nums[i],nums[i])
   * 3. 初始值： f(0) = nums[0]
   */
  let temp = 0
  let max = -Infinity
  for (let i = 0; i < nums.length; i++) {
    temp = Math.max(temp + nums[i], nums[i])
    max = Math.max(temp, max)
  }
  return max
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
