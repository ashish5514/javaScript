 //function_returning_funcion


 function myfunc(){
    function hello(){
        console.log("hello word");
        return hello;
    }
    return hello;
 }
 const ans = myfunc();
 ans(); 