// type-alias
type genericType1 = <T>(a: T) => T
type genericType2 = <T, Q>(a: T, b: Q) => void


const generic: genericType1 = <T>(a: T): T => a
console.log(
    generic<string>('hi'),
    generic<number>(19),
    generic<boolean>(true))

const generic2: genericType2 = <T, Q>(a: T, b: Q): void => {
    console.log(a, b)
}

generic2<string, number>("haha", 12)
