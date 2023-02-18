function printObject(obj: number | string) {
    console.log(obj)
}

printObject(1)
printObject('hola')
//  types guards
function addWithUnion (
    arg1: string | number,
    arg2: string | number
) {
    if (typeof arg1 === 'string') {
        console.log('el parámetro arg1 es un string')
        return arg1 + arg2
    }
}

console.log(addWithUnion('hola ', 'mundo'))

// tipos perzonalizados
type StringOrNumber = string | number

function addWithTypeAlias (
    arg1: StringOrNumber,
    arg2: StringOrNumber
) {
    if (typeof arg1 === 'string') {
        console.log('el parámetro arg1 es un string')
        return arg1 + arg2
    }
}
