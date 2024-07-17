// var: Function-scoped, can be redeclared, hoisted 

var x = 10;
var x = 20; // redeclaration allowed
console.log(x); // 20
function testVar() {
  var y = 30;
  if (true) {
    var y = 40; // same variable
    console.log(y); // 40
  }
  console.log(y); // 40
}
testVar();


// let: Block-scoped, cannot be redeclared, not hoisted. 

let x = 10;
// let x = 20; // SyntaxError: Identifier 'x' has already been declared
console.log(x); // 10
function testLet() {
  let y = 30;
  if (true) {
    let y = 40; // different variable
    console.log(y); // 40
  }
  console.log(y); // 30
}
testLet();


// const: Block-scoped, cannot be redeclared or reassigned. 

const x = 10;
// x = 20; // TypeError: Assignment to constant variable
console.log(x); // 10
const obj = { a: 1 };
obj.a = 2; // allowed
console.log(obj.a); // 2
// obj = { b: 1 }; // TypeError: Assignment to constant variable

 