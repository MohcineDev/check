function arrToSet(arr) {
    return new Set(arr)
}

function arrToStr(arr) {
    return arr.join('')
}
function setToArr(set) {
    return Array.from(set)

}

function setToStr(set) {
    return Array.from(set).join('')
}
function strToArr(str) {
    return Array.from(str)
}


function strToSet(str) {
    return new Set(Array.from(str))
}

function mapToObj(map) {
    return Object.fromEntries(map)
}

function objToArr(obj) {
    return Object.values(obj)
}
function objToMap(obj) {
    return new Map(Object.entries(obj))
}
function arrToObj(arr) {
    return Object.assign({}, arr)
}


function strToObj(str) {
    return Object.assign({}, str)

}


function superTypeOf(a) {
    if (a instanceof Set)
        return 'Set'
    else if (a instanceof Map)
        return 'Map'
    else if (typeof a === 'number')
        return 'Number'
    else if (typeof (a) === 'string' || a === "")

        return 'String'
    else if (Array.isArray(a))
        return 'Array'

    else if (a === null)
        return 'null'
    else if (typeof (a) === 'object') {

        return 'Object'
    }

    else if (typeof (a) === 'undefined')
        return 'undefined'
    else if (typeof (a) === 'function')
        return 'Function'

}