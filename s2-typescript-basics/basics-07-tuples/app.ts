// const person: {
//   name: string;
//   age: number;
// } = {
const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: "Ceyhun",
  age: 24,
  hobbies: ["Sports", "Cooking"],
  role: [2, "author"],
};

// person.role.push("admin");
// person.role[1] = 10;
// person.role = [0, "admin", "user"];

console.log(person.name);
console.log(person);
