let text: string = 'hola'
text = 'hola2'

console.log(text)

function suma(num1: number, num2: number): number {
    return num1 + num2
}

console.log(suma(1, 2))
let a: string = ''
let booleanos: boolean = false
let arreglos: string[] = ['hola', a, text]
let objetos: object = {id: 1, nombre: 'Pedro'}
let cualquierDato: any = '' // no se recomienda

// null no es lo mismo que void, null es considerado un valor
// mientras que void es ausencia de cualquier tipo de valor
let nulos: null = null
function imprimirEnConsola (mensaje: string): void {
    console.log(mensaje)
}

// también tenemos la palabra undefined para saber si una propiedad esta definida
// let b: object = {id: 2}
// if (b.nombre === undefined) {
//     b = {id: b.id, nombre: ''}
// }

