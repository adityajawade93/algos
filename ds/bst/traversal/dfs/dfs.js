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
            while (true) {
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
        while (true) {
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

    preorder() {
        let data = []
        let current = this.root
        function traverse(node) {
            data.push(node.data)
            if (node.left) traverse(node.left)
            if (node.right) traverse(node.right)
        }
        traverse(current)
        return data
    }

    postorder() {
        let data = []
        let current = this.root
        function traverse(node) {
            if (node.left) traverse(node.left)
            if (node.right) traverse(node.right)
            data.push(node.data)
        }
        traverse(current)
        return data
    }

    inorder() {
        let data = []
        let current = this.root
        function traverse(node) {
            if (node.left) traverse(node.left)
            data.push(node.data)
            if (node.right) traverse(node.right)
        }
        traverse(current)
        return data
    }
}

const t1 = new BinarySearchTree

t1.insert(10)
t1.insert(6)
t1.insert(15)
t1.insert(3)
t1.insert(8)
t1.insert(20)

console.log(t1.inorder())