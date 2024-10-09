function adder(arr, init) {

    let a = init || 0
    return arr.reduce((total, elem) => {
        return total += elem
    }, a)
}

function sumOrMul(arr, init) {
    let a = init || 0
    return arr.reduce((total, elem) => {
        if (elem % 2 == 0) {
            return total *= elem
        } else {
            return total += elem

        }
    }, a)
}

function funcExec(arr, init) {
    let a = init || 0
    return arr.reduce((result, elem) => {
        return result = elem(result)
    }, a)
}