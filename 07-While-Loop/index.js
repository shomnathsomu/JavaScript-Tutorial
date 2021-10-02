var num = parseInt(prompt("Enter your marks: "));

// While loop
var i = 1;
var sum = 0, temp = num;

while(i <= num) {
    sum = sum + i;
    i++;
}

document.write("<p>Using while loop</p>");
document.write("Sum from 1 to " + num + " is " + sum + "</br>");

// Do While loop
var s = 0;

do {
    s = s + num;
    num--;
} while(num > 0);

document.write("<h2>Using do while loop</h2>");
document.write("Sum from 1 to " + temp + " is " + s);