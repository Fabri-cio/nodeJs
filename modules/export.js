//1 guardando en exports una constante
// const lista = [1, 2, 3, 4, 5, 6];
// console.log(lista);
// module.exports = lista;
// console.log(module); //revisando

//2 exportando en un objeto
const num = 1;
const cad = "wil";
const list = [1, 2, 4];
const bool = true;
const objeto = {
  name: "william",
  year: 31,
  sex: true,
};

//estamos exportando datos atravex de un objeto
// const object = {
//   num,
//   cad,
//   list,
//   bool,
//   objeto,
// };

// module.exports = object;

//exportando el objeto sin constante
// module.exports = {
//   num,
//   cad,
//   list,
//   bool,
//   objeto,
// };

console.log(module);
module.exports.numero = num;
module.exports.cadena = cad;
module.exports.lista = list;
module.exports.booleano = bool;
module.exports.objeto = objeto;
console.log(module);
