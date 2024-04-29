//fetch es una API moderna
//no necesitamos traer modulos para que funcione fetchs
//  --1 consumir una api
//esto ya no da
// fetch("https://jsonplaceholder.typicode.com/posts");
//     .then(res => res.json());
//     .then(data => console.log(data))

//  --2 consumir una api
//esto solo funciona con EcmasScript Modules osea "type":"module"
// async function cargarDatos() {
//   try {
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//     const data = await res.json(); //tomar en cuenta que todo await es una promesa
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }

// cargarDatos();

//  --3 consumir una api con las nuevas caracteristicas sin async y tampoco la funcion
// pero recordemos que funciona con type module de EcmaScript pasando los añoss
try {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json(); //tomar en cuenta que todo await es una promesa
  console.log(data);
} catch (error) {
  console.log(error);
}

// en si hacemos una solicitud HTTP a un servicion web que devuelve datos en un formato JSON

//ver el video de 2022 de fazt
