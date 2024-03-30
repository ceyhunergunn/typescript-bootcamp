// ********************** USING WATCH MODULE ******************************
let userName = "Ceyhun";
// userName = 3;
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

function add(n1: number, n2: number) {
  if (n1 + n2 > 0) {
    return n1 + n2;
  }
}

function clickHandler(message: string) {
  // let userName = "Ceyhun";
  console.log("Clicked! " + message);
}
button?.addEventListener("click", clickHandler.bind(null, "Ceyhun"));

// ********************** Working with Source Maps ******************************

// tsc --init => config file
// in tsconfig file

//"sourceMap": true,

// Developer tool => source sekmesi => ts fosyalarını da gösterir.

// ********************** rootDir and outDir ******************************

// tsc --init => config file
// in tsconfig file

// "outDir": "./dist"  => tsc ile oluşturulan dosyaların nerede oluşturulacağını gösterir
// "rootDir": "./src"  => tsc ile oluşturulan dosyaların nereden alınacağını gösterir
//"removeComments": true  => js dosyası oluşturuken yorumları temizler

// ********************** Stop Emitting Files on Compilation Errors ******************************

// tsc --init => config file
// in tsconfig file

//"noEmitOnError": false ise hata alsa dahi js dosyası oluşturulacaktır.
// true ise hatalı dosyalar hariç diğer dosyalar oluşturlacaktır

// ********************** Strict Compilation ******************************

// "strict": true değeri ve altındaki diğer değerler tammaen aynı şeyi yapıyor.
// "strict": true olmalı veya altında bulunan diğer değerler true olmalı

// "strict": true

// veya

// "noImplicitAny": true,
// "strictNullChecks": true,
// "strictFunctionTypes": true,
// "strictBindCallApply": true,
// "strictPropertyInitialization": true,
// "noImplicitThis": true,
// "useUnknownInCatchVariables": true,
// "alwaysStrict": true,
