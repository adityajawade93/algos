module.exports = function (arr1, arr2) {
    let i = 0
    let j = 0

    let mergedArr = []

    while(i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            mergedArr.push(arr1[i])
            i++
        } else {
            mergedArr.push(arr2[j])
            j++
        }
    }

    while(j < arr2.length) {
        mergedArr.push(arr2[j])
        j++
    }

    while(i < arr1.length) {
        mergedArr.push(arr1[i])
        i++
    }

    return mergedArr
}