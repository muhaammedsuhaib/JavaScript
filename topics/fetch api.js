fetch('https://jsonplaceholder.typicode.com/posts')
.then((response)=>{ return response.json()}).then(res=>console.log(res)).catch((error)=> console.log(error,"ERROR"))
  