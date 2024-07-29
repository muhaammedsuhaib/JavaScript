function counterApp (inizialValue){
    let count=inizialValue;
    return {
        increment:function(){
            count ++;
            return count;
        },
        decrement:function(){
            count--;
            return count;
        },
        reset:function(){
            count = inizialValue;
            return count;
        }
    }
}

const counting = counterApp(10);
console.log(counting.increment()); //11
console.log(counting.reset()); //10
console.log(counting.decrement()); //9