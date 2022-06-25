interface Person {
    name: string
    age: number
}

export function makePerson(name: string, age: number): Person {
    return { name: name, age: age }
}
export function testMakePerson() {
    console.log(makePerson('yoonseok', 27))
}
