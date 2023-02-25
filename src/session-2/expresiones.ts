const value: number = 10

// let message: string
// if (value > 10) {
//     message = myString(value)
// } else {
//     message = 'El valor es igual o menor que 10'
// }

const message: string = value > 10 ?
myString(value) : 
'El valor es igual o menor que 10'

console.log(message)

function myString(a: any): string {
    // .... más código
    return 'El valor es mayor que 10'
}
