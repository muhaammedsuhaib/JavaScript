const array = [0,0,1];

function Remove_Duplicate_Element (a){
      let resul=[];
    for(let i=0;i<a.length;i++){
            let isdupli = true;
        for(let j=0;j<resul.length;j++){
            if(a[i]===resul[j]){
                break;
                isdupli=false;
            }

            if(!isdupli){

                resul.push(a[i])
            }
            console.log(a[i],a[j]);
        }
    }
    return console.log(resul)
}
Remove_Duplicate_Element(array)