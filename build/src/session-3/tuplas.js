"use strict";
let tupla1;
tupla1 = ['hola', true];
// las siguientes asignaciones nos da error 
// por que una tupla typeScript la considera fuertemente tipada
// tupla1 = ['hola']
// tupla1 = ['hola mundo', false, 'hola']
// tupla1 = [false, 'hola']
console.log(tupla1[0]);
console.log(tupla1[1]);
// let tuplaString = tupla1[0]
// let tuplaBoolean = tupla1[1]
let [tuplaString, tuplaBoolean] = tupla1;
console.log(tuplaString);
console.log(tuplaBoolean);
let complexObj = {
    aNum: 1,
    bStr: 'name',
    cBool: true
};
let { bStr, cBool, aNum } = complexObj;
console.log(aNum);
console.log(bStr);
console.log(cBool);
