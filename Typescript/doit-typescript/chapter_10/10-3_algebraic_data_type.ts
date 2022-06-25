// union type
// type must be number or string
type numberOrString = number | string

let ns: numberOrString = 'sd'
ns = 1

// intersection type
// type must contain T and U
const mergeObject = <T, U>(a: T, b: U): T & U => {
    return { ...a, ...b }
}

// example
interface circle {
    tag: "circle"
    radious: number
}
interface rectangle {
    tag: "rectangle"
    width: number
    height: number
}
interface rectangle {
    tag: "rectangle"
    width: number
    height: number
}
interface square {
    tag: "square"
    size: number
}
type Shape = rectangle | circle | square

const isCircle = (shape: Shape): shape is circle => {
    return shape.tag === "circle"
}

const isRectangle = (shape: Shape): shape is rectangle => {
    return shape.tag === "rectangle"
}

const isSquare = (shape: Shape): shape is square => {
    return shape.tag === "square"
}
const calArea = (shape: Shape) => {
    if (isRectangle(shape)) {
        return shape.width * shape.height
    }
    else if (isCircle(shape)) {
        return Math.PI * shape.radious * shape.radious
    }
    else if (isSquare(shape)) {
        return shape.size
    }
}
console.log(
    calArea({ tag: "square", size: 10 }),
    calArea({ tag: "rectangle", width: 10, height: 20 }),
    calArea({ tag: "circle", radious: 9 }))
