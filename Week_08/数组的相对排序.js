/**
 * https://leetcode-cn.com/problems/relative-sort-array/
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
  /**
   * 计数，然后组合
   */
  const count = {}
  for (const val of arr1) {
    if (count[val]) {
      count[val]++
    } else {
      count[val] = 1
    }
  }
  const result = []
  for (const num of arr2) {
    while (count[num] > 0) {
      result.push(num)
      count[num]--
    }
  }
  result.push(...arr1.filter((item) => count[item] > 0).sort((a, b) => a - b))
  return result
}

var relativeSortArray = function (arr1, arr2) {
  /**
   * 定义比较规则，然后利用比较来排
   * 在arr2里就按索引比较
   * 不在比较本身大小
   * 数组内的比不在的大
   */
  const map = new Map()
  for (let i = 0; i < arr2.length; i++) {
    map.set(arr2[i], i)
  }
  return arr1.sort(compare)
  function compare(a, b) {
    const aTemp = getFlag(a)
    const bTemp = getFlag(b)
    if ((aTemp.flag && bTemp.flag) || (!aTemp.flag && !bTemp.flag)) {
      return aTemp.value - bTemp.value
    }
    if (aTemp.flag) {
      return -1
    }
    if (bTemp.flag) {
      return 1
    }
  }
  function getFlag(val) {
    if (map.has(val)) return { flag: true, value: map.get(val) }
    return { flag: false, value: val }
  }
}
