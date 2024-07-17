// Default Parameters: Provide default values for parameters.

function greet(name = 'Guest') {
    console.log(`Hello, ${name}`);
  }
  greet(); // 'Hello, Guest'
  greet('John'); // 'Hello, John'

  
//   Rest Parameters: Gather multiple arguments into an array.

function sum(...numbers) {
    console.log(numbers);
    return numbers.reduce((total, num) => total + num, 0);
  }
  console.log(sum(1, 2, 3, 4)); // 10

//   Spread Operator: Spread elements of an array.

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log(combined); // [1, 2, 3, 4, 5, 6]
