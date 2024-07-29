function creataeCounter(number){
    return function(){
        return number++;
    }
}
const counting = creataeCounter(10);
console.log(counting());   //10
console.log(counting());   //11
console.log(counting());   //12
console.log(counting());   //13