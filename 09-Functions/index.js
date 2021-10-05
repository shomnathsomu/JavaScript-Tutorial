var num1 = parseInt(prompt("Enter your first number"));
var num2 = parseInt(prompt("Enter your second number"));

var avg;

// Declaring a function
function average(a,b){
    avg = (a+b)/2;

    // console.log(avg);
    // return the function result
    return avg;
}

// assign the function value
avg = average(num1, num2);

document.write("The average of " + num1 + " and " + num2 + " is " + avg);