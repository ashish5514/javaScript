//function_inside_functions
 function app(){
    const myfun = ()=>{
        console.log("hello from my fun");
    }
    const addtwo = (num1, num2)=>{      
        return num1 +num2;
    }

    const num = (num1, num2)=>num1* num2;

    console.log("inside app");
    myfun();
    console.log(addtwo(2,3));
    console.log(num(2,3));
 }
 app();