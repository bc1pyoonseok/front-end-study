let person1: any = {
  name: "yoonseok",
};
let person2: any = {
  name: "yoonseok",
};
console.log(person1 == person2);
console.log(person1 === person2);
person1 = person2;
console.log(person1 == person2);
console.log(person1 === person2);
person1 = {};
console.log(person1, person2);
// page 153
