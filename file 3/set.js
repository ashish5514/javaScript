// set (it is iterable)
// store data 
// set also have its own methods
// no index-based access
// order is niot guranteed
// unique item only (no duplicates allowed)


const items = ['item1', 'item2','item3'];
const numbers = new Set();
numbers.add(1);
numbers.add(2);
numbers.add(3);
numbers.add(4);
numbers.add(5);
numbers.add(6);
// numbers.add(['item1', 'item2','item3']);
// numbers.add(['item1', 'item2','item3']);
//  console.log(items);
//  if(numbers.has(1)){
//     console.log("1 is present");
//  }else{
//     console.log("1 is not present");
//  }
 console.log(numbers);
//  console.log(numbers[2]);


const myArray =[1,2,4,4,5,6,5,6];
const uniqueElements = new Set(myArray);
let length = 0;
for (let element of uniqueElements){
    length++;
}

console.log(length);