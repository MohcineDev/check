is.num = (a) => {
    if (typeof (a) == "number") {
        return true
    }
    return false
}

is.nan = (a) => {
    if (Number.isNaN(a)) {
        return true
    }
    return false
}


is.str = (a) => {
    if (typeof (a) === "string") {
        return true
    }
    return false
}

is.bool = (a) => {
    if (typeof (a) == "boolean") {
        return true
    }
    return false
}

is.undef = (a) => {
    if (typeof (a) == "undefined") {
        return true
    } (a)
    return false
}

is.arr = (a) => {
    if (Array.isArray(a)) {
        return true
    }
    return false
}

is.def = a => typeof a !== 'undefined'


is.obj = (a) => {
    if (typeof a === "object" && a !== null && !Array.isArray(a)) {
        return true
    }
    return false
}

is.fun = (a) => {
    if (typeof (a) == "function") {
        return true
    }
    return false
}
is.truthy = (a) => Boolean(a)

is.falsy = (a) => !Boolean(a)   
