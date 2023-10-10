  // sort methode
  // Ascit table
  // char : ascli value  



  // sort method 

  const numbers = [5,9,1200,410,3000];
  numbers.sort((a,b)=>{
    return a-b;
  });

  //or   then

//  numbers.sort((a,b)=>a-b);

  console.log(numbers);


// product sort example

   const products = [
    {productId: 1, productName:"p1", price: 300},
    {productId: 2, productName:"p2", price: 3000},
    {productId: 3, productName:"p3", price: 200},
    {productId: 4, productName:"p4", price: 8000},
    {productId: 5, productName:"p5", price: 500},

   ]

  //  const lowtohight =  products.slice(0).sort((a,b)=>{
  //    return a.price-b.price
  //  })
   const hightHTolow =  products.slice(0).sort((a,b)=>{
     return b.price-a.price
   })

   console.log(hightHTolow);