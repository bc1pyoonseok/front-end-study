// type-alias
type genericType1 = <T>(a: T) => T
type genericType2 = <T, Q>(a: T, b: Q) => void

type MapFunc1<T, R> = (a: T) => R
type MapFunc2 = <T, R>(a: T) => R

type sameToSame1<T> = MapFunc1<T, T>
type sameToSame2<T> = MapFunc1<T, T>

const mapfun1: sameToSame1<number> = (a: number): number => a * a
const mapfun2: sameToSame2<number> = (a: number): number => a * a
const mapfun3: sameToSame1<number[]> = (a: number[]): number[] => a.map(value => value * value)


console.log(mapfun3([1, 2, 3, 4]))
console.log(mapfun1(3), mapfun2(4))
const generic: genericType1 = <T>(a: T): T => a
console.log(
    generic<string>('hi'),
    generic<number>(19),
    generic<boolean>(true))

const generic2: genericType2 = <T, Q>(a: T, b: Q): void => {
    console.log(a, b)
}

generic2<string, number>("haha", 12)
