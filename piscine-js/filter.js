function filter(arr, func) {
    let ar = []
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i], i, arr)) {
            ar.push(arr[i])
        }
    }
    return ar
}


function reject(arr, func) {
    let ar = []

    for (let i = 0; i < arr.length; i++) {
        if (!func(arr[i], i, arr)) {
            ar.push(arr[i])
        }
    }
    return ar
}

function partition(arr, func) {
    let ar0 = []
    let ar1 = []
    let ar2 = []
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i], i, arr)) {
            ar0.push(arr[i])
        }
        if (!func(arr[i], i, arr)) {
            ar1.push(arr[i])
        }
    }
    ar2.push(ar0)
    ar2.push(ar1)
    return ar2
}

