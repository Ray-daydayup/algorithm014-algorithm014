/**
 * https://leetcode-cn.com/problems/house-robber-ii/description/
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  /**
   * 和打劫第一版很像，可以拆分成两个第一版的打劫
   * 第一个不偷，求1:n
   * 第二个不偷，求0:n-1
   * 然后比较两者的最大
   */
  if (nums.length === 0) return 0
  if (nums.length === 1) return nums[0]
  if (nums.length === 2) return Math.max(nums[0], nums[1])
  return Math.max(solve(nums.slice(1)), solve(nums.slice(0, nums.length - 1)))
  function solve(nums) {
    if (nums.length === 0) return 0
    if (nums.length === 1) return nums[0]
    if (nums.length === 2) return Math.max(nums[0], nums[1])
    let dp1 = nums[0]
    let dp2 = Math.max(nums[0], nums[1])
    for (let i = 2; i < nums.length; i++) {
      const temp = dp2
      dp2 = Math.max(dp2, dp1 + nums[i])
      dp1 = temp
    }
    return dp2
  }
}
console.log(rob([2, 7, 9, 3, 1]))
