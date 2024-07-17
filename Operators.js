let x = 10;
let y = 5;
console.log(x + y); // 15
console.log(x - y); // 5
console.log(x * y); // 50
console.log(x / y); // 2
console.log(x % y); // 0
x++;
console.log(x); // 11
y--;
console.log(y); // 4


// Comparison Operators

let a = 10;
let b = '10';
console.log(a == b); // true (loose equality)
console.log(a === b); // false (strict equality)
console.log(a != b); // false
console.log(a !== b); // true
console.log(a > 5); // true
console.log(a < 5); // false
console.log(a >= 10); // true
console.log(a <= 10); // true


// Bitwise Operators 

let z = 5; // 0101 in binary
let f = 3; // 0011 in binary
console.log(z & f); // 1 (0001 in binary)
console.log(z | f); // 7 (0111 in binary)
console.log(z ^ f); // 6 (0110 in binary)
console.log(~z); // -6 (invert all bits)
console.log(z << 1); // 10 (1010 in binary)
console.log(z >> 1); // 2 (0010 in binary)


// Assignment Operators


let ac = 10;
ac += 5; // ac = ac + 5
console.log(ac); // 15
ac -= 3; // ac = ac - 3
console.log(ac); // 12
ac *= 2; // ac = ac * 2
console.log(ac); // 24
ac /= 4; // ac = ac / 4
console.log(ac); // 6
ac %= 2; // ac = ac % 2
console.log(ac); // 0

// Ternary Operator
let age=18;
let Canvot =(age>=18)?'Yes':'No';
console.log(Canvot);
