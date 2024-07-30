const arr=[11,12,13,14,15];

function pluseOne(number){
 return ++number;
}

function eachArrayPluse (a,b){
    for(let i=0;i<a.length;i++){
         a[i]=b(a[i])
    }
    return a;
}

console.log(eachArrayPluse(arr,pluseOne));