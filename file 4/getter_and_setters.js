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
    setName (firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;

    }
   }


    const person1 = new  Person("ashish", "zankat", 5);
    // console.log(person1.fullName());
    // console.log(person1.fullName);

    console.log(person1.firstName);
    console.log(person1.lastName);
    person1.setName("trun","fanki");
    
    console.log(person1.firstName);
    console.log(person1.lastName);