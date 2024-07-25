function CreateHelloWorld(){
    return function (){
        return 'Hello World!...';
    }
}

const create=CreateHelloWorld();
console.log(create());  // Hello World!...