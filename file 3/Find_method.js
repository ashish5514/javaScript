  //find method

//   const myArray = ["hello","catt","dog","lion"];

//   function isLength3(string){
//     return string.length ===3;
//   }

//   const ans = myArray.find((string)=>string.length===3);
//   console.log(ans);


const users = [
    {userId:1, usreName:"ashish"},
    {userId:2, usreName:"khushvant"},
    {userId:3, usreName:"tarun"},
    {userId:4, usreName:"viru"},
    {userId:5, usreName:"kuldip"},

];

const myUser = users.find((user)=>user.userId===3);
console.log(myUser);