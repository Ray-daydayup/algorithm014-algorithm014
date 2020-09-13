/**
 * https://leetcode-cn.com/problems/search-in-rotated-sorted-array/
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  /**
   * 依然可以二分法，但是需要根据target的位置来确定
   * 左右指针的移动
   */
  let l = 0
  let r = nums.length - 1
  let mid

  while (l <= r) {
    mid = Math.floor((l + r) / 2)
    if (nums[mid] === target) return mid

    if (nums[mid] < target) {
      // 如果目标和中间不在同侧，一定是目标在左边，mid在右边
      // nums[0]>nums[nums.length - 1] 存在逆转
      if (
        nums[0] > nums[nums.length - 1] &&
        target >= nums[0] &&
        nums[mid] <= nums[nums.length - 1]
      ) {
        r = mid - 1
        continue
      }
      // 如果目标和中间都同侧
      l = mid + 1
      continue
    }
    // 如果目标和中间不在同侧，一定是目标在右边，mid在左边
    if (
      nums[0] > nums[nums.length - 1] &&
      target <= nums[nums.length - 1] &&
      nums[mid] >= nums[0]
    ) {
      l = mid + 1
      continue
    }
    // 如果目标和中间都同侧
    r = mid - 1
  }
  return -1
}

console.log(search([1, 3], 3))
