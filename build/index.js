"use strict";
let text = 'hola';
text = 'hola2';
console.log(text);
function suma(num1, num2) {
    return num1 + num2;
}
console.log(suma(1, 2));
let a = '';
let booleanos = false;
let arreglos = ['hola', a, text];
let objetos = { id: 1, nombre: 'Pedro' };
let cualquierDato = ''; // no se recomienda
// null no es lo mismo que void, null es considerado un valor
// mientras que void es ausencia de cualquier tipo de valor
let nulos = null;
function imprimirEnConsola(mensaje) {
    console.log(mensaje);
}
// let b: object = {id: 2}
// if (b.nombre === undefined) {
//     b = {id: b.id, nombre: ''}
// }
