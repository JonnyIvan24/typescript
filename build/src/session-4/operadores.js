"use strict";
function printString(obj) {
    if ('id' in obj) {
        console.log(`obj.name : ${obj.name}`);
    }
    if ('descr' in obj) {
        console.log(`obj.descr : ${obj.descr}`);
    }
}
printString({ id: 1, name: 'Juan' });
printString({ descr: 'test', value: 2 });
function getProperty(key, value) {
    console.log(`${key} = ${value[key]}`);
}
getProperty('name', { id: 1, name: 'Juan' });
// getProperty('telephone', {id: 1, name: 'Juan'})
