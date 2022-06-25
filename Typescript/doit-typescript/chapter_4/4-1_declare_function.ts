// method 1.
// by function keyword

function add1(a: number, b: number): number {
    // return a + b
    return 1
}

// method 2.
// by =>
// this is called function signature

type my = number
type add = (a: number, b: number) => number
let add2: add = function (a: my, b: my): my {
    return a + b
}

console.log(add2(1, 2))

// optinal parameter
// add ? to optional parameter
function fn(arg1: number, arg2?: string): void {
    console.log(arg1)
    if (arg2 !== undefined) {
        console.log(arg2)
    }
}
fn(1,)
type print = (arg1: number, arg2?: string) => void

let fn1: print = function (arg1: number, arg2?: string) {
    console.log(arg1)
    if (arg2 !== undefined) {
        console.log(arg2)
    }
}
fn1(11)
