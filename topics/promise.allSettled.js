const promise1 =new  Promise((resolve,reject)=>{
    setTimeout(()=>{

        reject("promise 1")
    },1000)
})
const promise2 =new  Promise((resolve,reject)=>{
    resolve("promise 2")
})


Promise.allSettled ([promise1,promise2]).then((res)=>{
console.log(res);

})