

let foo: any = { name: "haha" }
let myData = new Set([foo])


console.log(myData)
foo = null
console.log(myData)
console.log([...myData][0])
console.log('hahaha')

console.log(" this is it")
