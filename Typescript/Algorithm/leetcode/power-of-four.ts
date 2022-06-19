function isPowerOfFour(n: number): boolean {
    let num = n
    while (num > 1) {
        if (num % 4 == 0)
            num = parseInt(`${num / 4}`)
        else
            return false
    }
    if (num == 1)
        return true
    return false
};
