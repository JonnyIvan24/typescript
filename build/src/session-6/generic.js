"use strict";
function printGeneric(value) {
    console.log(`typeof T es: ${typeof value}`);
    console.log(`su valor es: ${value}`);
}
// si especificamos el tipado de T 
// el parámetro espera el mismo tipo
// printGeneric<string>(1)
printGeneric("test");
printGeneric(true);
printGeneric(() => { });
printGeneric({ id: 1 });
