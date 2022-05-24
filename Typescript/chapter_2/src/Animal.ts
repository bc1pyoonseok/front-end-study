import IAnimal from "./IAnimal"
const MAX_AGE = 100

export default class Animal implements IAnimal {
    constructor(public name, public age) { }
}

export const makeRandomNumber = (max: number = MAX_AGE): number => {
    return Math.ceil(Math.random() * max)
}

export const makeAnimal = (name: string, age: number = makeRandomNumber()): IAnimal => {
    return { name: name, age: age }
}
