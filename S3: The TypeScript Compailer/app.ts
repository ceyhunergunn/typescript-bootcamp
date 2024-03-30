// ********************** USING WATCH MODULE ******************************
let userName = "Ceyhun";

console.log(userName);

// ********************** Compiling the Entire Project / Multiple Files ******************************

// tsc --init => config file
// tsc -w => watch mode

// ********************** Including & Excluding Files ******************************

// tsc --init => config file
// in tsconfig file
// "exclude": ["node_modules"],
// "include": ["app.ts", "analytics.ts"]
// "files": ["app.ts", "analytics.ts"]

// ********************** Setting a Compilation Target ******************************

// tsc --init => config file
// in tsconfig file

// "target": "es2016"

// ********************** Understanding TypeScript Core Libs ******************************

// tsc --init => config file
// in tsconfig file

// "lib": [
//     "dom",
//     "ES6",
//     "DOM.Iterable",
//     "ScriptHost"
//  ]

const button = document.querySelector("button")!;

button?.addEventListener("click", () => {
  console.log("Clicked!");
});