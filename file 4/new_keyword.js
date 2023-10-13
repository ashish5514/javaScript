//   new keyword
 
 function createUser(firstName,age){
    this.firstName = firstName;
    this.age = age;
 }

  createUser.prototype.about = function(){
    console.log(this.firstName, this.age);
  }
 const user1 = new createUser("ashish", 6);

   // new keyword
   // 1.) empty object create this = {} object
   //2.)  return empty object 

 user1.about();