/**
 * @param {string} s
 * @return {string}
 */
function removeVowels(s) {
    let answer = '';
    for (let i=0;i<s.length;i++) {
        if ("aeiou".indexOf(s[i]) == -1) {
            answer += s[i];
        }
    }
    return answer;
};

/**
 *
 * version 2
 */
const removeVowels = s => {
    const vowels = new Set("aeiou");
    let answer = '';
    for (c of s) {
        if (!(vowels.has(c))) {
            answer += c;
        }
    }
    return answer;
};
