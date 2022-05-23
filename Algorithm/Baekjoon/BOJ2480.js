const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
input = input[0];
input = input.split(' ').map((item) => +item);

const solution = input => {
	const array = [
					input[0] === input[1],
					input[0] === input[2],
              		input[1] === input[2],
				  ]
	if (array[0] && array[1]) {
		return 10000+input[0]*1000;
	}
	if (array[0]) {
		return 1000+input[1]*100;
	}
	if (array[1]) {
		return 1000+input[2]*100;
	}
	if (array[2]) {
		return 1000+input[2]*100;
	}
	return Math.max(...input)*100;
}
let answer = solution(input);
console.log(answer)
