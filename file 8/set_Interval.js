 // set Interval

//  console.log("script start");
// //  setInterval(()=>{
// //     console.log(Math.random());
// //  },500);
//  console.log("script end");


const body = document.body;
const button = document.querySelector("button");
// console.log(button);

const intervalId =  setInterval(()=> {
    const red = Math.floor(Math.random() * 126);
    const green = Math.floor(Math.random() * 126);
    const blue = Math.floor(Math.random() * 126);
    const rgb = `rgb(${red},${green},${blue})`;
    body.style.background =rgb;
    console.log(rgb);
},1000);

button.addEventListener("click",()=>{
 clearInterval(intervalId);
 button.
})

console.log(intervalId);