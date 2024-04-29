//promises utiliza promesas en vez de callbakc
const { readFile } = require("fs/promises");
//aqui podemos resumir mas todavia el codigo
async function read() {
  try {
    // const result = await fs.promises.readFile("data/first.txt", "utf-8"); //es lo mismo si declaramos una constante fs.promises.readfile()
    const result = await readFile("data/first.txt", "utf-8");
    console.log(result);
    const result2 = await readFile("data/second.txt", "utf-8");
    console.log(result2);
    const result3 = await readFile("data/third.txt", "utf-8");
    console.log(result3);
  } catch (error) {
    console.log(error);
  }
}

read();
