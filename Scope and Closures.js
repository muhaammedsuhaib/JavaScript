// Function Scope: Variables declared inside a function are local to that function.
function testScope() {
    var x = 10;
    let y = 20;
    const z = 30;
    console.log(x, y, z); // 10 20 30
  }
  testScope();
  // console.log(x, y, z); // ReferenceError: x is not defined



//   Lexical Scope: Functions can access variables from the outer scope.

function outer() {
    let x = 10;
    function inner() {
      console.log(x); // 10
    }
    inner();
  }
  outer();
  
  
  // Closures: Functions retain access to variables from their outer scope even after the outer function has returned.
  
  
  function createCounter() {
    let count = 0;
    return function() {
      count++;
      console.log(count);
    };
  }
  const counter = createCounter();
  counter(); // 1
  counter(); // 2
  counter(); // 3
  