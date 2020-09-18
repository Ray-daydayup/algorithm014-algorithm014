/**
 * https://leetcode-cn.com/problems/house-robber/
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  /**
   * 1.重复性：前i个房屋的最大金额可以拆分求前i-1个和前i-2房屋的最大金额
   * 2.定义状态：f(i)表示前i个房屋的最大金额
   * 3.分析：存在两种情况
   *    i被偷 f(i) = f(i-2) + nums[i]
   *    i不偷 f(i) = f(i-1)
   * 4.DP方程：f(i) = max(f(i-2) + nums[i],f(i-1))
   * 5.初始状态：f(0) = nums[0],f(1) = max(nums[0],nums[1])
   * 6.一点疑惑的解答：我们在找上一个状态的时候不知道上一个状态是否当前位置
   */
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

console.log(rob([1, 2, 3, 1]))
