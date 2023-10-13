//  2015 / es6 ma class keyword aavyo hato
// javascript ma class badh fake hoi che


    class CreatUser{
        constructor(firstName, lastName, email, age, address){
            // console.log("constructor called");
            this.firstName=firstName;
            this.lastName=lastName;
            this.email=email;
            this.age=age;
            this.address=address;
        }

        about(){return`${this.firstName}is ${this.age}years old`;};
        is18(){return this.age>=18;};
        sing(){return"la la la";};
        func(a){console.log(a);}

    }  

const user1 =new CreatUser('ashish','sam','ashish1@gmail.com',19,"my address");
const user2 =new CreatUser('khushvant','sam','khushvant2@gmail.com',26,"my address");
const user3 =new CreatUser('trun','sam','tarun3@gmail.com',24,"my address");
user1.func("Ashish");

