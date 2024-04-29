const { readFile, readSync } = require("fs");
const { promisify } = require("util");

//convierte funciones que siguen el patron de devolucion de llamada(callback) en funciones que devuelven promesas 
const readFilePromise = promisify(readFile);

async function read() {
  try {
    const result = await readFilePromise("data/first.txt", "utf-8");
    console.log(result);
    const result2 = await readFilePromise("data/second.txt", "utf-8");
    console.log(result2);
    const result3 = await readFilePromise("data/third.txt", "utf-8");
    console.log(result3);
  } catch (error) {
    console.log(error);
  }
}

read();
