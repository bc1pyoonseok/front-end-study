console.log(score);

// it seems like Reference error will ocur.
// but the result is undefined.
// this is because variable assign is take place before runtime.
// first variable declare is executed before runtime
// second, other codes are executed from the top to bottom
var score: any;
