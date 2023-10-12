//  create_functions_to_create_multiple_objects

const user = {
    firstName :"ashish",
    lastName :"zankat",
    age:2,
    address : "house number, colony, pincode, state",
    about: function (){
        return '${this.firstName} is ${this.age} years old'
    },
    is18: function (){
        return this.age >= 18;
    }
}