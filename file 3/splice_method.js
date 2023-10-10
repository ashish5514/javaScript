    // splice method
    // start , delete , insert

    const myArray = ['item1', 'item2', 'item3'];

    //delet method

    // myArray.splice(1,1);
    // console.log(myArray);

    // const deletedItem = myArray.splice(1, 2);
    // console.log("delted item", deletedItem);
    // console.log(myArray);

    // insert method

    // myArray.splice(1,0,'inserted item');
    // console.log(myArray);

    // delted & insert
     // insert & Array ne console ma massage ma jovanu
    const deletedItem = myArray.splice(1,2, "inserted item1","inserted item2");
    console.log("delted item", deletedItem);
    console.log(myArray);