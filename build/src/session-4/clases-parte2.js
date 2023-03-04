"use strict";
class ClassWithConstructor {
    constructor(id) {
        this.id = id;
    }
}
let classWC = new ClassWithConstructor(10);
console.log(`classW = ${JSON.stringify(classWC)}`);
class ClassWithPublicProperty {
}
let myClassWithPublicP = new ClassWithPublicProperty();
myClassWithPublicP.id = 10;
console.log(myClassWithPublicP.id);
class ClassWithPrivateProperty {
    constructor(id) {
        this.id = id;
    }
    print() {
        console.log(this.id);
    }
}
let myClassWithPrivateP = new ClassWithPrivateProperty(10);
// no podemos acceder a una propiedad privada
// fuera de la clase
// myClassWithPrivateP.id = 20
// pero utilizar métodos públicos para acceder a ellos
myClassWithPrivateP.print();
class ClassMods {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
let myClassMods = new ClassMods(2, 'Juan');
console.log(`myClassMods.id = ${myClassMods.id}`);
// lo siguiente nos da error ya que name es privado
// console.log(`myClassMods.name = ${myClassMods.name}`)
class ClassReadonly {
    constructor(name) {
        this.name = name;
    }
    setName(name) {
        // no podemos modificar propiedades de encapsulado readonly
        // this.name = name
    }
}
let myClassReadonly = new ClassReadonly('Juan');
// no podemos modificar propiedades de encapsulado readonly
// myClassReadonly.name = 'Iván'
console.log(myClassReadonly.name);
class ClassWithAccesors {
    constructor() {
        this._id = 10;
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
}
let myClasswithAccesors = new ClassWithAccesors();
console.log(myClasswithAccesors.id);
myClasswithAccesors.id = 100;
console.log(myClasswithAccesors.id);
