class SimpleClass {
    id: number | undefined;
    print(): void {
        console.log('SimpleClass.print() ah sido llamado')
    }
}

let mySimpleClass = new SimpleClass()

mySimpleClass.print()
