// sort syntex

// const user1 = {
//     firstName : "ashish",
//     age : 24,
//     about: function (){
//       console.log(this.firstName, this.age);
//     }
//   }


const user1 = {
    firstName : "ashish",
    age : 24,
    about() {
      console.log(this.firstName, this.age);
    }
  }

  user1.about();