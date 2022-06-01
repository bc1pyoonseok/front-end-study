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
