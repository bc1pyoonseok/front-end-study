/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    const three = Array.from({length:33}, ()=>1)
    for (let i =1;i<33;i++) {
        three[i] = 3*three[i-1];
    }
    return three.includes(n);
};
