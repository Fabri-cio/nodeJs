const { readFile } = require("fs");

const getText = (pathFile) => {
  return new Promise(function (resolve, reject) {
    readFile(pathFile, "utf-8", (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
};

// getText("data/first.txt")                        //a u  podemos decier que equivale a await getText('')
//   .then((result) => console.log(result))         // q i        estas dos lineas de codigo
//   .then(() => getText("data/second.txt"))
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));

async function read() {
  try {
    // throw new Error("Ocurrio un error inesperado"); el throw podemos poner donde sea
    const result = await getText("data/first.txt"); //nos dice que es codigo secuencial
    console.log(result);
    const result2 = await getText("data/second.txt");
    console.log(result2);
    const result3 = await getText("data/third.txt");
    console.log(result3);
  } catch (error) {
    console.log(error);
  }
}

read();
