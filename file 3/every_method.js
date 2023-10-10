  // every method

//   const numbers = [2,4,6,8,10];

//     function isEven (number){
//         return number%2 ===0;
//     }

//   const ans = numbers.every((number)=>number%2===0);


// every callback function ---> true / false (boolean)

//  every method ---> true / false (boolean)   jyare bandh number odd hoy tyare true aape che..
// and odd na hoy tyare false 

// console.log(ans);


const userCart = [
    {productiId:1, productName: "mobile", prise:12000},
    {productiId:2, productName: "leptop", prise:22000},
    {productiId:3, productName: "tv", prise:35000}
   ]

 // every product lasthen < 30000

  const ans = userCart.every((cartItem)=>cartItem.prise<30000);
  console.log(ans);
