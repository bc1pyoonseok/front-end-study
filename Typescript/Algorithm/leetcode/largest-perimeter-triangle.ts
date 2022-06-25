function largestPerimeter(nums: number[]): number {
    const sortedNums: readonly number[] = nums.sort((a, b) => a - b)
    const isTriangleable = (...nums: number[]): boolean => {
        return nums[0] + nums[1] > nums[2]
    }
    let answer = 0
    for (let i = 0; i < sortedNums.length - 2; i++) {
        if (isTriangleable(sortedNums[i], sortedNums[i + 1], sortedNums[i + 2])) {
            let local_answer: number = sortedNums[i] + sortedNums[i + 1] + sortedNums[i + 2]
            answer = answer > local_answer ? answer : local_answer
        }
    }
    return answer
};
