function findTheDistanceValue(arr1: number[], arr2: number[], d: number): number {
    let answer = 0
    for (let val1 of arr1) {
        let flag = true
        for (let val2 of arr2) {
            if (Math.abs(val1 - val2) <= d) {
                console.log(val1, val2)
                flag = false
                break
            }
        }
        if (flag) {
            answer++
        }
    }
    return answer
}
