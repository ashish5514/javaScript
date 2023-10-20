 //document.createElement()
 // append
 // prepend
 // remove
  

    // create Element

//   const newTodoItem = document.createElement("li");
// //   const newTodoItemText = document.createTextNode("Teach student");
//   newTodoItem.textContent = "Teach students";

        // Append & Prepend
//   const todoList = document.querySelector(".todo-list");
//   todoList.prepend(newTodoItem);
//   todoList.append(newTodoItem);
//   console.log(newTodoItem);


// before 
// After

    const newTodoItem = document.createElement("li");
    newTodoItem.textContent = "Teach students";
  const todoList = document.querySelector(".todo-list");
  todoList.after(newTodoItem);