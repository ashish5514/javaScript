  // Arrow function

  const singbirthday = function(){
    console.log("happy birthday too you");
  }
   
  singbirthday();

  const threenumber = (number1, number2, number3) => {
    return number1 + number2 + number3;
  }

  const ans = threenumber(2,3,4);
  console.log(ans);

  // const iseven = function (number){    // this is function expression
  //   return number % 2 === 0;
  //   }

    const iseven = (number) => {  //this is  Arrow function 
      return number % 2===0

    }
    console.log(iseven(4 ));

    const firstchar = function (anystring){
      return anystring[0];
    }