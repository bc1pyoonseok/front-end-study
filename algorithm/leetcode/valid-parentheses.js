/**
 * @param {string} s
 * @return {boolean}
 */

const is_pair = (bracket, stack) => {
    const arr = booled => booled
    const array = [
        stack[stack.length-1] ==='(' && bracket ===')',
        stack[stack.length-1] ==='{' && bracket ==='}',
        stack[stack.length-1] ==='[' && bracket ===']',
                  ]
        return array.some(arr);
}

const stack_push = (bracket, stack) => {
    if (stack.length>0 && is_pair(bracket, stack)) {
        stack.pop();
    } else {
        stack.push(bracket);
    }
}

const isValid = s => {
    let stack = []
    for (let i=0;i<s.length;i++) {
        stack_push(s[i], stack);
    }
    return !stack.length
};
