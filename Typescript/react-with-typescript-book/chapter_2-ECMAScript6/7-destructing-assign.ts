interface ICoffee {
    name: string
    price: number
}
class Coffee implements ICoffee {
    constructor(public name: string, public price: number) { }
}

const { name, price } = new Coffee("americano", 30)

console.log(name, price)

const { name: myName, price: MyPrice } = new Coffee("java chip americano", 100)

console.log(myName, MyPrice)