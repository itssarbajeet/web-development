// useful string properties & methods

let userName = "Bro Code";
let phoneNumber = "123-456-7890";

console.log(userName.length);
console.log(userName.charAt(0));
console.log(userName.indexOf("o"));
console.log(userName.lastIndexOf("o"));
userName = userName.trim();0
console.log(userName);
userName = userName.toUpperCase();
console.log(userName);
userName = userName.toLowerCase();
console.log(userName);

phoneNumber = phoneNumber.replaceAll("-", "");

console.log(phoneNumber);