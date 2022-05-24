let person: object = { name: "yoonseok", age: 17 }

console.log(Object.keys(person))

// console.log(person.name)
// above code has an error 
// because person is object type and it does not has 'name' property 
// so you have to convert type
console.log((<{ name: string }>person).name)
console.log((person as { name: string }).name)
