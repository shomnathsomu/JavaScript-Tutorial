// Date object

var myDate = new Date();
console.log(myDate);
console.log(myDate.getFullYear());
console.log(myDate.getMonth());
console.log(myDate.getDate());
console.log(myDate.getDay());

// get the number of miliseconds since 1st Jan 1970
console.log(myDate.getTime());
console.log(myDate.getHours());
console.log(myDate.getMinutes());
console.log(myDate.getSeconds());

var myBirthDate = new Date(1994,0,25);
var herBirthDate = new Date(1994,0,25);
var myFutureDate = new Date(2022,0,25);

console.log(myBirthDate);
console.log(myFutureDate);

if (myBirthDate.getTime() == herBirthDate.getTime()) {
    console.log("Yor are the same years old.");
} else {
    console.log("Yor are not the same years old.");
}