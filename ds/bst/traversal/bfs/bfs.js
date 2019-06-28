class Node {
    constructor(data) {
        this.data = data
        this.right = null
        this.left = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    insert(data) {
            const newNode = new Node(data)
            if (!this.root) {
                this.root = newNode
                return this
            } else {
                let current = this.root
                while(true) {
                    if (data < current.data) {
                        if (!current.left) {
                            current.left = newNode
                            return this
                        }
                        current = current.left
                    } else if (data > current.data) {
                        if (!current.right) {
                            current.right = newNode
                            return this
                        }
                        current = current.right
                    } else {
                        return undefined
                    }
                }
            }
    }

    search(data) {
        let current = this.root
        while(true) {
            if (!current) {
                return undefined
            } else if (current.data === data) {
                return current
            } else if (data < current.data) {
                current = current.left
            } else {
                current = current.right
            }
        }
    }

    bfs() {

        if (!this.root) { return undefined }

        let queue = [this.root]
        let visited = []

        while(queue.length) {
            let currentNode = queue.shift()
            visited.push(currentNode.data)
            
            if (currentNode.left) {
                queue.push(currentNode.left)
            }

            if (currentNode.right) {
                queue.push(currentNode.right)
            }
        }

        return visited
    }
}

const t1 = new BinarySearchTree

t1.insert(10)
t1.insert(6)
t1.insert(15)
t1.insert(3)
t1.insert(8)
t1.insert(20)
console.log(t1.bfs())