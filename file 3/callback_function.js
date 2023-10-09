  // callback function

  function  myfunc2(name){
    console.log("inside my funk 2");
    console.log(`Syour name is ${name}`);
  }
  function myfunc(callback){
    console.log("hello there i am a func and i can...");
    callback("ashish");
  } 

  myfunc(myfunc2);