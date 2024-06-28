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