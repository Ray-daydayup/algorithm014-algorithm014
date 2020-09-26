/**
 * https://leetcode-cn.com/problems/implement-trie-prefix-tree/#/description
 * Initialize your data structure here.
 */
// var Trie = function () {}
class Trie {
  constructor() {
    // 对象来存储，每个对象的键为对应字符，值为对应的下一层
    this.root = {}
  }
  /**
   * Inserts a word into the trie.
   * @param {string} word
   * @return {void}
   */
  insert(word) {
    let current = this.root
    for (const c of word) {
      if (!current[c]) current[c] = {}
      // 向下
      current = current[c]
    }
    current.isWord = true
  }
  /**
   * Returns if the word is in the trie.
   * @param {string} word
   * @return {boolean}
   */
  search(word) {
    let current = this.root
    for (const c of word) {
      if (!current[c]) return false
      // 向下
      current = current[c]
    }
    if (current.isWord) return true
    return false
  }
  /**
   * Returns if there is any word in the trie that starts with the given prefix.
   * @param {string} prefix
   * @return {boolean}
   */
  startsWith(prefix) {
    let current = this.root
    for (const c of prefix) {
      if (!current[c]) return false
      // 向下
      current = current[c]
    }
    return true
  }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
