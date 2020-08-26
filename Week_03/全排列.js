/**
 * https://leetcode-cn.com/problems/permutations/
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const result = []
  getPermutation(nums, new Set())
  return result
  function getPermutation(nums, arr) {
    if (arr.size === nums.length) return result.push([...arr])

    for (let i = 0; i < nums.length; i++) {
      if (arr.has(nums[i])) continue // 去重
      arr.add(nums[i])
      getPermutation(nums, arr)
      arr.delete(nums[i])
    }
  }
}
