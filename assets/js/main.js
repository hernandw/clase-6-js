let persona = {
    nombre: 'Juan',
    edad: 25,
    curso: 'Javascript',
    saludar: function () {
        console.log('Hola como estas')
    }
} 



console.log(persona.curso)
console.log(persona.saludar())

let valores = Object.values(persona);

console.log(valores)

let nombres = Object.keys(persona)

console.log(nombres)

/* METODO PUSH: agregar un elemento al final del array */



/* console.log(peliculas) */

/* peliculas.push('La monja') */

/* console.log(peliculas) */


let numbers = [1, 5, 7, 9]

console.log(numbers)

numbers.push(8)

console.log(numbers)

/* Mutables inmutables */
let peliculas = ["it", "titanic", "volver al futuro", "Madrigal"];
/* console.log(peliculas) */
let extrasPeliculas = peliculas

extrasPeliculas.push('La monja 2')

console.log('Array modificado', extrasPeliculas)
console.log('Array original', peliculas)

let numero = 10

let numeroExtra = numero

console.log(numeroExtra)

numeroExtra = 30

console.log('numero', numero)
console.log('numero Extra', numeroExtra)

let ciudades = ['RM', 'Curico', 'Osorno', 'Validvia']
ciudades.push('Antofagasta') 
console.log(ciudades)
ciudades.pop()
console.log(ciudades)
ciudades.pop()
console.log(ciudades)
//Metodo Pop: eliminar el ultimo elemento del array

const edades = [15, 18, 12, 13]


console.log(edades)
edades.pop()
console.log(edades)
edades.pop()
console.log(edades)


/* METODO UNSHIFT: agrega un elemento al principio del array */
let ciudades2 = ["RM", "Curico", "Osorno", "Validvia"];
ciudades2.unshift('Arica')
console.log(ciudades2)




const frutas = ['Manzana', 'Pera', 'Piña']
console.log(frutas)

frutas.push('mango')
console.log(frutas)

frutas.unshift('sandia')
console.log(frutas)

/* METODO shift: Elimina un elemento al principio del array */


frutas.shift()
console.log(frutas)
frutas.shift()
console.log(frutas)

/* METODO SPLIT: Nos permite dividir una cadena de texto en un arreglo.METODO */

let nombreCompleto = 'Juan Perez Rodriguez'

let variables = nombreCompleto.split(' ')

console.log(variables)

let saludo = 'Hola, como estas'

let nuevoSaludo = saludo.split(',')

console.log(nuevoSaludo)
let palabra = 'amor'

let divide = palabra.split('')

console.log(divide)

let palabras = ['RM', 'Calle Balmaceda', 2827]

let direccion = palabras.join(' - ')

console.log(direccion)

let amigos = ['Juan', 'Maria', 'Rebeca']

let lista = amigos.join(',')
console.log(lista)

/* METODO MAP: obtener un nuevo array de elemento en base a otro array */


let num = [1, 5, 6, 7]

let numeroXdos = num.map(function (x) {
    return x * 2
})

console.log(numeroXdos)

console.log('arreglo original', num)
console.log('array modificado', numeroXdos)


let clientes = [
  { nombre: "Juan", edad: 28 },
  { nombre: "Carlos", edad: 17 },
  { nombre: "Karla", edad: 27 },
  { nombre: "Josefa", edad: 18 },
];

let clientesModificados = clientes.map(function (x) {
    
    if (x.edad > 18) {
        x.adulto = true
    } else {
        x.adulto = false
    }

    return x
})

console.log(clientesModificados)


let auto = {
    marca: 'Toyota',
    octanaje: 95

}

auto.modelo = 'Corolla'

console.log(auto)


//me piden generar un numvo array con las url de cada red social

const redesSociales = ['facebook', 'twitter', 'instagram', 'tiktok']

const nuevaUrl = redesSociales.map(function (element) {
    let nickname = 'oscar'
    let url = `https://${element}.com/${nickname}`

return url

})

console.log(nuevaUrl)


let auto2 = {
  marca: "Toyota",
  octanaje: 95,
};


let marca = auto2.marca

console.log('con el punto: ', marca)

let otra = auto2['marca']


console.log('con los corchetes: ', otra)


