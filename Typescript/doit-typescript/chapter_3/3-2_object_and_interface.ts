let o: object = {
    name: 'yoonseok'
}
o = { thisisgood: "because o's type is object" }
console.log(o)

interface IPerson {
    name: string
    age: number
    etc?: string
}
class Person implements IPerson {
    constructor(public name: string, public age: number) { }
}
let a: Person = new Person('me', 11)
let b: IPerson = new Person('me', 11)
let c: IPerson = { name: "satoshi", age: 10, etc: "bitcoin inventor" }
console.log(a, b, c)
// anonymous interface
let d: {
    name: string
    age: number
} = new Person('you', 100)

const printPerson = (person: { name: string, age: number }): void => {
    console.log(person)
}
printPerson(d)
