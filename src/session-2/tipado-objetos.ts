function printCoord (pt: { x: number, y: number }) {
    console.log('La coordenada x es igual a ' + pt.x)
    console.log('La coordenada y es igual a ' + pt.y)
}

let myObject = {
    x: 1,
    y: 10
}

printCoord(myObject)
