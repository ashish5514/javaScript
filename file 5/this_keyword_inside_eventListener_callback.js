  // this keyword
  const btn = document.querySelector(".btn-headline");

    btn.addEventListener("click", ()=>{
        console.log("you clicked me");
        console.log("value of this");
        console.log(this);
    })


    // this ni value addEventListener Arrow function
    // ma window print thai che
    // this ni value Normal function ma Element print thai che
     