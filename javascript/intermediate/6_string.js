let introduce = "My name Is yoonseok";
introduce[0] = "h";

console.log(introduce);

console.log(introduce.toUpperCase());
console.log(introduce);
console.log(introduce.toUpperCase().toLowerCase());
console.log(introduce.indexOf("yoonseok"));

console.log(introduce.indexOf("bitcoin"));

let alphabets = "0123456789";

// str.slice(n,m) n is start index m is end index
console.log(alphabets.slice(0, 5));
console.log(alphabets.slice(5));
console.log(alphabets.slice(3, -2));
