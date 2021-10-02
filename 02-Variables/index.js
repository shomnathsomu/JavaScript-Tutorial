// Global scope
var x = 10;

function myFunction(){
    // Local scope
    var x = 100;
    console.log(x);
}

myFunction();
console.log(typeof(x));
var fN = 10.24;
console.log(typeof(fN));

// Boolean variable => true/false
var flag = false;
console.log(typeof(flag));

// String variable
var hw = "Hello, JavaScipt! You are really great for front-end!!";
var c = "A";
console.log(typeof(hw));
console.log(typeof(c));
