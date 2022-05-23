/**
 * @param {string} s
 * @return {boolean}
 */

 const isPalindrome = (s) => {
    const reverseString = (s) => {
      return s.split("").reverse().join("");
    };
    answer = "";
    for (let i = 0; i < s.length; i++) {
      if (/[a-zA-Z]/.test(s[i]) || /[0-9]/.test(s[i])) {
        answer += s[i].toLowerCase();
      }
    }
    return answer === reverseString(answer);
  };
  