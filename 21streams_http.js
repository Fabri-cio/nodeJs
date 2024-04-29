const http = require("http");
const { createReadStream } = require("fs");

const server = http.createServer((req, res) => {
  const fileStream = createReadStream("data/cuatro.txt", {
    encoding: "utf-8",
  });

  fileStream.on("data", (chunk) => {
    fileStream.pipe(res); //el pipe nos dice que va a pasar los datos a otra funcion osea a response (res)
  });

  fileStream.on("error", (error) => {
    console.log(error);
  });
});

server.listen(3000);
console.log("Servidor escuchando en el puert 3000");

//podemos ir a modo desarrollador en el navegador y ver en red la carga lo que tardo en cargarse
//tambien podemos a la documentacionde nodejs modules
