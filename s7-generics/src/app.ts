/*const names: Array<string> = []; //stirng[]
names[0].split(" ");

const promise = new Promise<string>((resolve, reject) => {
  setTimeout(() => {
    resolve("This is done");
  }, 2000);
});

promise.then((data) => {
  data.split(" ");
});

// generic functions

//1
function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}
const mergedObj = merge({ name: "Max", hobbies: ["Sports"] }, { age: 30 });

const mergedObj = merge<{ name: string; hobbies: string[] }, { age: number }>(
  { name: "Max", hobbies: ["Sports"] },
  { age: 30 }
);
const mergedObj2 = merge({ name: "Max" }, { age: 30 });

//2
interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descText = "Got no value.";
  if (element.length === 1) {
    descText = "Got 1 element.";
  } else if (element.length > 1) {
    descText = "Got " + element.length + " elements.";
  }
  return [element, descText];
}

console.log(countAndDescribe("Hi there"));

// the keyof constraint

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return "Value: " + obj[key];
}

console.log(extractAndConvert({ age: "Max" }, "age"));

// generic classes
class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) !== -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1); // -1
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Max");
textStorage.addItem("Ceyhun");
textStorage.removeItem("Max");
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();
numberStorage.addItem(30);
numberStorage.addItem(20);
numberStorage.removeItem(30);
console.log(numberStorage.getItems());

// const objStorage = new DataStorage<object>();
// const maxObj = { name: "Max" };
// objStorage.addItem(maxObj);
// objStorage.addItem({ name: "Ceyhun" });
// objStorage.removeItem(maxObj);
// console.log(objStorage.getItems());

// generic utility types

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  completeUntil: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = completeUntil;
  return courseGoal as CourseGoal;
}

const names: Readonly<string[]> = ["Max", "Anna"];
// names.push("Manu");
// names.pop();
*/
