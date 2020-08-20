/**
 * https://leetcode-cn.com/problems/zui-xiao-de-kge-shu-lcof/
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
// 大顶堆为边界
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
  deleteMax(val) {
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
    if (heap[2 * i + 2] && heap[2 * i + 1] < heap[2 * i + 2]) {
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

var getLeastNumbers = function (arr, k) {
  if (arr.length === 0 || k === 0) return []
  const heap = new BinaryHeap()
  for (let i = 0; i < arr.length; i++) {
    if (i < k) {
      heap.insert(arr[i])
      continue
    }
    if (arr[i] < heap.max()) {
      heap.insert(arr[i])
      heap.deleteMax(arr[i])
    }
  }
  return heap.heap
}
console.log(getLeastNumbers([0, 0, 1, 2, 4, 2, 2, 3, 1, 4], 8))
// [0,0,1,1,2,2,2,3]
