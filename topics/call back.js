function greetname (name){
 console.log(`Hello ${name}`);
}

function proccessUserInput(callback){
    let name = 'Suhaib ali khan';
    callback(name);

};

proccessUserInput(greetname)