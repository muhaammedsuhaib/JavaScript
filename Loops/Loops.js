for (let i = 0; i < 5; i++) {
    console.log(i); // 0 1 2 3 4
  }
  
  let j = 0;
  while (j < 5) {
    console.log(j); // 0 1 2 3 4
    j++;
  }
  
  let k = 0;
  do {
    console.log(k); // 0 1 2 3 4
    k++;
  } while (k < 5);
  
  let obj = { a: 1, b: 2, c: 3 };
  for (let key in obj) {
    console.log(key, obj[key]); // 'a 1', 'b 2', 'c 3'
  }
  
  let arr = [1, 2, 3, 4, 5];
  for (let value of arr) {
    console.log(value); // 1 2 3 4 5
  }
  