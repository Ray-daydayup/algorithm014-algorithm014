/**
 * https://leetcode-cn.com/problems/move-zeroes/
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  // 整体思路快慢指针，慢指针指向零，且快指针指向非零时交换，然后快慢指针+1
  // 慢指针指向零但是未交换则慢指针不动，快指针+1
  // 截止条件快指针出界
  let fast = 1
  let low = 0
  while (fast < nums.length) {
    if (nums[low] === 0 && nums[fast] !== 0) {
      ;[nums[low], nums[fast]] = [nums[fast], nums[low]]
    }
    if (nums[low] !== 0) low++
    fast++
  }
}
