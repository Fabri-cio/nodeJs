import express from "express"; //no funciona si no modificamos type module

const app = express(); //ejecutamos una funcion y la guardamos en una constante

//es igual que http pero mas resumido ose un framework alivia el trabajo
app.get("/", (req, res) => {
  res.send(`<h1>Bienvenido a la Pagina</h1>`);
});

app.get("/about", (req, res) => {
  res.send(`<h1>About Page</h1>`);
});
app.listen(3000);
console.log("escuchando en el puerto 3000");

//como es un framework no es parte de nodejs en su documentacion

//en si creamos un servidor web utilizando express
