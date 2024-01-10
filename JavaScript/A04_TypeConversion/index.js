// Type Conversion = change the datatype of a value to another
//                                   (strings, numbers, booleans)

let age = window.prompt("How old are you?");

console.log(typeof age); //type of is used to know the data type of the variable 
age = Number.parseInt(age);// tye casting is used.
age += 1;

console.log("Happy Birthday! You are", age, "years old");


let x;
let y;
let z;

x = Number("pizza");
y = String(3.14);
z = Boolean("pizza");

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);
