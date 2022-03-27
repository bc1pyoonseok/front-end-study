// Array

const student = ['yoonseok','javascript'];

student[1] = 'c++';

console.log(student);

// push
// pop
// unshift
// shif

student.unshift('oh','my',1);
console.log(student);
student.shift();
console.log(student);

for (let i = 0;i<student.length;i++){
  console.log(student[i]);
}

for (let i of student) {
  console.log(i);
}

for (let i of student) {
  console.log(i);
}

const superman = {
  name:'yoonseok',
  age:27,
};

// use in when iterate through object keys
for (let key in superman) {
  console.log(key);
}
