class Node {
  constructor(data) {
    this.data = data
    this.right = null
    this.down = null
  }
}


class LinkedList {
  constructor() {
    this.head = null
  }

  push(head, data) {
    let newNode = new Node(data)
    newNode.down = head
    head = newNode

    return head
  }

  flatten(root) {
    let self = this
    // console.log(root)
    if (root === null || root.right === null) {
      return root
    }

    return self.merge(root, self.flatten(root.right))
  }

  merge(a, b) {
    let self = this
    if (!a) { return b }
    if (!b) { return a }

    let result = null

    if (a.data < b.data) {
      result = a
      result.down = self.merge(a.down, b)
    } else {
      result = b
      result.down = self.merge(a, b.down)
    }

    return result
  }

  print() {
    let righCurrent = this.head
    while(righCurrent) {
      let current = righCurrent
      let nodes = []
      while(current) {
        nodes.push(current.data)
        current = current.down
      }
      console.log(nodes.join( '->' ))
      righCurrent = righCurrent.right
    }
  }
}

let L = new LinkedList()

L.head = L.push(L.head, 30)
L.head = L.push(L.head, 8)
L.head = L.push(L.head, 7)
L.head = L.push(L.head, 5)

L.head.right = L.push(L.head.right, 20); 
L.head.right = L.push(L.head.right, 10); 

L.head.right.right = L.push(L.head.right.right, 50); 
L.head.right.right = L.push(L.head.right.right, 22); 
L.head.right.right = L.push(L.head.right.right, 19); 

L.head.right.right.right = L.push(L.head.right.right.right, 45); 
L.head.right.right.right = L.push(L.head.right.right.right, 40); 
L.head.right.right.right = L.push(L.head.right.right.right, 35); 
L.head.right.right.right = L.push(L.head.right.right.right, 20);

L.head = L.flatten(L.head)
L.print()