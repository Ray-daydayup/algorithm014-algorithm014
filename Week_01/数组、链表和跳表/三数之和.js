/**
 * https://leetcode-cn.com/problems/3sum/
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  // 排序+ 双指针
  // 1. 指针从两端往中间寻找
  // 2. 保证第一第二个数不能重复即可，因为有序的，所以第三个一定不会满足条件
  nums = nums.sort((a, b) => a - b)
  const target = 0
  const result = []
  for (let first = 0; first < nums.length - 2; first++) {
    // 不能重复
    if (first > 0 && nums[first] === nums[first - 1]) {
      continue
    }
    let third = nums.length - 1
    for (let second = first + 1; second < nums.length; second++) {
      // 小于，移动第二个数的指针
      if (second > first + 1 && nums[second] === nums[second - 1]) {
        continue
      }
      // 大于移动第三个数的指针
      while (
        second < third &&
        nums[second] + nums[third] > target - nums[first]
      ) {
        third--
      }
      if (second >= third) {
        // 交叉过来会重复
        break
      }
      // 顺序不能掉到
      if (nums[second] + nums[third] === target - nums[first]) {
        result.push([nums[first], nums[second], nums[third]])
      }
    }
  }
  return result
}

// 推荐题解 https://leetcode-cn.com/problems/3sum/solution/san-shu-zhi-he-javajian-ji-ti-jie-by-wang-zi-hao-z/
console.log(threeSum([1, 2, -2, -1]))
