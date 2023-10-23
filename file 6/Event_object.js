 // event object

//  const firstButton = document.querySelector("#btn-1");
//  firstButton.addEventListener("click", function(){
//     console.log(this);
//  })

 // jab bhi me kisi bhi element me event listener add hoga
 // js engine --- line by line execute karta hai
 // browser --- js engine + extra fearture
 // browser ----- js engine + web api

 // jab browser ko pata chala ki user ne event perform kia 
 // jo hum liswten kar rahe hai
 // browser --- 2 kam karega 
 // 1.) callback function hai vo js engine ko degi ...
 // 2.) callback function ke sath browser  jo event huva hai 
 //     uski enformation bhi dega


 const allButtons = document.querySelectorAll(".my-buttons button");

 for(let button of allButtons){
   button.addEventListener("click",(e)=>{
      console.log(e.currentTarget);
   })
 }