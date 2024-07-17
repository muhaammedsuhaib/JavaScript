// Function Declaration 
function a(){
    console.log(`Im Functiion Declaration `);
}
//Function Expresion 
const b= function(){
    console.log(`Im Function Expresion`);
}
// arrowFunctiion 
const c =()=>{
    console.log(`Im Arrow Function `);
}
// Advanced Function 

function outer(){
    let count=0;
    return function(){
        count ++;
        return count;
    }
}

const counter= outer()
console.log(counter()) //1
console.log(counter()) //2

// Call Back Function 

function fetchDate(callback){
    setTimeout(()=>{
        callback("Data collectd!");
    },1000)
}


fetchDate((data)=>{
    console.log(data);
});


// Higher-Order Functions
// Functions as Arguments and Return Values: Functions can be passed as arguments to other functions and returned from functions.

function greet(name) {
    return `Hello, ${name}`;
  }
  function logGreeting(fn, name) {
    console.log(fn(name));
  }
  logGreeting(greet, 'John'); // 'Hello, John'
  
  function createMultiplier(multiplier) {
    return function(number) {
      return number * multiplier;
    };
  }
  const double = createMultiplier(2);
  const triple = createMultiplier(3);
  console.log(double(4)); // 8
  console.log(triple(4)); // 12
  