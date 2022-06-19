function sortedSquares(nums: number[]): number[] {
    const squared = nums.map(value => value ** 2).sort((a, b) => a - b)
    return squared
};
