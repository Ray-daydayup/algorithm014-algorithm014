/**
 * https://leetcode-cn.com/problems/subsets/
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  // 计算子集，子元素的个数为 [0,nums.length]，遍历计算不同长度的子集
  // 子集从第一位开始选择，选择完成后选第二位，用回溯，当组合完毕压入结果集，然后回溯回到上一个状态继续试下一个选择
  const result = []
  for (let i = 0; i <= nums.length; i++) {
    getFixedSubsets(i, nums, [], 0)
  }
  return result
  function getFixedSubsets(length, nums, arr, start) {
    if (arr.length === length) return result.push([...arr])

    for (let i = start; i < nums.length; i++) {
      arr.push(nums[i])
      getFixedSubsets(length, nums, arr, i + 1) // 从下一个位置
      arr.pop() // 吐出来,回到上一个状态
    }
  }
}
