class MaxBinaryHeap {
    constructor() {
        this.values = [41, 39, 33, 18, 27, 12]
    }

    insert(data) {
        this.values.push(data)
        this.bubbleUp()
    }

    bubbleUp() {
        let index = this.values.length - 1
        const element = this.values[index]
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2)
            let parent = this.values[parentIndex]
            if (element <= parent) { break }
            this.values[parentIndex] = element
            this.values[index] = parent
            index = parentIndex
        }
    }

    extractMax() {
        const max = this.values[0]
        const end = this.values.pop()
        if (this.values.length > 0) {
            this.values[0] = end
            this.sinkDown()
        }
        return max
    }

    sinkDown() {
        let idx = 0
        const length = this.values.length
        const element = this.values[0]

        while (true) {
            let leftChildIdx = 2 * idx + 1
            let rightChildIdx = 2 * idx + 2

            let leftChild, rightChild
            let swap = null

            if (leftChildIdx < length) {
                leftChild = this.values[leftChildIdx]
                if (leftChild > element)
                    swap = leftChildIdx
            }

            if (rightChildIdx < length) {
                rightChild = this.values[rightChildIdx]
                if (
                    (!swap && rightChild > element) ||
                    (swap && rightChild > leftChild)
                ) {
                    swap = rightChildIdx
                }
            }

            if (!swap) {
                break
            }

            this.values[idx] = this.values[swap]
            this.values[swap] = element
            idx = swap
        }
    }
}

const binaryHeap = new MaxBinaryHeap()

binaryHeap.insert(55)
// binaryHeap.insert(199)
// binaryHeap.insert(10)
// binaryHeap.insert(15)
// binaryHeap.insert(45)
binaryHeap.extractMax()

console.log(binaryHeap)