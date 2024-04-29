//con npm init -y puedo iniciar el ecosistema de node por defecto
//para poder utilizar imports y exports tengo que poner en package.json   "type": "module",
import math2, { add, substract, multiply, divide } from "./modules/math2.js";


console.table({
  suma: math2.add(5, 5),
  resta: math2.substract(5, 5),
  multiplicacion: math2.multiply(5, 5),
  divicion: math2.divide(5, 5),
});
console.table({
  sum: add(2, 2),
  rest: substract(2, 2),
  multi: multiply(2, 2),
  div: divide(2, 2),
});
