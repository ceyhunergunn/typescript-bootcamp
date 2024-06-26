// import _ from "lodash";

// declare var GLOBAL: any;

// console.log(_.shuffle([1, 2, 3]));

// console.log(GLOBAL);

import "reflect-metadata";
import { plainToClass } from "class-transformer";
import { validate } from "class-validator";
import { Product } from "./product.model";

const products = [
  { title: "A Carpet", price: 29.99 },
  { title: "A Book", price: 10.99 },
];

const newProd = new Product("", -5);
validate(newProd).then((errors) => {
  if (errors.length > 0) {
    console.log("Validation failed");
    console.log(errors);
  } else console.log(newProd.getInformation());
});

// const loadedProducts = products.map((prod) => {
//   return new Product(prod.title, prod.price);
// });

const loadedProducts = plainToClass(Product, products);

for (const product of loadedProducts) {
  console.log(product.getInformation());
}

// const p1 = new Product("A Book", 12.99);
// console.log(p1.getInformation());
