console.log("script start !!!!!!");

const allButtons = document.querySelectorAll(".my-buttons button");

allButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    console.log(e.currentTarget.textContent);
  });
});



console.log("script start !!!!!!");