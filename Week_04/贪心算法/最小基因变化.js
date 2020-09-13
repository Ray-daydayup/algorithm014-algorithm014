/**
 * https://leetcode-cn.com/problems/minimum-genetic-mutation/#/description
 * @param {string} start
 * @param {string} end
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function (start, end, bank) {
  /**
   * 广度优先，每一步进行入列
   * 出列时与基因库比对，和每个基因相比，一个点不同为1
   * 与当前相差1的为下一层的元素，出队时比较
   * 有待优化
   */
  const queue = [[start, 0]]
  const visited = new Set()
  while (queue.length > 0) {
    const currDNA = queue.shift()
    if (currDNA[0] === end) {
      return currDNA[1]
    }
    // 去重，防止陷入循环
    if (visited.has(currDNA[0])) {
      continue
    }
    visited.add(currDNA[0])
    const nextDNAArr = getNextDNA(currDNA)
    queue.push(...nextDNAArr)
  }
  return -1
  function getNextDNA(currDNA) {
    const [DNA, step] = currDNA
    let target = []
    for (let i = 0; i < bank.length; i++) {
      const flag = compare(DNA, bank[i])
      if (flag) {
        target.push([bank[i], step + 1])
      }
    }
    return target
  }
  function compare(a, b) {
    if (a === b) return false
    let count = 0
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) count++
      if (count >= 2) break
    }
    return count === 1
  }
}

console.log(
  minMutation('AACCGGTT', 'AAACGGTA', ['AACCGGTA', 'AACCGCTA', 'AAACGGTA'])
)
