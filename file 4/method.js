// methods 
// function inside object

function personInfo(){
    console.log(`person name is ${this.firstName} and person age is ${this.age}`);
}

const person1 = {
    firstName : "ashish",
    age:22,
    about: personInfo
} 
const person2 = {
    firstName : "khushvantsinh",
    age:24,
    about: personInfo
} 
const person3 = {
    firstName : "trun",
    age:undefined,
    about: personInfo
} 
person2.about();