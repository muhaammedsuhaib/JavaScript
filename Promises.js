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



// Promises 


const promises =new Promise((resolve,reject)=>{
    fetch(`https://fakestoreapi.com/products/1`)
    .then((res)=>{
        if(!res){
            console.log(`Net work resonse not ok`);
        }
        return res.json();
    }).then(data=>resolve(data)).catch(error=>reject(error))
})

promises.then(data=>console.log(data)).catch(error=>console.log(error));

// Chaining promise 

function anotherPromise(data){
return new Promise ((resolve,reject)=>{
    setTimeout(()=>{
        resolve(`Proccessing : ${data}`);
    },1000)
})
}

