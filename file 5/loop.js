  // get multiple elements using getElements by class name
  // get multiple elements  using queryselectorAll 


    // const navItems = document.getElementsByTagName("a");  //HTMLCollection
    // console.log(navItems.length);

    // we can't use forEach method to iterate through HTMLCollection

        // simple for loop
        // for of loop
        // forEach method

    // for(let i=0; i< navItems.length; i++){
    //     // console.log(navItems[i]);
    //     const navItem = navItems[i];
    //     navItem.style.backgroundColor = "#fff";
    //     navItem.style.color = "green";
    //     navItem.style.fontWeight = "bold";
    // }

    // for(let navItem of navItems){
    //     navItem.style.banckgroundColor = "#fff";
    //     navItem.style.color = "green";
    //     navItem.style.FontWeight = "bold";
    // }

    // navItems = Array.from(navItems);
    // console.log(Array.isArray(navItems));
    // for(let navItem of navItems){
    //     navItem.style.backgroundColor = "#fff";
    //     navItem.style.color = "green";
    //     navItem.style.fontWeight = "bold";
    // }

    // console.log(Array.isArray(navItems));
    // const navItems = document.querySelectorAll(".nav-item");  //  nodelist
    // console.log(navItems[1]);



    //////    query selectorAll


    let navItems = document.querySelectorAll("a");
     // simple for loop
        // for of loop
        // forEach method

        // for(let i=0; i< navItems.length; i++){
        //     // console.log(navItems[i]);
        //     const navItem = navItems[i];
        //     navItem.style.backgroundColor = "#fff";
        //     navItem.style.color = "green";
        //     navItem.style.fontWeight = "bold";
        // }
    
        navItems = Array.from(navItems);
        console.log(Array.isArray(navItems));
        for(let navItem of navItems){
            navItem.style.backgroundColor = "#fff";
            navItem.style.color = "green";
            navItem.style.fontWeight = "bold";
        }