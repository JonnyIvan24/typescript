"use strict";
function printObject(obj) {
    console.log(obj);
}
printObject(1);
printObject('hola');
//  types guards
function addWithUnion(arg1, arg2) {
    if (typeof arg1 === 'string') {
        console.log('el parámetro arg1 es un string');
        return arg1 + arg2;
    }
}
console.log(addWithUnion('hola ', 'mundo'));
function addWithTypeAlias(arg1, arg2) {
    if (typeof arg1 === 'string') {
        console.log('el parámetro arg1 es un string');
        return arg1 + arg2;
    }
}
