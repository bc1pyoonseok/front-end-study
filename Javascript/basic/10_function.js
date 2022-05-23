// function
function nameMaker (name) {
	let newName = name || 'noName';
	return `Hi my name is ${newName}` + '!' + 10;
}

function nameMakerWithDefaultValue (name = 'noName') {
	let newName = name;
	return `Hi my name is ${newName}` + '!' + 10;
}

const myName = nameMaker('yoonseok');
const herName = nameMaker('Jane');
const noName = nameMaker();
const noNameDefault = nameMakerWithDefaultValue();

console.log(myName);
console.log(herName);
console.log(noName);
console.log(noNameDefault);

function noReturn () {
	return
}

console.log(noReturn())
 
