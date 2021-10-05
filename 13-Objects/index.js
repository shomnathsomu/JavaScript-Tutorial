// var myArray = new Array();
// var myArray = [];
// myArray[0] = 4050;
// myArray[1] = "NISSAN";

// console.log(myArray);

// var myCar = new Object();
// myCar.number = 4050;
// myCar.model = "Harley Davidson";
// myCar.speed = function calSpeed(distance, time){
//     var v = distance/time;
//     return v;
// };

var myCar = {
    number : 4050,
    model : "Harley Davidson",
    speed : function(distance, time){
        var velocity = distance/time;
        return velocity;
    },

    displayCar : function(){
        console.log("The Car number is " + this.number);
        console.log("The Car model is " + this.model);
        console.log("The Car speed is " + this.speed(96,8) + "m/s");
    }
};

// console.log(myCar.number);
// console.log(myCar.model);
// console.log(myCar);
// console.log(myCar.speed(60,5) + "m/s");

console.log(myCar.displayCar());





