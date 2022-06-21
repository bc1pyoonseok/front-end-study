function kthDistinct(arr: string[], k: number): string {
    const dict = {}
    let count = 0
    for (let chr of arr) {
        if (chr in dict) dict[chr]++
        else dict[chr] = 1
    }
    for (const [key, value] of Object.entries(dict)) {
        if (value == 1) {
            if (count < k) count++
            if (count == k) return key
        }
    }
    return ""
};
