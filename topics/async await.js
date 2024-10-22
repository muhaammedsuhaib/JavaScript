function fetchdata (){
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Data featch successfully");
        })
    })
    
};

// fetchdata.then(res=> console.log(res)).catch(err=> console.log(err));


async function callth (){
 try {
    const data = await fetchdata();
    console.log(data)
 } catch (error) {
    console.log(error)
 }
}

callth();