  // some method

  const numbers = [3,5,8,9];

  // aaya ek bhi numbert evu che jo even che to true return karse

// const ans =  numbers.some((number)=>number%2===0);
// console.log(ans);


const userCart = [
    {productiId:1, productName: "mobile", prise:12000},
    {productiId:2, productName: "leptop", prise:22000},
    {productiId:3, productName: "tv", prise:250000}
   ]

    const ans =   userCart.some((cartItem)=>cartItem.prise>100000);
    console.log(ans);
