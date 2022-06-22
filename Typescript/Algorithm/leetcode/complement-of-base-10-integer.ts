function bitwiseComplement(n: number): number {
    let result: number = 0
    const decToBin = (n: number): number[] => {
        const result = []
        while (n) {
            result.unshift(n % 2)
            n = parseInt(`${n / 2}`)
        }
        if (Array.isArray(result) && !result.length) return [0]
        return result
    }
    for (const [index, value] of decToBin(n).reverse().entries()) {
        const reverse = value === 1 ? 0 : 1
        result += reverse * (2 ** index)
    }
    return result
};
