type U = string | number

type myType<T extends U> = T | boolean

let typetest: myType<number> = true

type newType<T> = T extends U ? T : boolean

let typetest2: newType<number[]> = true

interface testType<T> {
    value: T
}

const printTestType = <Q, T extends testType<Q>>(o: T) => {
    console.log(o.value)
}
const obj = { name: "yoonseok", age: 27, orangePilledDate: "2021-07" }

const pick = <T,K extends keyof T>(obj: T, keys: K[]) => {
    return keys.map((key) => ({ [key]: obj[key] }))
        .reduce((result, value) => ({ ...result, ...value }), {})
}
console.log(pick(obj, ["name", "age"]))
// console.log(pick(obj, ["nam", "age"])) //error
