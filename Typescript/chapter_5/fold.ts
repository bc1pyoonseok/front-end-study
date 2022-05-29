export const fold = <T>(array: T[], cb: (result: T, value: T) => T, initValue: T): T => {
    let result: T = initValue
    for (let i = 0; i < array.length; i++) {
        result = cb(result, array[i])
    }
    return result
}

export const fillter = <T>(array: T[], cb: (value: T, index?: number) => boolean,): T[] => {
    let resultArray: Array<T> = new Array()
    for (let i = 0; i < array.length; i++) {
        if (cb(array[i])) {
            resultArray = [...resultArray, array[i]]
        }
    }
    return resultArray
}
export const map = <T, Q>(array: T[], cb: (value: T, index?: number) => Q): Q[] => {
    let result: Q[] = []
    for (let i = 0; i < array.length; i++) {
        result = [...result, cb(array[i], i)]
    }
    return result
}