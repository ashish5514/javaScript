 // function returning promise

 function ricePromise(){
    const bucket = ['coffee', 'chips','vegetables', 'salt', 'rice'];

    return  new Promise((resolve,reject)=>{
        if(bucket.includes("vegetables")&& bucket.includes("salt")&&bucket.includes("rice")){
            resolve("fried Rice");
        }else{
            reject("Couldn't do it")
        }
    })
        
 }

 ricePromise().then(
    // jab promise resolve hoga
    (myfriedRice)=>{
    console.log("lets eat", myfriedRice);
}
,
// jab promise reject hoga 
(error)=>{
    console.log(error);
}
).catch(
    (error)=>{
        console.log(error);
    }
) 