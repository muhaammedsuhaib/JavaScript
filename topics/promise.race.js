const promise1 = new Promise( ( resolve , reject )=>{
    setTimeout(()=>{
        resolve("Promise 1");
    },2000)
})
const promise2 = new Promise( ( resolve , reject )=>{
    setTimeout(()=>{
        reject("Promise 2");
    },)
})
const promise3 = new Promise( ( resolve , reject )=>{
    setTimeout(()=>{
        resolve("Promise 3");
    },)
})

// promise1.then(res=> console.log(res)).catch(err=> console.log(err));
Promise.race([promise1,promise2,promise3]).then(res=> console.log(res)).catch(err=> console.log(err));