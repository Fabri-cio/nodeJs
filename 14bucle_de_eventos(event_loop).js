console.log("uno");
setTimeout(() => {
  console.log("dos");
}, 0); //igual esperara un tiempo porque js lo toma como una tarea pendiente
console.log("tres");

const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Bienvenido a la Pagina");
    return res.end();
  }

  if (req.url === "/about") {
    /**oodigo bloqueante
     nos dice que el hilo de node esta bloqueado
     y hasta que no termine no se podra entrar a otras peticiones 
     como ser '/' para eso se utiliza codigo asincrono para que las
     otras tareas se carguen y el hilo de nodejs no este bloqueado
    **/
    for (let i = 0; i < 100000; i++) {
      console.log(Math.random() * i);
    }
    return res.end("About Page");
  }

  res.end("Not Found");
});

server.listen(3000);
console.log("servidor escuchando");
