function fusion(obj1, obj2) {
    let keys = Object.keys(obj2)

    // for (let i = 0; i < Object.entries(obj2).length; i++) {
    for (let key in obj2) {
        if (Array.isArray(obj2[key])) {
            // newObj.hasOwnProperty(key) ?
            //     newObj[key].push(...obj2[key]) : newObj[key] = obj2[key]
            if (obj1[key] && obj1[key].length >= 1) {
                obj1[key].push(...obj2[key])
            }
            else {
                obj1[key] = obj2[key]
            }
        } if (typeof (obj1[key]) == 'number' && typeof (obj2[key]) == 'number') {
            console.log("hhh", obj1[key]);
            obj1[key] += obj2[key]

        } else if (typeof (obj1[key]) == 'string' && typeof (obj2[key]) == 'string') {
            obj1[key] += ' ' + obj2[key]
        }
        else if (typeof (obj1[key]) != typeof (obj2[key])) {
            obj1[key] = obj2[key]
        }
        else {
            // for (const key in obj2[key]) {
            // if (typeof (obj1[key]) == 'object' && typeof (obj2[key]) == 'object') {
            if (!Array.isArray(obj1[key]) && obj1[key] instanceof Object && !Array.isArray(obj2[key])) {
                console.log(obj2[key]);
                obj1[key] = fusion(obj1[key], obj2[key])
            }
            // else if (!Array.isArray(obj2[key])) {
            //     console.log(1000);
            //     obj1[key] = obj2[key]

            // }
            // }

        }
    }
    return obj1
}
//-- Array types
//  console.log("fs : ", fusion({ arr: [1, "2"] }, { arr: [2] }));
// -> { arr: [ 1, '2', 2 ] }
//   console.log("fs : ", fusion({ arr: [], arr1: [5] }, { arr: [10, 3], arr1: [15, 3], arr2: ["7", "1"] }));
// ->{ arr: [ 10, 3 ], arr1: [ 5, 15, 3 ], arr2: [ '7', '1' ] }

//-- string
//  console.log(fusion({ str: "salem" }, { str: "alem" }));
//  console.log(fusion({ str: "salem" }, { str: "" }));

//--numbers
// console.log(fusion({ a: 10, b: 8, c: 1 }, { a: 10, b: 2 }));
// -> { a: 20, b: 10, c: 1 }

//-- object
// console.log(fusion({ a: 1, b: { c: "Salem" } }, { a: 10, x: [], b: { c: "alem" } }));
// -> { a: 11, x: [], b: { c: 'Salem alem' } }
// console.log(fusion({ a: { b: [3, 2], c: { d: 8 } } }, { a: { b: [0, 3, 1], c: { d: 3 } } }));
//// -> { a: { b: [ 3, 2, 0, 3, 1 ], c: { d: 11 } } }


// console.log(fusion(
//     { a: { b: [1, 2], c: { d: 2 } } },
//     { a: { b: [0, 2, 1], c: { d: 23 } } }
// ));

// { a: { b: [1, 2, 0, 2, 1], c: { d: 25 } } }

// console.log(fusion({ a: 1 }, { a: { b: 1 } }));
// console.log(fusion({ a: [1, 2] }, { a: 1 }));
// console.log(fusion({ nbr: 12 }, { nbr: 23 }));
//fusion({ a: 1 }, { a: { b: 1 } }).a, { b: 1 }))
//  console.log(fusion({ a: 1 }, { a: { b: 1 } }));
 //-->{ b: 1 }
//In case of type mismatch you must replace it with the value of the second object (if it exists).
// console.log(fusion({ a: "hello", b: [] }, { a: 4 }));
//// -> { a: 4, b: [] }
// console.log(fusion({ a: { b: 1 } }, { a: 1 }));

// console.log(fusion({ a: 'A', b: 'B', c: 'C' }, { a: 'B', b: 'C' }))
