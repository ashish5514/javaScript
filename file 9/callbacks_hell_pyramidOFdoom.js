// callbacks , callback hell , pyramid of doom
// asynchronous programing

//  console.log("hello world");


// task 1
// const heading1 = document.querySelector(".heading1");
// const heading2 = document.querySelector(".heading2");
// setTimeout (()=>{
//     heading1.textContent = "Heading 1";
//     heading1.style.color = "violet";
//     setTimeout (()=>{
//         heading2.textContent = "Heading 2";
//         heading2.style.color = "pink";
//     },1000);
// },1000);

// task 2
//callback hell
const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");

    // setTimeout(()=>{
    //     heading1.textContent="one";
    //     heading1.style.color = "violet";
    //     setTimeout(()=>{
    //         heading2.textContent="two";
    //         heading2.style.color = "blue";
    //         setTimeout(()=>{
    //             heading3.textContent="three";
    //             heading3.style.color = "red";
    //             setTimeout(()=>{
    //                 heading4.textContent="four";
    //                 heading4.style.color = "yellow";
    //                 setTimeout(()=>{
    //                     heading5.textContent="five";
    //                     heading5.style.color = "brown";
    //                     setTimeout(()=>{
    //                         heading6.textContent="six";
    //                         heading6.style.color = "pink";
    //                         setTimeout(()=>{
    //                             heading7.textContent="seaven";
    //                             heading7.style.color = "green";
    //                         },1000)
    //                     },1000)
    //                 },1000)
    //             },1000)
    //         },1000)
    //     },1000)
    // },1000)


    // function changeText(element, text, color, time, onsuccessCllback){
    //     setTimeout(() => {
    //         if(element){
    //             element.textContent =text;
    //             element.style.color =color; 
    //             if(onsuccessCllback){
    //                 onsuccessCllback();
    //             }
    //         }
    //         else{
    //             console.log("your element does not exist");
    //         }
    //     }, time);
    // }
    // changeText(heading1,"one","violet", 2000,()=>(
    //     changeText(heading2,"two","green", 1000)
    // ));

    // pyaramid ofdoom 

    function changeText(element, text, color, time, onsuccessCllback, onFailureCallback){
        setTimeout(() => {
            if(element){
                element.textContent =text;
                element.style.color =color; 
                if(onsuccessCllback){
                    onsuccessCllback();
                }
            }
            else{
                if(onFailureCallback){
                    onFailureCallback();
                }
            }
        }, time);
    }


    changeText(heading1, "one","green",2000,()=>{
        changeText(heading2, "two","violet",1000,()=>{
            changeText(heading3, "three","red",1000,()=>{
                changeText(heading4, "four","yellow",1000,()=>{
                    changeText(heading5, "five","pink",1000,()=>{
                        changeText(heading6, "six","blue",1000,()=>{
                            changeText(heading7, "seaven","brown",1000,()=>{
                                
                            },()=>{console.log("heading7 dose not exist");})
                        },()=>{console.log("heading6 dose not exist");})
                    },()=>{console.log("heading5 dose not exist");})
                },()=>{console.log("heading4 dose not exist");})
            },()=>{console.log("heading3 dose not exist");})
        },()=>{console.log("heading2 dose not exist");})
    },()=>{console.log("heading1 dose not exist");})