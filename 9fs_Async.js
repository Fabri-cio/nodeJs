const fs = require("fs");

//no podemos guardar en una constante
fs.readFile("./data/first.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data);
  fs.readFile("./data/second.txt", (err, data) => {
    if (err) {
      console.log(err);
    }
    console.log(data.toString());
    fs.writeFile(
      "./data/third.txt",
      "escribiendo nuevos datos",
      { flag: "a" },
      (err, data) => {
        console.log(err);
        console.log(data);
        const cadena = "me estoy entrando";
        fs.writeFile(
          "./data/second.txt",
          cadena,
          { flag: "a" },
          (err, data) => {
            console.log(err);
            console.log(data);
          }
        );
      }
    );
  });
});

//callback hell
//utiliza mucho mejor los recursos del computador
//puede hacer multiples tareas al mismo tiempo
