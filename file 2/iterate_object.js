  // how to iterate object

  const person = {
    name:"ashish",
    age:22,
    "person hobbies":["cricket","swiming","driving"]
}

 // for in loop 
 // object. keys

//  for(let key in person){
//     console.log(`${key} : ${person[key]}`);
//     console.log(key, " : ",person[key]);
//  }


  //  object. keys
   
//  console.log( typeof (Object.keys(person)));
//  const val = Array.isArray( (Object.keys(person)));
//  console.log(val);

for(let key of Object.keys(person)){
  console.log(person[key]);
}

  