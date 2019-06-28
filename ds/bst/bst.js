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
}

const t1 = new BinarySearchTree()

t1.insert(10)
t1.insert(16)
t1.insert(19)
t1.insert(6)
t1.insert(5)
t1.insert(3)

console.log(t1.search(99))

// console.log(JSON.stringify(t1, null, 2))

// console.log(t1.insert(10))
