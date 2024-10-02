function split(str, sep) {
    let arr = []
    let start = 0
    let count = 0
    if (sep.length > 0) {
        for (let i = 0; i < str.length; i++) {

            if (sep == str.substr(i, sep.length)) {
                if (start > 0) {

                    arr.push(str.substr(start, count - sep.length))
                } else {
                    arr.push(str.substr(start, count))

                }

                start = i + sep.length
                count = 0
            }
            if (i + sep.length > str.length) {
                arr.push(str.substr(start))

            }
            count++

        }
    } else {
        for (let i = 0; i < str.length; i++) {
            arr.push(str[i])
        }

    }
    return arr
}

function join(arr, sepa) {
    let res = ''
    let sep = sepa || ''
    for (let i = 0; i < arr.length; i++) {
        let a = arr[i] + sep
        if (i == arr.length - 1) {
            a = arr[i]
        }
        res += a
    }
    return res
}
 