"use strict";
const e1 = {
    name: "Ceyhun",
    startDate: new Date(),
    privileges: ["create-server"],
};
function add(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
function printEmployeeInformations(employee) {
    console.log(employee.name);
    if ("privileges" in employee) {
        console.log(employee.privileges);
    }
    if ("startDate" in employee) {
        console.log(employee.startDate);
    }
}
printEmployeeInformations(e1);
class Car {
    drive() {
        console.log("Driving...");
    }
}
class Truck {
    drive() {
        console.log("Driving...");
    }
    loadCargo(amount) {
        console.log("Loading Cargo..." + amount);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(100);
    }
}
useVehicle(v1);
useVehicle(v2);
function moveAnimal(animal) {
    let speed;
    switch (animal.type) {
        case "bird":
            speed = animal.flyingSpeed;
            break;
        case "horse":
            speed = animal.runningSpeed;
            break;
    }
    console.log("Moving at speed: " + speed);
}
moveAnimal({ type: "horse", runningSpeed: 100 });
moveAnimal({ type: "bird", flyingSpeed: 100 });
const userInputElement = document.getElementById("user-output");
if (userInputElement) {
    userInputElement.value = "Hi There!";
}
const errorBag = {
    email: "Not a valid email",
    username: "Must start with a capital character",
};
//# sourceMappingURL=app.js.map