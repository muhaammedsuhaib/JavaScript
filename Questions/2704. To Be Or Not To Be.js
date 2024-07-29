function toBeorNotTobe(inizialValue){
   var inizialValue= inizialValue;
   return {
    toBe:function(value){
        if(value !== inizialValue){
            return 'Not Equle...';
        }else return true;
    },
    notToBe:function(value){
        if(value === inizialValue){
            return 'Equle...';
        }else return true;

    }
   }

}
var Data=toBeorNotTobe(5).notToBe(15);
console.log(Data);