const fs = require("fs");

//mostrando un archivo con utf-8
const first = fs.readFileSync("./data/first.txt", "utf-8");
console.log(first);

//mostrando un archivo con parseo
const second = fs.readFileSync("./data/second.txt");
console.log(second.toString());

//escribiendo en un texto
const title = " SOY YO WILLIAM";

fs.writeFileSync("./data/third.txt", title, {
  flag: "a",
});

//cons sincrono tenemos que esperar que una tarea finalice para que comienze otra
