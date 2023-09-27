 // objects  is non primitive data type
 // arrays are good but not sufficient
 // for real world data
 // objects store key value pairs
 // obects don't have index

// how to create objects

//  const person = {name:"ashish",age:22};
 const person = {
    name:"ashish",
    age:22,
    hobbies:["cricket","swiming","driving"]
}
 console.log(person);

// how to access data from objects
 
//  console.log(person.name);
//  console.log(person.age);
 console.log(person.hobbies);

 // how to add key value pair to objects

person.gender = "male";
console.log(person);