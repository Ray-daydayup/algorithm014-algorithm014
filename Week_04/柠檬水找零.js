/**
 * https://leetcode-cn.com/problems/lemonade-change/description/
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
  /**
   * 首先，实时记录自己手里的各种面值的数量，
   * 贪心算法找零时优先用大额的钱
   */
  const count = {
    5: 0,
    10: 0,
    20: 0
  }
  for (const pay of bills) {
    count[pay]++
    if (!change(count, pay, 5)) return false
  }
  return true
  function change(count, pay, back) {
    const target = pay - back // 最高不过15
    if (target === 0) return true
    if (target >= 10 && count[10] > 0) {
      count[10]--
      return change(count, target, 10)
    }
    if (count[5] > 0) {
      count[5]--
      return change(count, target, 5)
    }
    return false
  }
}

console.log(lemonadeChange([5, 5, 10, 10, 20]))
