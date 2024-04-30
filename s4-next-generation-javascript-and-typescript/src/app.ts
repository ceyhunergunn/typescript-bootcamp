/* 
//*************** "let" and "const" *************

const userName = "Ceyhun";
userName = "Ahmet";

let age = 24;
age = 25;

var result;

function add(a: number, b: number) {
  result = a + b;
  return result;
}
console.log(result);

if (age > 20) {
  let isOld = true;
}
console.log(isOld);

//************** arraw functions *************

const add = (a: number, b: number) => a + b;

const printOutput: (a: number | string) => void = (output) =>
  console.log(output);

const button = document.querySelector("button");

if (button) {
  button.addEventListener("click", (event) => console.log(event));
}

printOutput(add(2, 5));

//************** Default Function Parameters *************

const add = (a: number, b: number = 1) => a + b;

const printOutput: (a: number | string) => void = (output) =>
  console.log(output);

printOutput(add(2));


//************** The Spread Operator (...) *************

const hobbies = ["Sports", "Cooking"];
const activeHobbies = ["Hiking", ...hobbies];

activeHobbies.push(...hobbies);
console.log(...activeHobbies);

const person = {
  name: "Ceyhun",
  age: 24,
};

const copiedPerson = { ...person };
copiedPerson.name = "Ahmet";
console.log(person);
console.log(copiedPerson);

//************** Rest Parameters *************

const add = (...numbers: number[]) => {
  return numbers.reduce((res, value) => {
    return res + value;
  }, 0);
};

const addedNumbers = add(5, 10, 2, 3.7);
console.log(addedNumbers);

*/
//************** Array & Object Destructuring *************
const hobbies = ["Sports", "Cooking"];

const [hobby1, hobby2, ...remainingHobbies] = hobbies;

console.log(hobby1, hobby2);

const person = {
  firstName: "Ceyhun",
  age: 24,
};

const { firstName: userName, age } = person;

console.log(userName, age);
