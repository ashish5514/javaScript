// block scope vs function scope

// let and const are block scope
// var is function scope


function myApp (){
    if (true){
        var firstname = "harshit";
        console.log(firstname);
    }
    if(true){
        console.log(firstname);
    }
}
myApp

// var ne game tya declare kari sakay 
// and let const ne fari thi declare kari sakay