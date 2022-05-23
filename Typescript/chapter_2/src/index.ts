import { testMakePerson } from "./makePerson";


const function_executor = (callback: Function) => {
    callback()
}
function_executor(testMakePerson)
