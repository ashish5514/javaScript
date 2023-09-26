  //nested if else

  // nested if else atle if ni andar if else lakhyu le else ni andar if else lakhvu
    
  //# logic 
  //winning number 19 game

  // 19 your guess is right 
  // 17 too low 
  // 20 too high

  let winningnumber = 19;
  let userguess = +prompt("guess a number");

  if(userguess === winningnumber){
    console.log("your guess is right!!");
  }else{
    if(userguess < winningnumber ){
        console.log("too low !!!");
    }else{
        console.log("too hight");
    }
  }