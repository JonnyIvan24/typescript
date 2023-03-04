class ClassWithConstructor {
    id: number;
    constructor(id: number) {
        this.id = id
    }
}

let classWC = new ClassWithConstructor(10)

console.log(`classW = ${JSON.stringify(classWC)}`)
