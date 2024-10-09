function fold(arr, func, accu) {
    for (let i = 0; i < arr.length; i++) {
        accu = func(accu, arr[i])
    }
    return accu
}

function foldRight(arr, func, accu) {
    for (let i = arr.length - 1; i >= 0; i--) {
        accu = func(accu, arr[i])
    }
    return accu
}

function reduce(arr, func) {
    arr.length < 1 ? Error("fdsf") : null
    let a = arr[0]
    for (let i = 1; i < arr.length; i++) {
        a = func(a, arr[i])

    }
    return a
}


function reduceRight(arr, func) {
    arr.length < 1 ? Error("fdsf") : null
    let a = arr[arr.length - 1]
    for (let i = arr.length - 2; i >= 0; i--) {
        a = func(a, arr[i])

    }
    return a
}