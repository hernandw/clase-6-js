let persona = {
  nombre: "Juan",
  edad: 25,
  curso: "Javascript",
  saludar: function () {
    console.log("Hola como estas");
  },
};

console.log(persona.curso);
console.log(persona.saludar());

let valores = Object.values(persona);

console.log(valores);

let nombres = Object.keys(persona);

console.log(nombres);

/* METODO PUSH: agregar un elemento al final del array */

/* console.log(peliculas) */

/* peliculas.push('La monja') */

/* console.log(peliculas) */

let numbers = [1, 5, 7, 9];

console.log(numbers);

numbers.push(8);

console.log(numbers);

/* Mutables inmutables */
let peliculas = ["it", "titanic", "volver al futuro", "Madrigal"];
/* console.log(peliculas) */
let extrasPeliculas = peliculas;

extrasPeliculas.push("La monja 2");

console.log("Array modificado", extrasPeliculas);
console.log("Array original", peliculas);

let numero = 10;

let numeroExtra = numero;

console.log(numeroExtra);

numeroExtra = 30;

console.log("numero", numero);
console.log("numero Extra", numeroExtra);

let ciudades = ["RM", "Curico", "Osorno", "Validvia"];
ciudades.push("Antofagasta");
console.log(ciudades);
ciudades.pop();
console.log(ciudades);
ciudades.pop();
console.log(ciudades);
//Metodo Pop: eliminar el ultimo elemento del array

const edades = [15, 18, 12, 13];

console.log(edades);
edades.pop();
console.log(edades);
edades.pop();
console.log(edades);

/* METODO UNSHIFT: agrega un elemento al principio del array */
let ciudades2 = ["RM", "Curico", "Osorno", "Validvia"];
ciudades2.unshift("Arica");
console.log(ciudades2);

const frutas = ["Manzana", "Pera", "Piña"];
console.log(frutas);

frutas.push("mango");
console.log(frutas);

frutas.unshift("sandia");
console.log(frutas);

/* METODO shift: Elimina un elemento al principio del array */

frutas.shift();
console.log(frutas);
frutas.shift();
console.log(frutas);

/* METODO SPLIT: Nos permite dividir una cadena de texto en un arreglo.METODO */

let nombreCompleto = "Juan Perez Rodriguez";

let variables = nombreCompleto.split(" ");

console.log(variables);

let saludo = "Hola, como estas";

let nuevoSaludo = saludo.split(",");

console.log(nuevoSaludo);
let palabra = "amor";

let divide = palabra.split("");

console.log(divide);

let palabras = ["RM", "Calle Balmaceda", 2827];

let direccion = palabras.join(" - ");

console.log(direccion);

let amigos = ["Juan", "Maria", "Rebeca"];

let lista = amigos.join(",");
console.log(lista);

/* METODO MAP: obtener un nuevo array de elemento en base a otro array */

let num = [1, 5, 6, 7];

let numeroXdos = num.map(function (x) {
  return x * 2;
});

console.log(numeroXdos);

console.log("arreglo original", num);
console.log("array modificado", numeroXdos);

let clientes = [
  { nombre: "Juan", edad: 28 },
  { nombre: "Carlos", edad: 17 },
  { nombre: "Karla", edad: 27 },
  { nombre: "Josefa", edad: 18 },
];

let clientesModificados = clientes.map(function (x) {
  if (x.edad > 18) {
    x.adulto = true;
  } else {
    x.adulto = false;
  }

  return x;
});

console.log(clientesModificados);

let auto = {
  marca: "Toyota",
  octanaje: 95,
};

auto.modelo = "Corolla";

console.log(auto);

//me piden generar un numvo array con las url de cada red social

const redesSociales = ["facebook", "twitter", "instagram", "tiktok"];

const nuevaUrl = redesSociales.map(function (element) {
  let nickname = "oscar";
  let url = `https://${element}.com/${nickname}`;

  return url;
});

console.log(nuevaUrl);

let auto2 = {
  marca: "Toyota",
  octanaje: 95,
};

let marca = auto2.marca;

console.log("con el punto: ", marca);

let otra = auto2["marca"];

console.log("con los corchetes: ", otra);

/* METODO CONCAT: fusionar elemento uno o mas array */

let numeros1 = [1, 5, 7, 8];

let numeros2 = [4, 3, 2, 8, 9, 1];

let nombres2 = ["Juan", "Jose"];

let nuevoArray = numeros1.concat(numeros2, nombres2);

console.log(nuevoArray);

/* METODO SORT: ordena los elementos de un array */

let amigosInfa = ["Pedro", "Jose", "Melisa", "Paulina", "Alejandra"];

let orden = amigosInfa.sort();

console.log("array original", amigosInfa);
console.log("array modificado", orden);

let numeros3 = [4, 3, 2, 8, 9, 1];

let numeros4 = [5, 8, 9];

let nombres3 = ["Juan", "Jose"];

let nuevoArrayOrden = numeros3.concat(numeros4, nombres3);
console.log(nuevoArrayOrden);

const orderNuevoArray = nuevoArrayOrden.sort();

console.log(orderNuevoArray);

const monedas = [
  "dolar",
  "peso chileno",
  "peso mexicano",
  "peso argentino",
  "euro",
  "libra",
  "sol",
  "boliviano",
];

const ordenMonedas = monedas.reverse();

console.log(ordenMonedas);

const notas = [3, 20, 12, 1, 10, 100];

console.log(notas.sort());

let numerosOrdenados = notas.sort(function (a, b) {
  return a - b;
});

console.log(numerosOrdenados);

let ejemploNumeros = [1, 5, 20, 23];
console.log(
  ejemploNumeros.sort(function (a, b) {
    return a - b;
  })
);

let pokemon = ["Charizard", "Charmeleon", "Charmander"];

console.log(pokemon.reverse());

let clientesBank = [
  { nombre: "Juan", edad: 28 },
  { nombre: "Carlos", edad: 22 },
  { nombre: "Karla", edad: 27 },
];

let listaNombres = clientesBank.forEach(function (x) {
  console.log(x.nombre);
});

console.log("array original", clientesBank);
console.log("array ordenado", listaNombres);

/* METODO FINDINDEX: devuelve el indice del primer elemento que cumpla la condicion */

var productos = [
  { nombre: "coca-cola", precio: 990 },
  { nombre: "kapo", precio: 100 },
  { nombre: "papas fritas", precio: 590 },
  { nombre: "ramitas", precio: 290 },
  { nombre: "kapo", precio: 190 },
];

let busquedaIndex = productos.findIndex(function (x) {
  return x.precio > 100;
});

console.log(busquedaIndex);

let notas2 = [20, 15, 8, 7];

let busquedaIndex2 = notas2.findIndex(function (nota) {
  return nota > 30;
});

console.log(busquedaIndex2);

const datosPersonal = {
  nombre: "Juan",
  edad: 25,
  curso: "Javascript",
};


let nombrePersona = datosPersonal.nombre;




let { curso } = datosPersonal;


console.log(curso);


const traumatologia = [
    {
        id: 1,
        nombre: "Pediatria",
        url: "pediatria"
    },
    {
        id: 2,
        nombre: "Traumatologia",
        url: "traumatologia"
    },
    {
        id: 3,
        nombre: "Neurologia",
        url: "neurologia"
    }
    
]

console.log(traumatologia)

