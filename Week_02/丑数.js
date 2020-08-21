/**
 * https://leetcode-cn.com/problems/chou-shu-lcof/
 * @param {number} n
 * @return {number}
 */
const map = preCalculate()
console.log(map)
var nthUglyNumber = function (n) {
  return map[n - 1]
}
/**
 * 预计算
 */
function preCalculate() {
  const result = [1]
  const set = new Set(result)
  // 三指针,取最小值，取了这个数就 +1
  let p2 = 0
  let p3 = 0
  let p5 = 0
  while (result.length < 1691) {
    const temp = [result[p2] * 2, result[p3] * 3, result[p5] * 5]
    const index = getMinIndex(temp)
    if (!set.has(temp[index])) {
      set.add(temp[index])
      result.push(temp[index])
    }
    if (index === 0) p2++
    if (index === 1) p3++
    if (index === 2) p5++
  }
  return result
}

function getMinIndex(arr) {
  let min = 0
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[min]) min = i
  }
  return min
}

console.log(nthUglyNumber(10))
