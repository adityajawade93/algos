const merge = require('./merge')

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr
    }
    let mid = Math.round(arr.length/2)
    return merge(mergeSort(arr.slice(0, mid)), mergeSort(arr.slice(mid, arr.length)))
}

console.log(mergeSort([10, 3, 12, 7, 2, 11, 9]))