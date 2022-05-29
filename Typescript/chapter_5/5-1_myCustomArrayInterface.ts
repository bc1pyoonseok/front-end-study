type TArrayLength = (array: any[]) => number
type TIsEmptyArray = (array: any[]) => boolean

export const ArrayLength: TArrayLength = <T>(array: T[]): number => array.length
export const IsEmptyArray: TIsEmptyArray = <T>(array: T[]): boolean => ArrayLength(array) == 0


let myarray: any[] = new Array()
let emptyArray: any[] = new Array()

myarray[0] = [12]

myarray[1] = { name: "ya" }

console.log(ArrayLength(myarray))
console.log(IsEmptyArray(myarray))

console.log(IsEmptyArray(emptyArray))
for (let i = 0; i < 2; i++)
    myarray.pop()

console.log(IsEmptyArray([1]))
console.log(IsEmptyArray([]))
console.log(IsEmptyArray(myarray))

const identity = <T>(n: T): T => n
console.log(identity(true))

class Stack<T> {
    data: Array<T> = new Array()
    push(value: T): void {
        this.data.push(value)
    }
    pop(): T {
        let result = this.data[this.data.length-1]
        this.data.pop()
        return result
    }
    print(): void {
        for (let value of this.data)
            console.log(value)
    }
}
let numberStack = new Stack<number>()
let everyStack = new Stack()

numberStack.push(11)
numberStack.push(12)
numberStack.push(10)
console.log(numberStack.pop())
numberStack.print()


