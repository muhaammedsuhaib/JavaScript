let num = 10; // Number
let str = 'Hello'; // String
let bool = true; // Boolean
let nothing = null; // Null
let notDefined; // Undefined
let sym = Symbol('symbol'); // Symbol
let bigInt = 123n; // BigInt
console.log(typeof num); // 'number'
console.log(typeof str); // 'string'
console.log(typeof bool); // 'boolean'
console.log(typeof nothing); // 'object'
console.log(typeof notDefined); // 'undefined'
console.log(typeof sym); // 'symbol'
console.log(typeof bigInt); // 'bigint'


// Objects 

let person = {
    name: 'John',
    age: 30,
    greet: function() {
      console.log('Hello ' + this.name);
    }
  };
  console.log(person.name); // 'John'
  console.log(person['age']); // 30
  person.greet(); // 'Hello John'




//   Implicit Coercion


console.log('5' + 5); // '55' (string concatenation)
console.log('5' - 3); // 2 (string to number)
console.log(true + 1); // 2 (boolean to number)
console.log(false + 1); // 1 (boolean to number)


// Explicit Conversion 

console.log(Number('5')); // 5
console.log(String(123)); // '123'
console.log(Boolean(0)); // false
console.log(parseInt('10px')); // 10
console.log(parseFloat('10.5px')); // 10.5

  