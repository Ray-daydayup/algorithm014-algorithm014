/**
 * https://leetcode-cn.com/problems/word-ladder-ii/description/
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
var findLadders = function (beginWord, endWord, wordList) {
  /**
   * 深度优先
   * 时间复杂度过高
   */
  // 维护一个只存相同最小长度的栈
  const result = {
    store: [],
    minLength: Infinity,
    add(arr) {
      // 不会存在长度大于的情况
      if (arr.length < this.minLength) {
        this.store = []
        this.minLength = arr.length
      }
      this.store.push(arr)
    }
  }
  const set = new Set()
  set.add(beginWord)
  dfs(beginWord, set)
  return result.store

  function dfs(word, set) {
    // 如果大于最小子序列长度就不继续了
    if (set.size > result.minLength) return
    if (word === endWord) {
      return result.add([...set.values()])
    }

    for (let i = 0; i < wordList.length; i++) {
      if (set.has(wordList[i])) continue
      const flag = compare(word, wordList[i])
      if (flag) {
        set.add(wordList[i])
        dfs(wordList[i], set)
        set.delete(wordList[i]) //  回溯
      }
    }
  }
  function compare(a, b) {
    if (a === b) return false
    let count = 0
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) count++
      if (count > 1) return false
    }
    return true
  }
}

// 广度优先

function findLadders(beginWord, endWord, wordList) {
  /**
   * 广度优先遍历的过程中，需要先记住步骤
   */
  const queue = [[beginWord]]
}
