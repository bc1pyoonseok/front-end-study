function decompressRLElist(nums: number[]): number[] {
    const answer_list = new Array()
    for (let i = 0; i < nums.length; i += 2) {
        const freq = nums[i]
        const value = nums[i + 1]
        for (let j = 0; j < freq; j++) {
            answer_list.push(value)
        }
    }
    return answer_list
};
