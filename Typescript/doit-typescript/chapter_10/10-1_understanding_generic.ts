interface Ivalue<T> {
    value: T
}

let numberValue: Ivalue<number> = { value: 10 }

class genericValuable<T> implements Ivalue<T> {
    constructor(public value: T) { }
}
const a = new genericValuable<string>("gonogo")
console.log(a)

const printValue = <T>(o: Ivalue<T>): void => {
    console.log(o.value)
}
printValue<string>(a)
printValue<number>(new genericValuable<number>(11))
printValue(new genericValuable<boolean>(true))
