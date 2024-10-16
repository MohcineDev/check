function replica(target = {}, ...source) {


    if (typeof target == 'function') {
        console.log(123);
    }
    if (source) {
        for (let index = 0; index < source.length; index++) {
            if (source[index] instanceof Object) {
                // if (source[index] instanceof Object && !source[index] instanceof Function && !source[index] instanceof RegExp) {


                for (const key in source[index]) {

                    target[key] = source[index][key]
                }
            }
        }
    }
    return target
}




// console.log(replica(
//     {},
//     Object.freeze({ line: 'Replicants are like any other machine' }),
//     Object.freeze({ author: 'Rich' })
// ));


// console.log(replica({ con: console.log }, { reg: /hello/ }),);
// console.log(replica({ a: 4 }, { a: { b: 1 } }).a.b);
// console.log( replica({ a: { b: { c: [123, 1] } } }, { a: { b: { c: '1' } } }).a.b.c);
// console.log(replica({ a: 2 }, { a: [4] }).a);
console.log(replica({ a: { b: [2] } }, { a: [4] }).a);