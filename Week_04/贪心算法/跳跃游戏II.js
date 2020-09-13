/**
 * https://leetcode-cn.com/problems/jump-game-ii/
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  /**
   * 和跳跃游戏一样，一样的解法只不过返回值不同
   */
  let count = 0
  findMin(nums, nums.length - 1)
  return count
  function findMin(nums, n) {
    for (let i = 0; i < n; i++) {
      if (n - i <= nums[i]) {
        count++
        return findMin(nums, i)
      }
    }
    return n
  }
}

console.log(jump([2, 3, 1, 1, 4]))
