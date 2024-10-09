const object = {
    name:"suhaib",
    place:"kadanchery"
}
 
// Object.freeze(object)  // this is object freeze 
// Object.seal(object)  // the object is not delete and add only ||  modify 

object.name= "Hello world 1";

delete object.name
console.log(object);



const obj ={
    name:"suhaib",
    description:{
      text:  "Im from kerala "
    }
}
//  deep freeze 
Object.freeze(obj.description);

obj.description.text="HELLLLOOO";
obj.name="hell"

console.log(obj)