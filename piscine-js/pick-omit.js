function pick(obj, strORarr) {
    let keys = Object.keys(obj)
    let newObj = {}
    if (Array.isArray(strORarr)) {

        for (let i = 0; i < strORarr.length; i++) {
            if (keys.includes(strORarr[i])) {
                newObj[strORarr[i]] = obj[strORarr[i]]
            }
        }
    } else {

        if (keys.includes(strORarr)) {
            newObj[strORarr] = obj[strORarr]
        }
    }

    return newObj
}

function omit(obj, strORarr) {
    let keys = Object.keys(obj)
    let newObj = {}
    if (Array.isArray(strORarr)) {
        for (let i = 0; i < keys.length; i++) {
            if (!strORarr.includes(keys[i])) {
                newObj[keys[i]] = obj[keys[i]]

            }
        }
    } else {
        for (let i = 0; i < keys.length; i++) {
            if (keys[i] != strORarr) {
                newObj[keys[i]] = obj[keys[i]]
            }
        }

    }

    return newObj
} 