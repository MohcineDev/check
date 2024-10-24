function replica(target, ...source) {

    for (let index = 0; index < source.length; index++) {

        for (const key in source[index]) {

            // if (source[index][key] instanceof Object) {
            if (!Array.isArray(source[index][key]) && source[index][key] instanceof Object
                && !Array.isArray(target[key]) && target[key] instanceof Object) {

                target[key] = replica(target[key], source[index][key])

            }
            else {
                target[key] = source[index][key]
            }
            // if (source[index][key] instanceof RegExp || source[index][key] instanceof Function) {
            //     target[key] = source[index][key]

            // }
        }
    }
    return target
}



// console.log(replica(
//     {},
//     Object.freeze({ line: 'Replicants are like any other machine' }),
//     Object.freeze({ author: 'Rich' })
// ) )


// console.log(replica({ con: console.log }, { reg: /hello/ }),);
// console.log(replica({ a: 4 }, { a: { b: 1 } }).a.b); ///1
// console.log(replica({ a: { b: { c: [123, 1] } } }, { a: { b: { c: '1' } } }).a.b.c);
// console.log(replica({ a: 2 }, { a: [4] }).a); // [4] 
// console.log(replica({ a: { b: [2] } }, { a: [4] }).a);
// console.log(replica({ a: [1, 2, 4] }, { a: { b: [4] } }));
// console.log(replica({ a: { b: 1, c: 2 } }, { a: { c: 23 } }));