  // getter and setter
   
   class Person{
    constructor(firstName,lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;

    }
    get fullName(){
        return`${this.firstName} ${this.lastName}`;
    }
    // setName (firstName, lastName){
    //     this.firstName = firstName;
    //     this.lastName = lastName;
    //    }
    set fullName (fullName){
        const[firstName, lastName] = fullName.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;

    }


   }


    const person1 = new  Person("ashish", "zankat", 5);
    // console.log(person1.fullName());
    // console.log(person1.fullName);

    // console.log(person1.firstName);
    // console.log(person1.lastName);

    // person1.setName("trun","fanki");
    // person1.firstName("trun");
    // person1.lastName("fanki");

    
    // console.log(person1.firstName);
    // console.log(person1.lastName);

    // other way 

    person1.fullName = "tarun fanki";
    console.log(person1);
    console.log(person1.fullName);