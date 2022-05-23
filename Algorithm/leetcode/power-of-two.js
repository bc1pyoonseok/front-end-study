/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    const arr = Array.from({length: 33}, () => 1);
    for (let i=1;i<33;i++) {
        arr[i] = 2*arr[i-1]
    }
    return arr.includes(n)
};
