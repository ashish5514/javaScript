  

    const mainButton = document.querySelector("button")
    // console.log(mainButton);\
    const body = document.body;

    function rendomColorgendertor(){
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
        const randomColor = `rgb(${red},${green},${blue})`
        return randomColor
    }

    mainButton.addEventListener("click",()=>{
        const randomColor = rendomColorgendertor();
        console.log(randomColor); 
    })