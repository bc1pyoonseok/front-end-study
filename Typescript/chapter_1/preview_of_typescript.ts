let person = { name: "Jane", age: 22 }
let { name, age } = person

console.log(person.name)
console.log(name)

let array = [1, 2, 3, 4]

let [head, ...rest] = array

console.log(head, array)

let a = 1
let b = 2;
// in typescript. you have to put ; before (, [, `, +, -, / these characters
// fyi :https://www.clien.net/service/board/cm_app/14670849
[a, b] = [b, a]
console.log(a, b)
// arrow function
const add = (a: number, b: number): number => {
    return a + b
}
console.log(add(a, b))

// class
abstract class Animal {
    constructor(public name?: string, public age?: number) { }
    abstract say(): string
}
class Cat extends Animal {
    say() { return `${age} meow` }
}
class Dog extends Animal {
    say() { return `${this.name} bark` }
}
let animals: Animal[] = [new Cat("street", 11), new Dog('sigoal', 10)]
console.log(animals.map(a => a.say()))

// yield (generator)
function* gen() {
    yield ['hi', 1, 2, 3, 4]
}

for (let value of gen()) {
    console.log(value)
}

//Promise and async/await
let get = async () => {
    let values = []
    for (let i = 0; i < 4; i++) {
        values.push(await Promise.resolve(i))
    }
    return values
}
get().then(values => console.log(values))