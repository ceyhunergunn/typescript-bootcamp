/* // Intersection Types

type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

// interface EvelatedEmployee extends Admin, Employee

const e1: ElevatedEmployee = {
  name: "Ceyhun",
  startDate: new Date(),
  privileges: ["create-server"],
};

type Combinable = string | number;
type Numeric = boolean | number;

type Universal = Combinable & Numeric;

function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}
// Type Guards

type UnknownEmployee = Employee | Admin;

function printEmployeeInformations(employee: UnknownEmployee) {
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
  loadCargo(amount: number) {
    console.log("Loading Cargo..." + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  //   if ("loadCargo" in vehicle) {
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(100);
  }
}

useVehicle(v1);
useVehicle(v2);

// Discriminated Unions

interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
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

// Type Casting

// const userInputElement = <HTMLInputElement>(
//   document.getElementById("user-output")!
// );

// const userInputElement = document.getElementById(
//   "user-output"
// )! as HTMLInputElement;

// userInputElement.value = "Hi There!";

const userInputElement = document.getElementById("user-output");
if (userInputElement) {
  (userInputElement as HTMLInputElement).value = "Hi There!";
}

// Index Properties

interface ErrorContainer {
  // {
  //   email:"Not a valid email",
  //   username:"Must start with a capital character"
  // }
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  email: "Not a valid email",
  username: "Must start with a capital character",
};

// Function Overloads

type Combinable = string | number;

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: number, b: string): string;
function add(a: string, b: number): string;

function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result = add("Ceyhun", "Ergün") as string;

// Optional Chaining


const fetchedUserData = {
  id: "u1",
  name: "Ceyhun",
  // job: {
  //   title: "CEO",
  //   description: "My Own Company",
  // },
};

console.log(fetchedUserData?.job?.title);

// Nullish Coalescing
*/

const userInput = "";

const storedDate = userInput ?? "Default";

console.log(storedDate);
