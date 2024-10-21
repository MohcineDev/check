function replica(target, ...source) {


    if (typeof target == 'function') {
        console.log(123);
    }
    if (source) {
        for (let index = 0; index < source.length; index++) {
            if (source[index] instanceof Object) {
                // if (source[index] instanceof Object && !source[index] instanceof Function && !source[index] instanceof RegExp) {
                for (const key in source[index]) {
                    //if ( source[index][key] instanceof Object) {
                    if (!Array.isArray(source[index][key]) && source[index][key] instanceof Object) {
                        console.log(key);
                        target[key] = replica(target, source[index][key])
                        // Object.assign(target[key], source[index][key])
                        // console.log('- : ', source[index][key]);
                    } else {
                        target[key] = source[index][key]
                    }
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
// console.log(replica({ a: { b: [2] } }, { a: [4] }).a);
console.log(replica({ a: [1, 2, 4] }, { a: { b: [4] } }).a);
// console.log(replica({ a: { b: 1, c: 2 } }, { a: { c: 23 } }));