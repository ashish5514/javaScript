 // parameter destructuring

    //object 
    //react

    const person = {
        firstname: "tarun",
        gender:"other",
        age : "6 months",
    }

    // function printdetails(obj){
    //     console.log(obj.firstname);
    //     console.log(obj.gender);
    // }


    function printdetails(firstname, gender,age){
        console.log(firstname);
        console.log(gender);
        console.log(age);
    }
    printdetails(person)