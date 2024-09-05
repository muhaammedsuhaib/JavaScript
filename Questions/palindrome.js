const text ="MALAYALAM";

let a= "";
for (let i=text.length-1;i>=0;i--){
   a += text[i];
   
}

if(a=== text){
    console.log("This is plindrom");
}else{
    console.log("This is not plindrom")
}