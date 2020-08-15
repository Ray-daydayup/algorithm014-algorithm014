/**
 * https://leetcode-cn.com/problems/two-sum/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  // 缓存存储对应值和索引
  const result = []
  const map = new Map()
  nums.every((val, index) => {
    if (map.has(target - val)) {
      result.push(map.get(target - val), index)
      return false
    } else {
      map.set(val, index)
    }
    return true
  })
  return result
}
console.log(twoSum([3, 2, 4], 6))
