"use strict";
class ClassStatic {
    static printTwo(text) {
        console.log('2');
    }
    printNumber() {
        console.log('10');
    }
}
let myClassStatic = new ClassStatic();
myClassStatic.printNumber();
// los métodos estaticos no pueden ser llamados 
// por objetos de la clase
// myClassStatic.printTwo()
ClassStatic.printTwo('texto');
// como sabemos los métodos comunes necesitan 
// ser llamados desde una instacia de la clase
// ClassStatic.printNumber()
class StaticProperty {
    updateCount() {
        StaticProperty.count++;
    }
}
StaticProperty.count = 0;
let myStaticProperty = new StaticProperty();
console.log(StaticProperty.count);
myStaticProperty.updateCount();
console.log(StaticProperty.count);
// El ambito de la propiedad estatica
// es el mismo para todo el código
// no importa que instancia lo modifique
let myStaticProperty2 = new StaticProperty();
myStaticProperty2.updateCount();
console.log(StaticProperty.count);
