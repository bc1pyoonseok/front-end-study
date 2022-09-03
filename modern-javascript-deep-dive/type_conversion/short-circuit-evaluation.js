let animal = "Cat" && "Dog" && "SUPERMAN";
// evaluation stop at when it is able to inference its value
console.log(animal);
animal = "Cat" || "Dog" || ("ㅋㅋ" && "이건 스킵해도 ㄱㅊ은 거 ㅋㅋ");
console.log(animal);

animal = ("Cat" && "Dog") || ("ㅋㅋ" && "이건 스킵해도 ㄱㅊ은 거 ㅋㅋ");
console.log(animal);

// short-circuit stop evalutaion when the result is fixed.
// it retruns the last value of evalutaion it does not convert to boolean type.

let get_message = (recived) => recived && "I got it";
console.log(get_message(true), get_message(false));

let message_not_found = (recived) => recived || "message is unavailable";
console.log(message_not_found(true), message_not_found(false));

let is_message_is_recived = (recived) => (recived ? "yes" : "no");
console.log(is_message_is_recived(true), is_message_is_recived(false));

// usage
// 1. before refer to object's property, check if object is null or undefined
for (let null_object of [null, undefined]) {
  console.log(null_object && null_object.value);
  console.log(null_object?.value);
}
// 2. set default value in argument
const getStringLength = (str) => {
  str = str || "";
  return str.length;
};
console.log(
  getStringLength(),
  getStringLength(null),
  getStringLength("yoonseok")
);
const getStringLengthES6 = (str = "") => {
  return str?.length;
};
console.log(
  getStringLengthES6(),
  getStringLengthES6(null),
  getStringLengthES6("yoonseok")
);
// optional chaining operator
var elem = {
  elem2: {
    elem3: undefined,
  },
};
console.log(elem.value);
console.log(elem.elem2.elem3?.value);

// exception
let str = "";
// "" && 0 >> ""
let length = str && str.length;
// ""
console.log(length);

// nullish coalescing '??'
// if left is null or undefined, return right if not, return left
let value_with_nullish1 = false ?? "which one";
let value_with_nullish2 = NaN ?? "which one";

let value_with_or = "" || "which one";
console.log(
  "" ?? "which one",
  value_with_nullish1,
  value_with_nullish2,
  value_with_or
);
