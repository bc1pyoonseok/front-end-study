// switch
const stack = {
  "hamyoonseok" : "front-end",
  "bear" : "robotics",
};

console.log(stack["hamyoonseok"]);
console.log(stack.hamyoonseok);

switch (stack.bear) {
  case 'front-end':
    console.log("front end engineer");
    break;
  case "robotics":
    console.log('welcome to bear');
  default :
    console.log("we make servi");
}
