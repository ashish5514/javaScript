  // new keyword
  // empty object create kare and this = {} rakhe
  // empty object ma aavel key value ne return kare
  
  
  
  function CreatUser (firstName, lastName, email, age, address){
       //  this function constructor function .....
      // const user = Object.create(creatUser.prototype);
    this.firstName=firstName;
    this.lastName=lastName;
    this.email=email;
    this.age=age;
    this.address=address;
       
    //    new keyword self return kare che

    // return this;
    
}

    CreatUser.prototype.about = function (){
      return`${this.firstName}is ${this.age}years old`
    };
    CreatUser.prototype.is18 = function (){
      return this.age>=18;

    }
    CreatUser.prototype.sing = function(){
      return"la la la";
    }
     
  
 console.log(CreatUser.prototype);
 const user1 =new CreatUser('ashish','sam','ashish1@gmail.com',19,"my address");
 const user2 =new CreatUser('khushvant','sam','khushvant2@gmail.com',26,"my address");
 const user3 =new CreatUser('trun','sam','tarun3@gmail.com',24,"my address");

 console.log(user1);
 console.log(user1.is18());