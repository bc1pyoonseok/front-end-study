// types of typescript
let num: number = 1.3
let flag: boolean = false
let randomString: string = "wow"
let Person: object = { name: 'yoonseok', age: 27 }
let types_1: [number, boolean, string, object] = [num, flag, randomString, Person]
let types_2: any[] = [num, flag, randomString, Person]
let types_list: any[] = [types_1, types_2]

for (let types of types_list) {
    for (let value of types) {
        console.log(`type: ${typeof value}\nvalue: ${JSON.stringify(value)}`)
    }
}

// num = 'num is number so this line is not gonna work'
num = 1
let anything: any = 2

anything = 'this is any type so this line has no problem'
console.log(anything)