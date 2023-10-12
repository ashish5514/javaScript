  // call Apply bind
  
  function about (hobby, favMusician){
      console.log(this.firstName, this.age,hobby,favMusician);
  }
  // const user1 = {
  //   firstName : "ashish",
  //   age :8,
  // }

  // const user2 = {
  //   firstName : "khushvant",
  //   age: 9,

  // }
  

  // call
//   about.call(user2,"guitar","pritam")
// apply
// about.apply(user2,["guitar","pritam"])
// bind
  //  const func= about.bind(user1,"guitar","pritam");
  //  func();



   // don't do this mistake
   const user1 = {
      firstName : "ashish",
      age :8,
     about :function(){
        console.log(this.firstName, this.age);
    }
    }
   // user1.about();

   const myFunc = user1.about.bind(user1);
   myFunc();
