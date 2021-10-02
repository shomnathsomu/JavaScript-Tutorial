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