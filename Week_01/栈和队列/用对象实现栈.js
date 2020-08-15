class Stack {
  constructor() {
    this.count = 0
    this.store = {}
  }
  push(element) {
    this.store[this.count] = element
    this.count++
  }
  pop() {
    if (this.isEmpty()) {
      return
    }
    const result = this.store[this.count - 1]
    delete this.store[this.count - 1]
    this.count--
    return result
  }
  peek() {
    return this.store[this.count - 1]
  }
  clear() {
    this.count = 0
    this.store = {}
  }
  isEmpty() {
    return this.count === 0
  }
  size() {
    return this.count
  }
}
