  // function hello(){
  //   console.log("hello world");
  // }

  //  const hello = {key1: "value1"}

  // javascript function ===> function + object 

  // console.log(hello.name);

  //you can add your own properties
  // hello.myOwnProperty = "very unique value";
  // console.log(hello.myOwnProperty);

  // name property ---> tells function name ;
 
  // function provides more usefull properties.

//   hello.prototype;

// only functions provide prototype propety

  //  if(hello.prototype){
  //   console.log("prototype is present");
  //  }else{
  //   console.log("prototype is not present");
  //  }

  // hello.prototype.abc = "abc";
  // hello.prototype.xyz = "xyz";
  // hello.prototype.sing = function(){
  //   return "lallalal";
  // };
  // console.log(hello.prototype.sing());

  const userMethod = {
    about: function (){
        return `${this.firstName} is ${this.age} years old`
        },
        is18: function (){
                    return this.age >= 18;
        },
        sing: function(){
            return'toon na na na la la';
        }
        
}


  function creatUser (firstName, lastName, email, age, address){
    
    const user = Object.create(userMethod);
    user.firstName=firstName;
    user.lastName=lastName;
    user.email=email;
    user.age=age;
    user.address=address;
    
    return user;
    
}

    creatUser.prototype.about = function (){
      return`${this.firstName}is ${this.age}years old`
    };
    creatUser.prototype.is18 = function (){
      return this.age>=18;

    }
    creatUser.prototype.sing = function(){
      return"la la la";
    }
     
  
 console.log(creatUser.prototype);
 const user1 = creatUser('ashish','sam','ashish1@gmail.com',19,"my address");
 const user2 = creatUser('khushvant','sam','khushvant2@gmail.com',26,"my address");
 const user3 = creatUser('trun','sam','tarun3@gmail.com',24,"my address");

 console.log(user1);
 console.log(user1.is18());
//  console.log(user2.about());
//  console.log(user3.about());


   