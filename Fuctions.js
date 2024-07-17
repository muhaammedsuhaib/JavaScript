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
})