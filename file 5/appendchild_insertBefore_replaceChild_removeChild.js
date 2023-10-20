 // some old method to support poor IE
 // appendChild
 // insertBefore
 // replaceChild
 // removeChild


        // AppendChild
//  const ul = document.querySelector(".todo-list");
//  const li = document.createElement("li");   
//   li.textContent = "new todo";
//   ul.appendChild(li);

        // insertBefore

        // const ul = document.querySelector(".todo-list");
        // const li = document.createElement("li");   
        // const referenceNode = document.querySelector(".first-todo");
        //  li.textContent = "new todo";
        //  ul.insertBefore(li, referenceNode);
        
        
        // replace child
        
        const ul = document.querySelector(".todo-list");
            // new element
        const li = document.createElement("li");   
         li.textContent = "new todo";

        const referenceNode = document.querySelector(".first-todo");

        ul.removeChild(referenceNode);