  //  arrow function

  const user1 = {
    firstName : "ashish",
    age : 24,
    about: () => {
      console.log(this.firstName, this.age);
    }
  }

  user1.about();