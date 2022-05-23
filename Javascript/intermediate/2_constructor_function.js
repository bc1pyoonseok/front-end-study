let user = {
  name: "yoonseok",
  age: 27,
};
// but I want to use user as a form

function User(name, age) {
  // this = {}
  this.name = name;
  this.age = age;
  // return this
}

// above commented line is executed when using new

let user1 = new User("yoonseok", 27);
let user2 = new User("satoshi", "??");

console.log(user1, user2);

function UserwithName(name, age) {
  this.name = name;
  this.age = age;
  this.sayName = () => {
    console.log(`my name is ${this.name}`);
  };
  this.sayAge = function () {
    console.log(`my age is ${this.age}`);
  };
}

const yoonseok = new UserwithName("yoonseok", 27);
yoonseok.sayName();
yoonseok.sayAge();
