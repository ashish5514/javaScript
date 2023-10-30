console.log("hello word");

    const grandparent = document.querySelector(".grandparent");
    const parent = document.querySelector(".parent");
    const child = document.querySelector(".child");


    // Capturing Events 

    // child.addEventListener("click",
    // ()=>{
    //     console.log("capture !!!! child");
    // },
    // true
    // );
    // parent.addEventListener("click",
    // ()=>{
    //     console.log("capture !!!! perent");
    // },
    // true
    // );
    grandparent.addEventListener("click",
    ()=>{
        console.log("capture !!!! grandparent");
    },
    true
    );
    document.body.addEventListener("click",
    ()=>{
        console.log("capture !!!! doucument.body");
    },
    true
    );





    child.addEventListener("click",()=>{
        console.log("you clicked on child");
    });
    parent.addEventListener("click",()=>{
        console.log("you clicked on perent");
    })
    // grandparent.addEventListener("click",()=>{
    //     console.log("you clicked on grandparent");
    // })
    // document.body.addEventListener("click",()=>{
    //     console.log("you clicked on doucument.body");
    // })