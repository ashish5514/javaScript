  // static list vs live list
    // queryselectorall hamein static list degi
    // getElementsbysomething hamein live list degi


    const ul = document.querySelector(".todo-list");
    
    const listItems= ul.getElementsByTagName("li");


  const sixthli = document.createElement("li");
  sixthli.textContent= "item 6";
//   const ul = document.querySelector(".todo-list");
  ul.append(sixthli)
  console.log(listItems);