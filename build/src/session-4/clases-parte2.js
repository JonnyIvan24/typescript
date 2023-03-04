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
