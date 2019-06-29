const radixHelper = require('./radixHelper')

function radixSort(nums) {
    let mostDigits = radixHelper.mostDigits(nums)
    for (let k = 0 ; k < mostDigits ; k++) {
        let digitBucktes = Array.from({ length: 10 }, () => [])
        for (let i = 0 ; i < nums.length ; i++) {
            let bucketIndex = radixHelper.getDigit(nums[i], k)
            digitBucktes[bucketIndex].push(nums[i])
        }
        nums = [].concat(...digitBucktes)
    }

    return nums
}

console.log(radixSort([23,345,5467,12,2345,9852]))