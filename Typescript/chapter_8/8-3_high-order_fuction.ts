type FirstOrderType<T, R> = (a: T) => R
type SecondOrderType<Q, T, R> = (a: Q) => FirstOrderType<T, R>

const func1: SecondOrderType<string, number, string[]> = (a: string): FirstOrderType<number, string[]> => {
    const func2: FirstOrderType<number, string[]> = (b: number): string[] => {
        return [JSON.stringify(parseInt(a) + b)]
    }
    return func2
}
let a = func1('11')
console.log(a(20))

// closure
type innerType<T, Q> = (a: T) => Q
type outterType<T, Q> = (a: Q) => innerType<T, Q>
const add: outterType<string, number> = (x: number): innerType<string, number> => {
    const inner_add: innerType<string, number> = (y: string): number => {
        return x + parseInt(y)
    }
    return inner_add
}
let b = add(13)
console.log(b('12'))

const makeNames = (): () => string => {
    const names = ['yoonseok', 'cherry', 'lil uzi vert', 'beenzino']
    let index = 0
    return (): string => {
        if (index === names.length) {
            index = 0
        }
        return names[index++]
    }
}
const makeName1 = (): () => string => makeNames()
const makeName2: () => string = makeNames()
let c = makeNames()
for (let i = 0; i < 10; i++) {
    console.log(c())
}