const http = require("http");

const server = http.createServer(function (request, response) {
  console.log(request.url); //con esta propiedad se obtine / que significa el localhost y el favicon que es la imagen loguito pequeño de la pagina

  if (request.url === "/") {
    response.write("Welcome al servidor");
    return response.end();
  }

  if (request.url === "/about") {
    response.write("about page");
    return response.end();
  }

  response.write(`
    <h1>Not found</h1>
    <p>Pagina no encontrada</p>
    <a href='/'>volver a la pagina principal</a>
    `);
  response.end();
});
server.listen(3000);

console.log("server listen on port 3000");
