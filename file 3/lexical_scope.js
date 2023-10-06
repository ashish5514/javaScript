 //  lexical scope
   const myvar = "value1";


   function myapp (){

      function myfun (){
         // const myvar = "value59";

         const myfun2 = () =>{
            console.log("inside my fun",myvar);

         }
         myfun2();
      }

      console.log(myvar);
      myfun ();
   }
 myapp();