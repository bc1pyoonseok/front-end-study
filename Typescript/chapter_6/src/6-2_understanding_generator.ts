import { getConstantValue } from "typescript"

function* generator(start, end) {
    for (let i = start; i < end; i++) {
        yield i
    }
}

let gen = generator(11, 20)
for (let i of gen) {
    console.log(i)
}

// the way how generator works is by semi-coroutine
let intervalId1 = setInterval(() => console.log('hi'), 1000)
setTimeout(() => clearInterval(intervalId1), 3100)

let count: number = 0
const intervalId2 = setInterval(
    () => {
        if (count++ < 3) {
            console.log(`${count}`)
        }
        else {
            clearInterval(intervalId2)
        }
    }, 1000,
)
// with yield, you can use it like a iterator
// next is available, and also you can use it for...of syntax
function* rangeGenerator(start: number, end: number) {
    for (let i = start; i < end; i++) {
        yield i
    }
}
for (let i of rangeGenerator(-4, 0)) {
    console.log(i)
}
const iterator = rangeGenerator(10, 20)

while (true) {
    const { value, done } = iterator.next()
    if (done) break
    console.log(`rangeGenerator: ${value}`)
}

class IterableUsingGenerator<T> implements Iterable<T> {
    constructor(public data: T[]) { }
    [Symbol.iterator] = function* () {
        for (let value of this.data) {
            yield value
        }
    }
}
let resultString = ''
let stringGenerator = new IterableUsingGenerator<string>(
    ['hi', 'my', 'name', 'is', 'yoonseok'])
for (let i of stringGenerator) {
    resultString += ` ${i}`
}
console.log(resultString)

function* totalGen() {
    yield* stringGenerator
    yield* rangeGenerator(0, 10)
    yield 'done!'
}
let totalgen = totalGen()
for (let i of totalgen) {
    console.log(`total gen with yield used in for...of ${i}`)

}
while (true) {
    const { value, done } = totalgen.next()
    if (done) break
    console.log(`total gen with yield used in while with next ${value}`)
}

function* yieldReturn() {
    let result = ''
    for (let i = 0; i < 5; i++) {
        console.log(result)
        result = yield i
    }
}
let yieldReturnIter = yieldReturn()
let i = -1
const array = ['wow', 'this', 'is', 'great', 'haha']
while (true) {
    const { value, done } = yieldReturnIter.next(array[i++])
    if (done) break
}