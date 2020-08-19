class Node {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }
  insert(val) {
    if (this.root === null) {
      this.root = new Node(val)
    } else {
      insertNode(this.root, val)
    }
  }
  has(val) {
    return searchNode(this.root, val)
  }
  remove(val) {}
  // 中序遍历
  inOrderTraverse(cb) {
    inOrderTraverseNode(this.root, cb)
  }
  /**
   * 前序遍历
   */
  preOrderTraverse(cb) {
    preOrderTraverseNode(this.root, cb)
  }
  // 后序遍历
  postOrderTraverse(cb) {
    postOrderTraverseNode(this.root, cb)
  }
  min() {
    let currentNode = this.root
    while (currentNode !== null && currentNode.left !== null) {
      currentNode = currentNode.left
    }
    return currentNode
  }
  max() {
    let currentNode = this.root
    while (currentNode !== null && currentNode.right !== null) {
      currentNode = currentNode.right
    }
    return currentNode
  }
}

function insertNode(node, val) {
  if (val < node.val) {
    if (node.left === null) {
      node.left = new Node(val)
      return
    }
    insertNode(node.left, val)
    return
  }
  if (node.right === null) {
    node.right = new Node(val)
    return
  }
  insertNode(node.right, val)
}

function inOrderTraverseNode(node, callback) {
  if (node == null) return
  inOrderTraverseNode(node.left, callback)
  callback(node.val)
  inOrderTraverseNode(node.right, callback)
}
function preOrderTraverseNode(node, callback) {
  if (node == null) return
  callback(node.val)
  preOrderTraverseNode(node.left, callback)
  preOrderTraverseNode(node.right, callback)
}
function postOrderTraverseNode(node, callback) {
  if (node == null) return
  postOrderTraverseNode(node.left, callback)
  postOrderTraverseNode(node.right, callback)
  callback(node.val)
}
function searchNode(node, val) {
  if (node == null) return false
  if (val < node.val) {
    return searchNode(node.left, val)
  }
  if (val > node.val) {
    return searchNode(node.right, val)
  }
  return true
}

const binarySearchTree = new BinarySearchTree()
binarySearchTree.insert(11)
binarySearchTree.insert(7)
binarySearchTree.insert(15)
binarySearchTree.insert(5)
binarySearchTree.insert(3)
binarySearchTree.insert(9)
binarySearchTree.insert(8)
binarySearchTree.insert(10)
binarySearchTree.insert(13)
binarySearchTree.insert(12)
binarySearchTree.insert(14)
binarySearchTree.insert(20)
binarySearchTree.insert(18)
binarySearchTree.insert(25)
binarySearchTree.insert(6)

// console.log(binarySearchTree)
// binarySearchTree.inOrderTraverse((val) => console.log(val))
// binarySearchTree.preOrderTraverse((val) => console.log(val))
// binarySearchTree.postOrderTraverse((val) => console.log(val))
// console.log(binarySearchTree.min())
// console.log(binarySearchTree.max())
console.log(binarySearchTree.has(5))
console.log(binarySearchTree.has(25))
console.log(binarySearchTree.has(100))
