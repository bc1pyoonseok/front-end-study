function containsDuplicate(nums: number[]): boolean {
    class DefaultDict {
        constructor(public defaultValue: number) {
            let handler = {
                get(target, name): number {
                    if (!(name in target)) {
                        target[name] = defaultValue
                    }
                    return target[name]
                }
            }
            return new Proxy({}, handler)
        }
    }
    const defaultdict = new DefaultDict(0)
    for (let num of nums) {
        defaultdict[num]++
    }
    for (let key in defaultdict) {
        if (defaultdict[key] > 1) {
            return true
        }
    }
    return false
};
