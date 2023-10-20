   
   const allbuttons = document.querySelectorAll(".my-buttons button");

//    for (let button of allButtons){
//     button.addEventListener("click", function(){
//         console.log(this);
//     })
//    }

//    for(let i = 0 ; i< allbuttons.length; i++){
//     allbuttons[i].addEventListener("click", function(){
//         console.log(this);
//     })
//    }

   allbuttons.forEach(function(button){
    button.addEventListener("click", function(){
        console.log(this);
    })
   })