type ReturnVoid = () => void

export class SimpleClass1 {
    value: number = 10
    method: ReturnVoid = () => { console.log(this.value) }
}
let a = new SimpleClass1
a.method()

// method shorthand
export class SimpleClass2 {
    constructor(public value: number) { }
    method(): void {
        console.log(this.value)
    }
}
let b = new SimpleClass2(20)
b.method()

// static method
export class StaticTest {
    static value: string = "static value"
    static whoAreYou(): void {
        console.log(`value: ${this.value}\nthis:${this}`)
    }
}

StaticTest.whoAreYou()

// method chain
export class calculator {
    constructor(public value: number) { }
    add(value: number): calculator {
        this.value += value
        return this
    }
    multiply(value: number): calculator {
        this.value *= value
        return this
    }
}

let cal = new calculator(-5)
cal.add(10).add(20).add(30).multiply(2)
console.log(cal)
