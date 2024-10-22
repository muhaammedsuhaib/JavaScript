const promise1 = Promise.reject('Failed');
const promise2 = Promise.reject('Success');
const promise3 = Promise.reject('Failed');

Promise.any([promise3, promise1, promise2]).then((value) => console.log(value)).catch(err=>console.log(err))
