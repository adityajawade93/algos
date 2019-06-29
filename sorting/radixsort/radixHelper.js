function getDigit(num, n) {
     return Math.floor(Math.abs(num) / Math.pow(10, n)) % 10
}

function digitCount(num) {
    if (num === 0) return 1
    return Math.floor(Math.log10(Math.abs(num))) + 1
}

function mostDigits(nums) {
    let maxDigits = 0
    nums.forEach(num => {
        maxDigits = Math.max(maxDigits, digitCount(num))
    })

    return maxDigits
}

module.exports = {
    getDigit,
    digitCount,
    mostDigits
}