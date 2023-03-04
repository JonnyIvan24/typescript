class ClassWithConstructor {
    id: number;
    constructor(id: number) {
        this.id = id
    }
}

let classWC = new ClassWithConstructor(10)

console.log(`classW = ${JSON.stringify(classWC)}`)

class ClassWithPublicProperty {
    public id: number | undefined
}

let myClassWithPublicP = new ClassWithPublicProperty()

myClassWithPublicP.id = 10
console.log(myClassWithPublicP.id)

class ClassWithPrivateProperty {
    private id: number
    constructor (id: number) {
        this.id = id
    }

    print() {
        console.log(this.id)
    }
}

let myClassWithPrivateP = new ClassWithPrivateProperty(10)
// no podemos acceder a una propiedad privada
// fuera de la clase
// myClassWithPrivateP.id = 20
// pero utilizar métodos públicos para acceder a ellos
myClassWithPrivateP.print()
