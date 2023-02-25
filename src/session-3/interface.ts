interface IdName {
    id: number;
    name: string;
}

let idName: IdName = {
    id: 1,
    name: 'Johnny'
}

// nos da error por que se tiene  que especificar
// todas las propiedades
// let id: IdName = {
//     id: 1
// }


interface weakType {
    id?: number;
    name?: string;
}

// nos da error por que no podemos asignar
// propiedades que no existen en la interface
// let test: weakType = {
//     lastName: 'Uribe'
// }
