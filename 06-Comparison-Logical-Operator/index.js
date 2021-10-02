var marks = parseInt(prompt("Enter your marks: "));

// Comparison operator >, <, <=, >=, ==, ===, !=, !==
// Logical operator &&, ||, !

if (marks > 100) {
    document.write("You have got an invalid marks! Please check again.");
} else if (marks >= 80) {
    document.write("Congrats! You've got A+");
} else if (marks >= 70 && marks <= 79) {
    document.write("You've got A");
} else if (marks >= 60 && marks <= 69) {
    document.write("You've got A-");
} else if (marks >= 50 && marks <= 59) {
    document.write("You've got B");
} else if (marks >= 40 && marks <= 49) {
    document.write("You've got C");
} else if (marks >= 33 && marks <= 39) {
    document.write("You've got D");
} else {
    document.write("You have failed! Please be assiduous.");
}