const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Hello Im First Promises");
  }, 5000);
});

// promise1.then(res=> console.log(res)).catch(err=> console.error(err));

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Hello Im Second Promises");
  }, 3000);
});

// promise2.then(res=> console.log(res)).catch(err=> console.error(err));

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Hello Im Third Promises");
  }, 6000);
});

// promise3.then(res=> console.log(res)).catch(err=> console.error(err));

Promise.all([promise1, promise2, promise3])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
