var myString = 'I\'m a cool function!</br>';
console.log(myString);

console.log(myString.length);
console.log(myString.toUpperCase());
console.log(myString.toLowerCase());
console.log(myString.indexOf('Cool'));
console.log(myString.indexOf('cool'));
console.log(myString.slice(6,15));

var newString = "Apple, Ball, Cat, Dog, Elephant, Fox, Giraffe, Horse";
var newObj = newString.split(",");
console.log(newObj);
console.log(typeof(newObj));
console.log(newObj[6]);