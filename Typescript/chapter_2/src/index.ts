import { testMakePerson } from "./makePerson";
import Animal, { makeAnimal } from "./Animal";
import Chance from "chance";
import * as R from "ramda";

const function_executor = (callback: Function) => {
    callback()
}
function_executor(testMakePerson)

const testMakeAnimal = (): void => {
    let dog: Animal = makeAnimal('dog')
    let cat: Animal = makeAnimal('cat')
    let cow: Animal = makeAnimal('cow')

    console.log(cat, dog, cow)
}
const chance = new Chance()

let animals: Animal[] = R.range(0, 10)
    .map((n: number) => new Animal(chance.name(), n))
console.log(animals)
console.log(R.range(0, 2))
