var num = parseInt(prompt("Enter your number: "));

// While loop
var i = 1;
var sum = 0;

for(; i <= num;) {
    sum = sum + i;
    i++;
}

document.write("<p>Using FOR loop</p>");
document.write("Sum from 1 to " + num + " is " + sum + "</br>");

var j = 0;
sum = 0;

for(; j<= num; j++){
    if(j%2==0) {
        continue;
    }
    if(sum > 1000){
        break;
    }
    sum += j;
}

document.write("<p>Using continue and break operators</p>");
document.write("Odd Sum from 1 to " + num + " is " + sum);