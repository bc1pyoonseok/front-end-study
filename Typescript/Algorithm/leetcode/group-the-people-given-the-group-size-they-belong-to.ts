function groupThePeople(groupSizes: number[]): number[][] {
    interface Idict {
        [key: string]: number[][]
    }
    const dict: Idict = {
    }
    const answer = []
    for (const [index, value] of groupSizes.entries()) {
        const StringValue = `${value}`
        if (!(StringValue in dict)) dict[StringValue] = [[index]]
        else {
            const last_one = dict[StringValue][dict[StringValue].length - 1]
            if (last_one.length < value) {
                last_one.push(index)
            }
            else {
                dict[StringValue].push([index])
            }
        }
    }
    for (const [key, value] of Object.entries(dict)) {
        answer.push(...value)
    }
    return answer
};
