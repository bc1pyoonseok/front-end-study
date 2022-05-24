interface ICar {
    name: string
    speed: number
    printer?: Function

}
// Car1 and Car2 is same.
class Car1 {
    name: string
    speed: number
    printer: Function
    constructor(name: string, speed: number, printer: Function) {
        this.name = name
        this.speed = speed
        this.printer = printer
    }
}

class Car2 implements ICar {
    constructor(public name: string, public speed: number, public printer: Function) { }
}

let car1: Car1 = new Car1('rambo', 100000, () => console.log(car1))
let car2: Car2 = new Car2('proche', 100000, () => console.log(car2))

car1.printer()
car2.printer()

// abstract class

abstract class Car {
    constructor(public name: string, public speed: number) { }
}
class SuperCar extends Car {
    boost: Function
    static typeOfCar = "SuperCar"
    static parentClass = () => console.log(Car)
    constructor(name: string, speed: number) {
        super(name, speed)
        this.boost = () => this.speed *= 2
    }
}
let myCar = new SuperCar('proche', 10000)
console.log(SuperCar.typeOfCar)
SuperCar.parentClass()

myCar.boost()
myCar.boost()
myCar.boost()
console.log(myCar)