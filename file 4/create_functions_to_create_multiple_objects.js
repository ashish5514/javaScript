//  create_functions_to_create_multiple_objects
  // proto , prottype, class


// const user = {
//     firstName :"ashish",
//     lastName :"zankat",
//     email: "ashishzankat1@gmail.com",
//     age:22,
//     address : "house number, colony, pincode, state",
//     about: function (){
//         return `${this.firstName} is ${this.age} years old`
//     },
//     is18: function (){
//         return this.age >= 18;
//     }
// }

// const aboutUser = user.about();
// console.log(aboutUser);

// function ( that function creat object)
// 2.) add key value pair
// 3.) object ko return krega

function creatUser (firstName, lastName, email, age, address){

    const user = {};
    user.firstName=firstName;
    user.lastName=lastName;
    user.email=email;
    user.age=age;
    user.address=address;
    user.about= function (){
    return `${this.firstName} is ${this.age} years old`
    }
    user.is18= function (){
                return this.age >= 18;
        }

        return user;

}
const user1 = creatUser ('ashish','khushvant', 'ashish1@gmail.com',19,'my address');
console.log(user1);
const is18 = user1.is18();
const about = user1.about();
console.log(about);
console.log(is18);






