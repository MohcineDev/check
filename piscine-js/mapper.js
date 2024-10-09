function map(arr, func) {
    let a = []
    for (let i = 0; i < arr.length; i++) {
        a.push(func(arr[i], i, arr))
    }
    return a
}

function flatMap(arr, func) {
    let arr2 = []
    for (let i = 0; i < arr.length; i++) {
        let ar = func(arr[i], i, arr)
        if (ar != undefined && typeof (ar) != "string" && ar.length >= 1) {
            for (let j = 0; j < ar.length; j++) {
                arr2.push(ar[j])
            }
            continue
        }
        arr2.push(ar)

    }

    return arr2
}
