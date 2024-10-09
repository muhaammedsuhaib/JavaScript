const mypromise = new Promise ((res , rej)=>{
   setTimeout(()=>{
    let t=false;
    if(t){
        res('Okey bro');
    }else{
        rej("Not OKey bro");
    }
   },2000)
});

mypromise.then(reslt=> console.log(reslt)).catch(err=> console.log(err)).finally(()=> console.log('Happy or sad'))