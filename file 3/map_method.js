  // map method

  const numbers = [3,4,6,1,8]
  
  //   const square = function(number){
      //     return number * number ;
      //   }
      
      //  const squarenumber = numbers.map(square);  // mostly  map function create new Array
      //  console.log(squarenumber);
      
      
      const squarenumber = numbers.map((number, index)=>{
          return `index: ${index},  ${number * number}`;
        });
        
        console.log(squarenumber);
        

        const users = [
          {firstName:"ashish", age: "22"},
          {firstName:"tarun", age: "24"},
          {firstName:"khushvant", age: "24"},
          {firstName:"viru", age: "23"},
         ]

         const usernames =  users.map((usre)=>{
             return users.firstName;

         })
         console.log(usernames);