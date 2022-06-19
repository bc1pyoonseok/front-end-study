function canPermutePalindrome(s: string): boolean {
    const dict = {}
    let odd_count = 0
    for (let chr of s) {
        chr in dict ? dict[chr]++ : dict[chr] = 1
    }
    for (let chr of Object.keys(dict)) {
        if (dict[chr] % 2 === 1) odd_count += 1
    }
    return odd_count > 1 ? false : true
};
