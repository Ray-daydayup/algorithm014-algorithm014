/**
 * https://leetcode-cn.com/problems/min-stack/
 * initialize your data structure here.
 */
// 用一个辅助栈来存最小的数的索引
class MinStack {
  constructor() {
    this.store = []
    this.help = []
  }
  /**
   * @param {number} x
   * @return {void}
   */
  push(x) {
    this.store.push(x)
    if (this.help.length === 0) {
      this.help.push(this.store.length - 1)
      return
    }
    const minIndex = this.help[this.help.length - 1]
    if (x <= this.store[minIndex]) {
      this.help.push(this.store.length - 1)
    }
  }

  /**
   * @return {void}
   */
  pop() {
    const result = this.store.pop()
    const minIndex = this.help[this.help.length - 1]
    if (minIndex === this.store.length) {
      this.help.pop()
    }
  }

  /**
   * @return {number}
   */
  top() {
    return this.store[this.store.length - 1]
  }

  /**
   * @return {number}
   */
  getMin() {
    const minIndex = this.help[this.help.length - 1]
    return this.store[minIndex]
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
