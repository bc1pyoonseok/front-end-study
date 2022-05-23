let person = { name: "Jane", age: 22 }
let { name, age } = person

console.log(person.name)
console.log(name)

let array = [1, 2, 3, 4]

let [head, ...rest] = array

console.log(head, array)

let a = 1
let b = 2;
[a, b] = [b, a]
console.log(a, b)
const add = (a: number, b: number): number => {
    return a + b
}
console.log(add(a, b))