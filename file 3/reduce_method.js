  // reduce method

  const numbers = [1,2,3,4,5,10];

//   aim : sum of all the numbers in Array


  // numbers.reduce(()=>{});

  const sum = numbers.reduce((accumulator, currentValue)=>{
    return accumulator + currentValue;
  })

  console.log(sum);

   //  accumulator  ,  currentValue  ,  return
   //     1                  2             3
   //     3                  3             6
   //     6                  4             10  
   //     10                 5             15
   //     15                 10            25

   const userCart = [
    {productiId:1, productName: "mobile", prise:12000},
    {productiId:2, productName: "leptop", prise:22000},
    {productiId:3, productName: "tv", prise:15000}

   ]
    const totalAmount = userCart.reduce((totalPrise, currentProduct)=>{
      return totalPrise + currentProduct.prise; 
    }, 0)
    console.log(totalAmount);








