const add = (x: number): Function => (y: number): number => x + y

console.log(add(1)(2))
let a = add(10)
console.log(a(20), a(100))
