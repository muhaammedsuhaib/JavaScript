// Promises 

// > Promise is an object 
// > Represeting the eventual completion or failure of an asynchronous opration.


// Creating promise  

const promise =new Promise((resolve,reject)=>{
    const success = true;
if(success){
    resolve("Opration success!");
}else{
    reject("Opratio failed!")
}
})

console.log(promise);

// Chaining promise 

function anotherPromise(data){
return new Promise ((resolve,reject)=>{
    setTimeout(()=>{
        resolve(`Proccessing : ${data}`);
    },1000)
})
}


promise.then(result=>{
    console.log(result);
    return anotherPromise(result)
}).then((anotherResult)=>{
    console.log(anotherResult)
})
.catch((error)=>{
    console.error(error);
})


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

const person1={name:'Muhammed suhaib'};

greet.call(person1);

// apply 

function greeting(h,b){
console.log(`${h} -${this.name}- ${b} `);
}

const person3={name:"Muhammed suhaib"}
greeting.apply(person3,['hello','!']);


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