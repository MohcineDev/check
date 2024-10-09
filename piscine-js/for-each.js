function forEach(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        return func(arr[i], i, arr)
    }
}
