/**
 * 两数之和
 * https://leetcode-cn.com/problems/two-sum/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  // 只需要找到 a + b === target 即 target - b === a
  // 哈希表，遍历一遍，在遍历过的数里找a
  const map = new Map([[nums[0], 0]]) // key:数值  value:索引
  const result = []
  for (let i = 1; i < nums.length; i++) {
    const a = target - nums[i]
    if (map.has(a)) {
      result.push(map.get(a), i)
      break
    }
    map.set(nums[i], i)
  }
  return result
}
console.log(twoSum([3, 2, 4], 6))

/**
 * 三数之和
 * https://leetcode-cn.com/problems/3sum/
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  // 分析一下的话，一个满足的解有三位，选择好第一位再选第二位然后再选第三位，满足就生成解，三重循环加上去重至少O(n3)
  // 如果数据是有序的话，确定第一个数，那么第二个数和第三个数从两端逼近，大了右边向内收，小了左向内收。
  // 去重，下一个位置一定要与当前位置不同
  const target = 0
  const result = []
  // 排序
  nums = nums.sort((a, b) => a - b)
  for (let a = 0; a < nums.length - 2; a++) {
    // 去重，当前位置与上一个位置一定要不同
    if (a > 0 && nums[a] === nums[a - 1]) continue
    // 优化
    if (!test(nums[a], nums[a + 1], nums[a + 2], target, true)) break
    if (
      !test(
        nums[nums.length - 3],
        nums[nums.length - 2],
        nums[nums.length - 1],
        target,
        false
      )
    )
      break

    let b = a + 1
    let c = nums.length - 1
    while (b < c) {
      // 去重，当前位置与上一个位置一定要不同
      if (b > a + 1 && nums[b] === nums[b - 1]) {
        b++
        continue
      }
      if (c < nums.length - 1 && nums[c] === nums[c + 1]) {
        c--
        continue
      }
      const sum = nums[a] + nums[b] + nums[c]
      // 大了右边向内收
      if (sum > target) {
        c--
        continue
      }
      // 目标
      if (sum === target) {
        result.push([nums[a], nums[b], nums[c]])
      }
      // 小了或已经获得一组左向内收。
      b++
    }
  }
  return result

  function test(a, b, c, target, isMin) {
    // 如果最小的三个数都大于目标，不需要往下看了
    if (isMin && a + b + c > target) {
      return false
    }
    // 如果最大的三个数都小于目标，不需要往下看了
    if (!isMin && a + b + c < target) {
      return false
    }
    return true
  }
}

// 推荐题解 https://leetcode-cn.com/problems/3sum/solution/san-shu-zhi-he-javajian-ji-ti-jie-by-wang-zi-hao-z/
console.log(threeSum([-2, 0, 1, 1, 2]))

/**
 * 四数之和，和三叔之和相同
 * https://leetcode-cn.com/problems/4sum/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  const result = []
  nums = nums.sort((a, b) => a - b)
  const aSet = new Set()
  getSolve(nums)
  return result

  function getSolve(nums) {
    for (let i = 0; i + 3 < nums.length; i++) {
      if (aSet.has(nums[i])) continue
      let a = i
      aSet.add(nums[i])
      const bSet = new Set()
      for (let j = a + 1; j + 2 < nums.length; j++) {
        if (bSet.has(nums[j])) continue
        bSet.add(nums[j])
        let b = j
        let c = b + 1
        let d = nums.length - 1
        while (c < d) {
          const sum = nums[a] + nums[b] + nums[c] + nums[d]
          if (sum === target) {
            result.push([nums[a], nums[b], nums[c], nums[d]])
            const temp = nums[c]
            while (temp === nums[c]) {
              c++
            }
            continue
          }
          if (sum < target) {
            c++
            continue
          }
          if (sum > target) {
            d--
            continue
          }
        }
      }
    }
  }
}
