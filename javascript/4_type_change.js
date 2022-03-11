const MathScore = "40";
const EnglishScore = "50";

const result = (MathScore + EnglishScore) / 2;
// 2025
console.log(result)

// change into string
console.log(String(89))
console.log(String(undefined))
console.log(String(Object))

// change into Number
console.log(Number("123123"))
console.log(Number("ewfewfw")) //NaN
console.log(Number("123123.123"))
console.log(Number(true)) // 1
console.log(Number(false)) // 0
console.log(Number(null)) // 0
console.log(Number(undefined)) // NaN
// change into Boolean
// 0 , "" , null ,NaN , undefined => false
console.log(
  Boolean(0),
  Boolean(""),
  Boolean(null),
  Boolean(NaN),
  Boolean(undefined),
  Boolean(Object), // true
)
