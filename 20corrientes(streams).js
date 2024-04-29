const { writeFile } = require("fs/promises");
const archivoGrande = async () => {
  await writeFile("data/cuatro.txt", "hola mundo".repeat(10000));
};

archivoGrande();

const { createReadStream } = require("fs");

const stream = createReadStream("data/cuatro.txt", {
  encoding: "utf-8",
});

stream.on("data", (chunk) => {
  console.log(chunk);
});

stream.on("end", () => {
  console.log("ya termine de leerlo");
});

stream.on("error", (error) => {
  console.log(error);
});
