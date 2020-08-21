class BinaryHeap {
  constructor() {
    this.heap = []
  }
  max() {
    return this.heap[0]
  }
  insert(val) {
    this.heap.push(val)
    heapUp(this.heap)
  }
  deleteMax() {
    this.heap[0] = this.heap[this.heap.length - 1]
    this.heap.pop()
    heapDown(this.heap)
  }
}
function heapUp(heap) {
  let i = heap.length - 1
  let temp = heap[i]
  while (i > 0) {
    const parentIndex = Math.floor((i - 1) / 2)
    const parent = heap[parentIndex]
    if (temp < parent) {
      break
    }
    heap[i] = parent
    i = parentIndex
  }
  heap[i] = temp // 最后赋值
}

function heapDown(heap) {
  let i = 0
  let temp = heap[i]
  while (2 * i + 1 < heap.length) {
    let max = 2 * i + 1
    if (heap[2 * i + 1] < heap[2 * i + 2]) {
      max = 2 * i + 2
    }
    if (temp > heap[max]) {
      break
    }
    heap[i] = heap[max]
    i = max
  }
  heap[i] = temp // 最后赋值
}

const heap = new BinaryHeap()

heap.insert(1)
heap.insert(2)
heap.insert(3)
heap.insert(4)
heap.insert(2)

console.log(heap)
heap.deleteMax()
heap.insert(5)

console.log(heap)
