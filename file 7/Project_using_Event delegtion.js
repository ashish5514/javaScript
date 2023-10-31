const todoForm = document.querySelector(".form-todo");
const todoInput  = document.querySelector(".form-todo input[type='text']");
const todoList = document.querySelector(".todo-list");

// console.log(todoInput);
// console.log(todoForm);


// todoForm.addEventListener("submit",(e)=>{
//     e.preventDefault();
//     console.log("form submitted");
// });


todoForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    const newTodotext=todoInput.value;
    const newLi = document.createElement("li")
    const newLiInnerhtml = `<span class="text">${newTodotext}</span>
    <div class="todo-buttons">
      <button class="todo-btn done">Done</button>
      <button class="todo-btn remove">Remove</button>
    </div>`;

    newLi.innerHTML = newLiInnerhtml;
    todoList.append(newLi);

    console.log(newLi);
    todoInput.value="";
});