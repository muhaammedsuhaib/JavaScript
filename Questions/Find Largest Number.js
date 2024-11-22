// Input: [1, 5, 2, 8, 3]
// Output: 8

function findMax(input){

    let max= input[0];
    for(let i=1;i<input.length;i++){
        if(input[i]>max){
            max= input[i];
        }
    }
    return max;
}

const data= [1, 5, 2, 8, 3];
const result =findMax(data);
console.log(result)