function findDisappearedNumbers(nums: number[]): number[] {
    const appear_nums: Set<number> = new Set(nums)
    const answer: number[] = []
    for (let i = 1; i <= nums.length; i++) {
        if (!appear_nums.has(i)) answer.push(i)
    }
    return answer
};
