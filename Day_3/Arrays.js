function getSecondLargest(nums) {
    let uniqueNums = [...new Set(nums)].sort((a, b) => b - a);

    return uniqueNums[1];
}

let nums = [2, 3, 6, 6, 5];