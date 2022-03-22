const superman = {
  name:'yoonseok',
  age:27,
}
superman.major = 'cs';
console.log(superman);


// access
console.log(
  superman.name,
  superman['name'],
);
// add item
superman.job = 'developer';
superman['other_job'] = 'invester';

// erase
delete superman.other_job;
delete superman['job'];
console.log(superman);

// object property
const price = 20;
const type = 20;

const car = {
  price,
  type,
}

console.log(
  car,
  'price' in car,
);

for (let key in superman) {
  console.log(
    key,
    superman[key],
  );
}

const makeObject = (name, age) => {
  return {
    name,
    age,
  }
};

const yoonseok = makeObject('yoonseok',27);
console.log(yoonseok, 'name' in yoonseok);

const me = {
  name:'haha',
}

const isAdult = me => {
  if ('age' in me && me.age >= 20) {
    return true;
  }
  return false;
}

console.log(isAdult(me));
