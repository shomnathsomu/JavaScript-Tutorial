var num1, num2;

num1 = 10;
num2 = 7;

var sum = num1 + num2;
console.log(sum);

sub = num1 - num2;
console.log(sub);

mul = num1 * num2;
console.log(mul);

div = num1 / num2;
console.log(div);
console.log(typeof(div));

// assigned as a string
sum = "Hello" + sum;
console.log(sum);
console.log(typeof(sum));
// type will be string

mul = "A" * mul;
console.log(mul);
// will be shown "NaN" that means Not a Number

div = "A" / div;
console.log(div);
// will also be shown "NaN" that means Not a Number

var h, w, hw;
h = "Hello", w = "World!";
hw = h+" "+w;
console.log(hw);

// SHORT-HAND MATH OPERATOR
var a, b;
a = 5;
b = 7;
console.log("a = " + a +" and b = "+b);

a += b; // a = a + b;
console.log("a += b " + a);
a -= b; // a = a - b;
console.log("a -= b " + a);
a *= b; // a = a * b;
console.log("a *= b " + a);
a /= b; // a = a / b;
console.log("a /= b " + a);

console.log('a = ' + a);
console.log("a++ " + a++);
console.log("++a " + ++a);

console.log('b = ' + b);
console.log("b-- " + b--);
console.log("--b " + --b);

// Writing in the document
document.write(a);
document.write("<h1>a for Apple</h1>");
document.write("<h1>b for Ball</h1>");