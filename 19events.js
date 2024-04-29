const EventEmitter = require("events"); //tremos el modulo events

const customEmitter = new EventEmitter(); //en una constante instanciamos un objeto de tipo EventEmitter

customEmitter.on("response", (data, data2) => {
  //escucha el evento
  //es como el click evento de un boton
  console.log("received");
  console.log(data, data2);
});

customEmitter.emit("response", "hola", "william"); //emitir lanzar el evento con dos argumentos que se envia al escuchador de eventos

//nos da el ejemplo de que esto funciona en http en las peticiones o respuestas de un servidor eventos en si
