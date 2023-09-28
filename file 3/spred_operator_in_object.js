  //spread operator
  // const Array1 = [1,2,3];
  // const Array2 = [5,6,7];

  // const newArray = [...Array1, ...Array2];
  // const newArray = [..."123456789"];
  // console.log(newArray);

  //spread operator in objects

  const obj1 = {
    key1: "value1",
    key2: "value2",
  };
  const obj2 = {
    key1: "valuenew",
    key3: "value3",
    key4: "value4",
  };
  // const newobject = {...obj2,...obj1}
  // const newobject = {...obj2,...obj1, key69:"value5"}
  // const newobject = {...["item1","item2"]}
  const newobject = {..."abcdefghijklmnopqrstuvwxyz"}
  console.log(newobject);



