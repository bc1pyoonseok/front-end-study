// tuple is any[]

let tuple: any[] = ['yoonseok', 27, true]
type functionResult = [boolean, string]

const ServerAnswer = (): functionResult => {
    return [true, 'yoonseok']
}
let [results, message] = ServerAnswer()

console.log(results, message)
