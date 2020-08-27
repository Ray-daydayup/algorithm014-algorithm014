/**
 * https://leetcode-cn.com/problems/majority-element/description/
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  /**
   * 从两端进行指针遍历，遍历到了数就停止(两端分布多的快) O(n)
   */
  let start = 0
  let end = nums.length - 1
  const count = {}
  while (start <= end) {
    addCount(count, nums[start])
    if (count[nums[start]] > nums.length / 2) return nums[start]
    addCount(count, nums[end])
    if (count[nums[end]] > nums.length / 2) return nums[end]
    start++
    end--
  }
  function addCount(count, num) {
    if (count[num]) {
      count[num]++
      return
    }
    count[num] = 1
  }
}
