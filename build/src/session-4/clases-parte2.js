"use strict";
class ClassWithConstructor {
    constructor(id) {
        this.id = id;
    }
}
let classWC = new ClassWithConstructor(10);
console.log(`classW = ${JSON.stringify(classWC)}`);
