  // get and set attrubutes

  const link = document.querySelector("a");
  console.log(link.getAttribute("href") .slice(1));
  link.setAttribute("href", "https://github.com/ashish5514?tab=repositories");
  console.log(link.getAttribute("href"));

//   const inputElement = document.querySelector(".form-todo input");
//   console.log(inputElement.getAttribute("type"));
  