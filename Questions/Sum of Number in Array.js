// Input: [1, 2, 3, 4]
// Output: 10

const SumOfArray= (input)=>{
    let sum=0;
for(let i=0;i<input.length;i++){    
   sum +=input[i];
}
return sum;
}
const data= [1,2,3,4];
const result = SumOfArray(data);
console.log(result);
