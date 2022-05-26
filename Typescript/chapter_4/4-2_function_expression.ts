// actually, function is Fuction's instance

let add = new Function('a', 'b', 'return a + b')
console.log(add(1, 2))

// this is called function expression
// function (a: number, b: number) ...
add = function (a: number, b: number): number {
    return a + b
}
console.log(add(1, 2))