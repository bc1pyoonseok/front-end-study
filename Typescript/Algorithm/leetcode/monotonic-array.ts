function isMonotonic(nums: number[]): boolean {
    const isIncreaseMonotonic = (nums: number[]): boolean => {
        let cur_num: boolean | number = false
        for (let num of nums) {
            if (cur_num === false) {
                cur_num = num
            }
            else if (cur_num > num) {
                return false
            }
            cur_num = num
        }
        return true
    }
    return isIncreaseMonotonic(nums) || isIncreaseMonotonic(nums.reverse())
};