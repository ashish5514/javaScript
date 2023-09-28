//trim()
//touppercase()
//tolowercase()
//slice()



let firstName ="    asHish    ";

console.log(firstName.length);
firstName=firstName.trim();      //ashish
console.log(firstName);
console.log(firstName.length);
firstName=firstName.toUpperCase();
console.log(firstName);
firstName=firstName.toLowerCase();
console.log(firstName);

//slice()

let newString = firstName.slice(0,5);
console.log(newString);