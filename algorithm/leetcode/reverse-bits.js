const dexToBin = n => {
    answer = ''
    while (n!==0) {
        answer += (n%2).toString()
        n = parseInt(n/2)
    }
    return answer
}
const reverseBits = n => {
    str_n = dexToBin(n)
    string_n = str_n + '0'.repeat(32-str_n.length)
    string_n = string_n.split("").reverse().join("")
    answer = 0
    for(let i = 0;i<string_n.length;i++) {
        answer += parseInt(string_n[i])*Math.pow(2,i)
    }
    return answer
};
