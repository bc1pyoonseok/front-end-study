function search(nums: number[], target: number): number {
    const binarySearch = (nums: number[], target: number): number => {
        let start = 0
        let end = nums.length - 1
        while (start <= end) {
            let mid = Math.trunc((start + end) / 2)
            if (nums[mid] < target) start = mid + 1
            else if (nums[mid] > target) end = mid - 1
            else return mid
        }
        return -1
    }
    return binarySearch(nums, target)
};
