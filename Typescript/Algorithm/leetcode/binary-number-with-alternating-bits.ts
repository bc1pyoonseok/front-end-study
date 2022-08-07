const hasAlternatingBits = (n: number): boolean => {
    const decToBin = (n: number): string => {
        let str: string = ''
        while (n > 0) {
            str += `${n % 2}`
            n = parseInt(`${n / 2}`)
        }
        return str
    }
    let cur_i: string = 'x'
    for (let i of decToBin(n)) {
        if (cur_i === i) {
            return false
        }
        cur_i = i
    }
    return true
};