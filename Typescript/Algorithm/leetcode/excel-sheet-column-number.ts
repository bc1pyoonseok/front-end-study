function titleToNumber(columnTitle: string): number {
    const BASE: number = 26
    const reversedStringArray: string[] = columnTitle.split("").reverse()
    const alphaToNum = (str: string): number => {
        return str.charCodeAt(0) - "A".charCodeAt(0) + 1
    }
    let sum = 0
    for (let i = 0; i < reversedStringArray.length; i++) {
        sum += alphaToNum(reversedStringArray[i]) * (BASE ** i)
    }
    return sum
};
