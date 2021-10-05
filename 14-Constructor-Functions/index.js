// COnstructor function
class Car {
    constructor(number, model) {
        this.number = number;
        this.model = model;
        this.speed = function (distance, time) {
            var velocity = distance / time;
            console.log("The Car speed is " + velocity + "m/s");
        },
        this.displayCar = function () {
            console.log("The Car number is " + this.number);
            console.log("The Car model is " + this.model);
        }
    };
};

var myCar = new Car(3050, "Harley Davidson");
var herCar = new Car(3456, "Mercedes Benz");

console.log(myCar.displayCar());
console.log(myCar.speed(100,20));

console.log(herCar.displayCar());






