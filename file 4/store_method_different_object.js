 // store_method_different_object

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
    
    const user = {};
    user.firstName=firstName;
    user.lastName=lastName;
    user.email=email;
    user.age=age;
    user.address=address;
    user.about=userMethod.about;
    user.is18=userMethod.is18;
    user.sing = userMethod.sing;

    
    
    return user;
    
}

 const user1 = creatUser('ashish','sam','ashish1@gmail.com',19,"my address");
 const user2 = creatUser('khushvant','sam','khushvant2@gmail.com',26,"my address");
 const user3 = creatUser('trun','sam','tarun3@gmail.com',24,"my address");

 console.log(user1.about());
 console.log(user3.about());
 console.log(user3.sing());

// const user1 = creatUser ('ashish','khushvant', 'ashish1@gmail.com',19,'my address');
// console.log(user1);
// const is18 = user1.is18();
// const about = user1.about();
// console.log(about);
// console.log(is18);