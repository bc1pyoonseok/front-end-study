// primitive type is read only
// which means immutable value
let score = 80;
// first score = undefine in 0x001
// then score = 80 in 0x004
score = 100;
// score is assigned in other place 0x009 ..
// string is also primitive type.
// but also array-like object.
let my_name = "yoonseok";

// this is not gonna work.
// my_name[0] = "Y";

// it works same is python! haha
