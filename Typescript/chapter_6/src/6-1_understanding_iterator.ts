const iterRange = (start: number, end: number) => {
    let currentNum = start
    return {
        next() {
            const value = currentNum < end ? currentNum++ : undefined
            const done = value == undefined
            return { value, done }
        }
    }
}

const iterator = iterRange(10, 20)
while (true) {
    const { value, done } = iterator.next()
    if (done) break
    console.log(value)
}
