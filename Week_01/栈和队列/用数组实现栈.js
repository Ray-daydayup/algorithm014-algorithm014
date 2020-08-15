class Stack {
  constructor() {
    this.store = []
  }
  push(element) {
    this.store.push(element)
  }
  pop() {
    return this.store.pop()
  }
  peek() {
    return this.store[this.store.length - 1]
  }
  isEmpty() {
    return this.store.length === 0
  }
  clear() {
    this.store = []
  }
  size() {
    return this.store.length
  }
}
