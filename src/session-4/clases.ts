class SimpleClass {
    id: number | undefined;
    print(): void {
        console.log(`SimpleClass.id = ${this.id}`)
    }
}

let mySimpleClass = new SimpleClass()
mySimpleClass.id = 10
mySimpleClass.print()

let mySimpleClassA = new SimpleClass()
mySimpleClassA.id = 30
mySimpleClassA.print()