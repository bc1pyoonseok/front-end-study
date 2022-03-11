const name = "tom";
let age = 29;

const isAdult = age => {
  if (age > 19) {
    return true;
  } else {
      return false;
  }
}

if (isAdult(age) && name === "tom" ) {
    console.log('Hi tom');
}
if (isAdult(age) || name === "mike" ) {
    console.log('he is adult');
}

age = 10

if (!isAdult(age)) {
  console.log('child')
}

// note that && has a higher piroity than ||
