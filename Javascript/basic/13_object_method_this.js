const superman = {
  name:"yoonseok",
  age:27,
  fly:function(){
    console.log('fly');
  },
  info(){
    console.log(this.name);
  }
}

console.log(superman.fly)
superman.fly()
superman['fly']()
superman.info()

// arrow function does not have it's own this
// when you use this in arrow function,
// it gets this value from outside
// so when you write object method, don't write with arrow function
