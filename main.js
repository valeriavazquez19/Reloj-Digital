// Comentarios
//''
//alert ('Hola mundo desde una alerta de JavaScript')

// Consola
// console.log('Hola desde la consola');

// Declaración de una variable
// let nombre = "Valeria"
// Concatenar texto y variables
// console.log("Me llamo:",nombre);
// Variables no pueden ser palabras reservadas
// Al nombrarlas usaremos un nombre que te de idea de lo que estas almacenando
// Constantes
// const pi = 3.14;

// Tipos de datos
// Número
// let edad = 10;
// Cadena de texto
// let saludo = "Hola";
// Boleanos 2 valores
// let activo = true;

// Operadores Aritmeticos
// Suma +
// Resta -
// Multiplicación *
// División /
// Modulo o Residuo %
// Incremento ++
// Desincremento --

// Operadores Relacionales
// Mayor y Menor que < >
// Mayor o Igual >=
// Menor o Igual <=
// Igual que ==
// Diferente de !=

// Operadores Lógicos
// Y &
// Or ||
// Not !

// Reloj Digital
function currentTime(){
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    hh = (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;
    ss = (ss < 10) ? "0" + ss : ss;

    let time = hh + ":" + mm + ":" + ss;

    let reloj = document.querySelector('#reloj');
    reloj.innerHTML = time;
}

setInterval(currentTime, 1000)