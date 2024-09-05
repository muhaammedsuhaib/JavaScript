function reverse_string (text){
    let a ='';
    for(let i=text.length-1 ; i>=0;i--){
    a+= text[i];
    }
    return console.log(a);
}
  reverse_string("ZYXWVUTSRQPONMLKJIHGFEDCBA");