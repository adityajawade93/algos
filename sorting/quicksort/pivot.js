module.exports = function (arr, start = 0, n = arr.length + 1) {
    let pivot = arr[start]
    let swapIdx = start

    for(let i = start + 1 ; i < arr.length ; i++) {
        if (pivot > arr[i]) {
            swapIdx++
            swap(arr, swapIdx, i)
        }
    }

    swap(arr, start, swapIdx)
    
    return swapIdx
}

function swap(arr, i, j) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}
