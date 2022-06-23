class Bird {
    fly(): string {
        return "Im flying"
    }
}

class Fish {
    swim(): string {
        return "Im swimming"
    }
}

type animal = Fish | Bird
const activate = (o: animal): void => {
    if (o instanceof Bird) {
        // type guard activated
        // o is always Bird
        console.log((o as Bird).fly())
        console.log((<Bird>o).fly())
        console.log(o.fly())
    }
    else if (o instanceof Fish) {
        // type guard activated
        // o  is always Fish
        console.log((o as Fish).swim())
        console.log((<Fish>o).swim())
        console.log(o.swim())
    }
}
activate(new Bird())
activate(new Fish())

// custom type guard by is operator

const isFish = (animal: animal): animal is Fish => {
    return animal instanceof Fish
}
const isBird = (animal: animal): animal is Bird => {
    return animal instanceof Bird
}

console.log("");

[new Fish(), new Bird].forEach((value) => {
    if (isFish(value)) {
        console.log(value.swim())
    }
    else if (isBird(value)) {
        console.log(value.fly())
    }
})