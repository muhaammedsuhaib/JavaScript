const samplePromise = new Promise((resolve, reject) => {
    resolve('hy');
  });
  
  samplePromise
    .then((result) => console.log(result)) // Output: 'hy'
    .catch((error) => console.log(error));
  


    fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => {
    console.log('Data:', data);
  })
  .catch(error => {
    console.error('Error:', error);
  })
  .finally(() => {
    console.log('Request completed');
  });