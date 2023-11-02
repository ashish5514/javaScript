console.log("script start");
// promise  

 const bucket = ['coffee', 'chips','vegetables', 'salt', 'rice'];

    const friedRicePromise = new Promise((resolve,reject)=>{
        if(bucket.includes("vegetables")&& bucket.includes("salt")&&bucket.includes("rice")){
            resolve("fried Rice");
        }else{
            reject("Couldn't do it")
        }
    });

    // produce


     

    // consume
    // how to consume

   
        setTimeout(()=>{
            console.log("hellow fom settimeout");
        })

    for(let i = 0; i <=100; i++){
        console.log(Math.random(),i);
    }
    console.log("script end");