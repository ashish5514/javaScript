  // map object
  // map is an iterable

  // store data in ordered fashion

  //store key value pair (like object)
  // duplicate key are not allowed like object


  // different between map and object

  // object can only have tring or symbol
  // as key

  // in map you can use anything as key
  // like Array, number, string

  // object literal kahevay
  // key ---> string
  // key ---> symbol

//  const person = {
//     firstName : "ashish",
//     age : 7,
//     1 :"one"
//  }
//  console.log(person.firstName);
//  console.log(person["firstName"]);
//  for (let key in person){
//     console.log(typeof key);
//  }


// map key value pair store kare
//   const person = new Map();
//   person.set('firstName', 'ashish');
//   person.set('age', 7);
//   person.set(1,'one');
//    console.log(person);
//    console.log(person.get(1));
//    console.log(person.keys());
//    for(let key of person.keys()){
//     console.log(key);
//    } 

//  for (let [key, value] of person){
    // console.log(typeof key);
    // console.log(Array.isArray (key));
//     console.log( key, value );
//  }

    const person1 ={
        id : 1,
        firstName:"ashish"
    }
    const person2 ={
        id : 2,
        firstName:"khushvant"
    }

    const userInfo = new Map();
    userInfo.set(person1, {age:8,gender:"male"})
    userInfo.set(person2, {age:9,gender:"female"})
    // console.log(userInfo);
    console.log(person1.id);
    console.log(person2.id);
    console.log(userInfo.get(person1).gender);
    console.log(userInfo.get(person2).gender);


// const person = new Map([['firstName', 'ashish'], ['age',7]]);
//     console.log(person);









