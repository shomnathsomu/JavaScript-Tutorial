var myArray = new Array();
// var myArray = [];

for(var i=0; i<100; i++){
    myArray[i] = i+1;
}

myArray.push(true);
myArray.push({h : "hello"});

console.log(myArray.length);
console.log(typeof(myArray));
console.log(myArray);
console.log(myArray[101]);

myArray.sort();
console.log(myArray);

myArray.reverse();
console.log(myArray);