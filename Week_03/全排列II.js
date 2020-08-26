/**
 * https://leetcode-cn.com/problems/permutations-ii/
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  // 1. 保证出现过的索引后面不会再出现 map
  // 2. 保证当前位置出现过的元素，不会再出现 set
  const result = []
  getPermuteUnique(nums, new Map())
  return result
  function getPermuteUnique(nums, map) {
    if (map.size === nums.length) result.push([...map.values])
    const set = new Set()
    for (let i = 0; i < nums.length; i++) {
      if (map.has(i)) continue
      if (set.has(nums[i])) continue
      map.set(i, nums[i])
      set.add(nums[i])
      getPermuteUnique(nums, map)
      map.delete(i)
    }
  }
}
