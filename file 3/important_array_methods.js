  // imporetant Array methods

   // forEach
   //  map
   // filter
   // reduce


   const number = [4,2,5,8];

//    function myfunc(number, index){
//     console.log(`index is ${index}number is ${number}`);
//    }
//    muktiplayby2(number[0],0);
//    muktiplayby2(number[1],1);

// for(let i =0;i<number.length;i++){
//     // console.log(i);
//     myfunc(number[i],i);
// }


      /////   forEach  use
number.forEach(function(number, index){
    console.log("index is", index,"number is", number*3);
})



  /// forEach mostly use this type

   const users = [
    {firstName:"ashish", age: "22"},
    {firstName:"tarun", age: "24"},
    {firstName:"khushvant", age: "24"},
    {firstName:"viru", age: "23"},
   ]

      /// forEach loop use

//   users.forEach(function(user){
//     console.log(user.firstName);
//   })
   

   //  forEach method for Arrow function

   users.forEach((user, index)=>{
    console.log(user.firstName, index);
   })


   // for of loop 

//    for(let user of users){
//     console.log(user.firstName);
//    }


