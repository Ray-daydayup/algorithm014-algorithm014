/**
 * https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  // 排序数组
  // 两个指针即可，第一个指针指向第一个数第二个指针找到相同的最后一个数，(删除这些元素-自带的方法)，直接将下一个数放到后面
  if (nums.length == 0) return 0
  let start = 0
  for (let second = 1; second < nums.length; second++) {
    if (nums[start] !== nums[second]) {
      start++
      nums[start] = nums[second]
    }
  }
  return start + 1
}
