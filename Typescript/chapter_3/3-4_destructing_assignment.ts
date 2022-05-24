interface IPerson {
    name: string
    age: number
}
interface ICompany {
    name: string
    age: number
    etc?: string
    money?: number
}

// these are structured
let hamyoonseok: IPerson = { name: "yoonseok", age: 27 },
    kimjuman: IPerson = { name: "juman", age: 27 }

let apple: ICompany = { name: "apple", age: 24 },
    amazon: ICompany = { name: "amazon", age: 22, etc: "nasdqu", money: 100000 }

// destructuring assignment
var { name, age } = hamyoonseok
console.log(name, age);
var { name, age, ...detail } = amazon
console.log(name, age, detail)

// spread operator

let cord: object = { ...[1, 2],...{ x:1, y:2}}
console.log(cord)
