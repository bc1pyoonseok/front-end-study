import { StringMappingType } from "typescript"

let MyFirstArray: number[] = new Array(1, 2, 3, 4, 5)
let MySecondArray: Array<number> = new Array(1, 2, 3, 4, 5)
let array: Array<Array<number>> = [MyFirstArray, MySecondArray]

for (let i = 6; i < 10; i++) {
    MyFirstArray.push(i)
    MySecondArray.push(i)

}
for (let i = 0; i > -5; i--) {
    MyFirstArray.unshift(i)
    MySecondArray.unshift(i)
}
console.log(array)

for (let arr of array) {
    arr.shift()
    arr.pop()
}
console.log(array)

let unmodifiableArray: readonly number[] = new Array(1, 2, 3, 4, 5)

console.log(unmodifiableArray)

// array deter
console.log(Array.isArray(array))

interface IPerson {
    name: string
    age: number
}
let MyThirdArray: IPerson[] = new Array()
MyThirdArray.push({ name: 'yoonseok', age: 20 })
console.log(MyThirdArray)

// in Typescript, in order to change certain contents of string,
// you have to convert string into array

let mystring1 = 'apple'
let mystring2 = 'apple banana pineapple'

let a = mystring1.split('')
console.log(a)
let b = mystring2.split(" ")
console.log(b)

// convert array into string again
console.log(a.join(""))
console.log(b.join(" "))

// destructuring assign
let [first, second, third, ...rest] = MyFirstArray
console.log(first, second, third, rest)

// for ... in
// for ... in , iterate through index
class Person implements IPerson {
    constructor(public name: string, public age: number) { }
}

let yoonseok: Person = new Person('yoonseok', 27)
for (let index in yoonseok) {
    console.log(index)
}
for (let index in MyFirstArray.slice(0,4)){
    console.log(index)
}

// for ... of
// for ... of , iterate through array's value
for (let value of MyFirstArray.slice(0,4)) {
    console.log(value)
}
for (let value of ['a','b','c']) {
    console.log(value)
}