"use strict";
class NumberNameClass {
    constructor() {
        this.name = 'test';
        // si declaramos todas las proiedades de la interfaz
        // incluidas las heredadas ts marcara error
        this.id = 10;
    }
}
let myStringId = { id: 1 };
let myMultiple = {
    id: 1,
    name: 'Juan',
    print: () => {
        console.log('hola');
    },
    lastName: 'Uribe'
};
// ---------- Herencia en clases -----------
class BaseClass {
    constructor() {
        this.id = 1;
    }
}
class MyClass extends BaseClass {
    constructor() {
        super(...arguments);
        this.name = '';
    }
    print() {
    }
}
let myClass = {
    id: 10,
    name: 'Juan',
    print: () => { }
};
