var myCallback = (text) => {
    console.log('myCallback called with ' + text)
}

function withCallbackArg(message, callbackfn) {
    console.log('withCallback called, message ' + message)
    callbackfn(message + ' from withCallback')
}

// console.log(myCallback('initial text'))
// no da error
console.log(withCallbackArg('initial text', myCallback))
// da error por que espera que sea una función
console.log(withCallbackArg('initial text', 'myCallback'))
