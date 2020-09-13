/**
 * https://leetcode-cn.com/problems/find-minimum-in-rotated-sorted-array/
 * @param {number[]} nums
 * @return {number}
 */
// 暴力
var findMin = function (nums) {
  // 判断是否存在旋转
  if (nums[0] <= nums[nums.length - 1]) return nums[0]
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < nums[i - 1]) {
      return nums[i]
    }
  }
}

// 二分
var findMin = function (nums) {
  // 判断是否存在旋转
  if (nums[0] <= nums[nums.length - 1]) return nums[0]
  let left = 0
  let right = nums.length - 1

  while (left <= right) {
    mid = Math.floor(left + (right - left) / 2)
    console.log(left, mid, right)
    if (mid + 1 < nums.length && nums[mid] > nums[mid + 1]) return nums[mid + 1]
    if (mid - 1 >= 0 && nums[mid - 1] > nums[mid]) return nums[mid]
    if (nums[mid] < nums[0]) {
      right = mid - 1
      continue
    }
    left = mid + 1
  }
}
console.log(findMin([3, 4, 5, 1, 2]))
