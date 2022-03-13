/**
 * @param {number[]} nums
 * @return {number[]}
 */
const buildArray = nums => {
    let answer = [];
    for (let i=0; i<nums.length; i++) {
        answer.push(nums[nums[i]]);
    }
    return answer;
};

