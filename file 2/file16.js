 //  array destructuring  

 const myArray = ["value1","value2","value3"];
  
//  let myvar1 = myArray[0];
//  let myvar2 = myArray[1];
//  console.log("value of myvar 1",myvar1);
//  console.log("value of myvar 2",myvar2);

  let [myvar1,myvar2, ...mynewarray]=myArray;
  myvar1= "new value";
  
   console.log("value of myvar 1",myvar1);
   console.log("value of myvar 2",myvar2);
   console.log(mynewarray);
