"use strict";
const value = 10;
// let message: string
// if (value > 10) {
//     message = myString(value)
// } else {
//     message = 'El valor es igual o menor que 10'
// }
const message = value > 10 ?
    myString(value) :
    'El valor es igual o menor que 10';
console.log(message);
function myString(a) {
    // .... más código
    return 'El valor es mayor que 10';
}
