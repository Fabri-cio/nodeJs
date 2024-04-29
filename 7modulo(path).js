const path = require("path"); //puede ser en variables let

const filepath = path.join("/imagenes", "naturaleza", "//pasto"); //rutas validas con join
console.log(filepath);

console.log(path.basename(filepath));
console.log(path.dirname(filepath));
console.log(path.parse(filepath));
console.log(path.resolve("blanco"));
