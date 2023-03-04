// in
interface IdName {
    id: number;
    name: string;
}

interface DescrValue {
    descr: string;
    value: number;
}

function printString(obj: IdName | DescrValue) {
    if ('id' in obj) {
        console.log(`obj.name : ${obj.name}`)
    }
    if ('descr' in obj) {
        console.log(`obj.descr : ${obj.descr}`)
    }
}

printString({id: 1, name: 'Juan'})
printString({descr: 'test', value: 2})

// keyof
type IdNameProperty = keyof IdName

function getProperty(
    key: IdNameProperty, value: IdName
) {
    console.log(`${key} = ${value[key]}`)
}

getProperty('name', {id: 1, name: 'Juan'})
// getProperty('telephone', {id: 1, name: 'Juan'})
