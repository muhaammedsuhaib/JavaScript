// Variable : Used to store data values.

// var, let, and const are used to declare variables.

let name="Muhammed suhaib";
const place="Malappuram, Kerala";
var position="Fullstack developer";

console.log(`My name is ${name}. I'm from ${place}. My position is ${position}.`);



// Array

let cars=["Porsche 911","Toyota GR86","Ferrari"];

console.log(cars);
console.log(cars[2]);

// Object

let person={
    name:"Suhaib",
    age:34
}

console.log(person.name);
console.log(person.age);

// Function

function greet(name){
    return "Hello, "+name;
}

console.log(greet("suhaib"));

// If-Else 

let age = 18;

if ( age >= 18) {
    console.log("Adult");
} else {
    console.log("Not an adult");
}

// For Loop 

for(let i=0; i<=10;i++){
    console.log(i);
}

//For Loop Array

const Bikes=["BMW M 1000 RR" ,"Kawasaki Z H2","Ducati Panigale V2"];

for (let i = 0; i < Bikes.length; i++) {
     console.log(Bikes[i]);    
}

// Sum of functions 

function add(a,b){
    return a+b;
}

console.log(add(10,78));




// Advanced JavaScript Concepts:
// Closures and Scope: Understanding how JavaScript manages variable scope and closures.
// Prototypes and Inheritance: Exploring JavaScript's prototypal inheritance model.
// Asynchronous JavaScript: Learning about asynchronous programming using callbacks, promises, and async/await.
// Functional Programming: Embracing functional programming concepts like higher-order functions and immutability.
// 2. Web Development Frameworks and Libraries:
// React.js: A popular library for building user interfaces.
// Angular: A comprehensive framework maintained by Google for building web, mobile, or desktop applications.
// Vue.js: A progressive JavaScript framework for building interactive web interfaces.
// 3. Server-Side JavaScript:
// Node.js: A JavaScript runtime built on Chrome's V8 JavaScript engine, allowing you to run JavaScript on the server side.
// Express.js: A minimalist web application framework for Node.js, ideal for building APIs and web applications.
// 4. Data Visualization:
// D3.js: A powerful library for creating interactive data visualizations in the browser.
// Chart.js: A simple yet flexible JavaScript charting library for designers and developers.
// 5. Full-Stack Development:
// MongoDB: A popular NoSQL database often used with Node.js.
// MySQL or PostgreSQL: Relational databases commonly used in web development.
// GraphQL: A query language for APIs and runtime for executing those queries.
// 6. Testing and Debugging:
// Unit Testing: Using tools like Jest or Mocha for testing individual units of code.
// Debugging: Learning techniques for debugging JavaScript code effectively.
// 7. Project-Based Learning:
// Build Projects: Start building your own projects to apply what you've learned and gain practical experience.
// Contribute to Open Source: Find open-source projects on GitHub and contribute to them to enhance your skills and collaborate with others.
// 8. Continuous Learning:
// Stay Updated: JavaScript evolves rapidly, so keep up with the latest trends, updates, and best practices.
// Community Engagement: Join online communities, forums, or attend meetups to learn from others and share your knowledge.
// Choose the path that aligns with your interests and goals, and don't hesitate to explore different areas of JavaScript to broaden your understanding and skills!



// call Back Function


function callbackFunction(callback){

    setTimeout(()=>{
        const data= 'callback funton worked';
        callback(data);
    })
}

callbackFunction((data)=>{
    console.log(data);
});


// Promise 

function promisesFuction(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const data = 'promise data called';
            resolve(data);
        },1000)
    });
}

promisesFuction().then((data)=>{
console.log(data);
}).catch((error)=>{
    console.error(error);
})


async function asynchAwaitFunction(){

return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const data ='Async await function working';
     resolve(data);
    },1000)
})
}
asynchAwaitFunction()





//Function scoped & Block scoped


function abc(){
    if(true){
        var a ='Im a'; // Function scope
        let b ='Im b'; // Global scope
        const c ='Im c'; // Global scope

        console.log(a);
        console.log(b);
        console.log(c);
    }
    console.log(a);  //Functon scoped function acces inside block
}

// console.log(a);   Not acces outside function var,let,cost
abc()



// Default Function Parameter 

function dfunction (user = 'Gust'){
    console.log(`Welcome ${user}`);
}

dfunction();
dfunction('suhaib')


// Anonymouse Function 

let AnonymouseFunction = function (){
    console.log('Im Anonymouse Function');
}

AnonymouseFunction();



// Arrow Function 

let arrowFunctiion = ()=> console.log('Im a arrow function');

arrowFunctiion()


// Arrow Functiion in multiple statemnt 

let checknumber = (num)=>{
if(0<num){
    console.log('Number is  postive');
}else{
    console.log('Number is negative');
}
}

checknumber(-199);



// Fuctory functions  

function createPerson(name,age){
return {
    name:name,
    age:age,
    greet:function(){
        console.log(`Hello , my name is ${this.name} and I am ${this.age} year old.`);
    }
}
}

const person1 =createPerson('suhaib',20);
const person2 = createPerson('Ronaldo',49);
const person3 = createPerson('Messi',39);

person1.greet();
person2.greet();
person3.greet();


// Constructor 

function User (name){
    this.name=name
}

var user1 = new User('anu');
var user2 = new User('binu');
console.log(user1);
console.log(user2);




// Evet loop 

// Javascript is single thered languge 

// JS engine V8 google 

// 1.Stack 
// 2.Heap 
// 3.Message queue 

function abc(){
    console.log('abc');
}

function def(){
    console.log('def');
}
function ggg(){
    abc();
    def();

}

ggg();

// Before stack 
// stack : ggg(),abc(),def();
// After Stack 
// stack : 




function greet() {
    console.log('Hello ' + this.name);
  }
  
  const user = { name: 'Muhammed Suhaib' };
  greet.call(user); // Output: Hello Muhammed Suhaib


// Get min value 

function getminValue(arr){
    console.log(Math.min.apply(null,arr))
}
getminValue([100,26,73,38]);




// call apply bind 


// call 
function greet (){
    console.log(`hi ${this.name}`)
}

const person0={name:'Muhammed suhaib'};

greet.call(person0);

// apply 

function greeting(h,b){
console.log(`${h} -${this.name}- ${b} `);
}

const person9={name:"Muhammed suhaib"}
greeting.apply(person9,['hello','!']);


// Bind 

function greetingbind(){
    console.log('Hello ' + this.name);
}

const person6={name:"MUHAMMED SUHAIB"};

const bindfunction =greetingbind.bind(person6);
bindfunction();

// carbage collection 

let obj = { name: "Object" };
obj = null; // The object is no longer needed, and its memory can be reclaimed by the garbage collector.


// Pass by value 

function modifyValue(x){
    console.log(x);
   x=10;
}
 
const newValue=140;
modifyValue(newValue);
console.log(newValue);


// Pass by Refrence 

function modifyObject(obj) {
    obj.value = 10;
}

let myObj = { value: 5 };
modifyObject(myObj);
console.log(myObj.value)


// Async/Await

async function ab(){
    try {
        const respose = await fetch('https://fakestoreapi.com/products/1');
        if(!respose.ok){
            throw new Error ("Net Work was not ok");
        }
        const data =await respose.json()
        console.log(data);
    } catch (error) {
        console.error("Fetching error ",error);
    }
}
ab()