function sortEvenOdd(nums: number[]): number[] {
    const oddNums: number[] = nums.filter((_: number, index: number) => index % 2 === 1).sort((a: number, b: number) => b - a)
    const evenNums: number[] = nums.filter((_: number, index: number) => index % 2 === 0).sort((a: number, b: number) => a - b)
    const result: number[] = []
    for (let i = 0, j = 0, k = 0; i < nums.length; i++) {
        if (i % 2 == 0) result.push(evenNums[j++])
        else result.push(oddNums[k++])

    }
    return result
};
