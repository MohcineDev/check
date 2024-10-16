function deepCopy(objOrArr) {

    if (Array.isArray(objOrArr)) {
        let copied = []
        for (let index = 0; index < objOrArr.length; index++) {
            if (Array.isArray(objOrArr[index])) {
                copied.push(deepCopy(objOrArr[index]))
            } else
                copied.push(objOrArr[index])
        }
        return copied

        //is object
    } else if (objOrArr instanceof Object) {
        let copied = {}
        for (const key in objOrArr) {
            if (objOrArr[key] instanceof Object) {
                copied[key] = deepCopy(objOrArr[key])
            } else {
                copied[key] = objOrArr[key]
            }

        }

        return copied

    }


}

console.log(deepCopy([1, "a"]));