//npm install colors    instalando un paquete
//el package.json estan las listas de las dependencias
//el packsge-lock.json es la lista de los mudolos de terceros que necesita el modulo que descargamos
//y la carpeta node_modules contiene a los modulos descargados y tambien tiene su propio package-lock.json
const colors = require("colors");
// const colors = require('./si_ponemos una direccion'); y si no encuentra buscara por los pasos:
// 1 primero buscara en la lista de dependencias de package.json(carpeta node_modules)
// 2 luego en nuestros mudulos osea nuestro proyecto
// 3 En lo modulos nativos de nodejs
// 4 si no encuentra mostrara un error
console.log("hola mundo".red);
console.log("alejandra".bgMagenta);
console.log("ALEJANDRA ISABELLA PARRAGA CRUZ".rainbow);

//podemos instalar varios paquetes de modulos   npm i lodash colors daysjs bootstrap

//SI ELIMINO LA CARPETA node_modules solo basta hacer    npm i    o    npm install   para poder descargar los modulos porque ya estara la lista de los modulos en package.json

//con    npm remove nombre_modulo    se puede eliminar el modulo de la carpeta y tambien de la lista del package.json
