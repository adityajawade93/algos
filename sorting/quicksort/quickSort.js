 const pivot = require('./pivot')

 // console.log(pivot([28,41,4,11,16,1,40,14,36,37,42,18],0, 11))
// console.log(pivot([26,23,27,44,17,47,39,42,43,1], 0, 9))
// console.log(pivot([4,8,2,1,5,7,6,3]))

function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivotIndex = pivot(arr, left, right)
        // left
        quickSort(arr, left, pivotIndex - 1)
        // right
        quickSort(arr, pivotIndex + 1, right)
    }

    return arr
}

console.log(quickSort([28,41,4,11,16,1,40,14,36,37,42,18]))