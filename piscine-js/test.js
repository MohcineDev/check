function fusion(obj1, obj2) {
    let newObj = obj1
    let keys = Object.keys(obj2)

    for (let i = 0; i < Object.entries(obj2).length; i++) {
        if (Array.isArray(obj2[keys[i]])) {
            // newObj.hasOwnProperty(keys[i]) ?
            //     newObj[keys[i]].push(...obj2[keys[i]]) : newObj[keys[i]] = obj2[keys[i]]
            if (newObj[keys[i]] && newObj[keys[i]].length > 0) {
                // if (newObj[keys[i]] && newObj[keys[i]].length > 0 ) {
                newObj[keys[i]].push(...obj2[keys[i]])
            }
            else {
                newObj[keys[i]] = obj2[keys[i]]
            }
        } if (typeof (newObj[keys[i]]) == 'number') {
            newObj[keys[i]] += obj2[keys[i]]

        } else if (typeof (newObj[keys[i]]) == 'string') {
            newObj[keys[i]] += ' ' + obj2[keys[i]]

        }
        else {
            for (const key in obj2[keys[i]]) {
                if (newObj[keys[i]] instanceof Object && !Array.isArray(obj2[keys[i]]) && !Array.isArray(newObj[keys[i]])) {
                    fusion(newObj[keys[i]], obj2[keys[i]])
                }
                else if (!Array.isArray(obj2[keys[i]])) {
                    console.log(1000);
                    newObj[keys[i]] = obj2[keys[i]]

                }
            }

        }
    }
    return newObj
}
//-- Array types
// console.log("fs : ", fusion({ arr: [1, "2"] }, { arr: [2] }));
// -> { arr: [ 1, '2', 2 ] }
// console.log("fs : ", fusion({ arr: [], arr1: [5] }, { arr: [10, 3], arr1: [15, 3], arr2: ["7", "1"] }));
// ->{ arr: [ 10, 3 ], arr1: [ 5, 15, 3 ], arr2: [ '7', '1' ] }

//-- string
//  console.log(fusion({ str: "salem" }, { str: "alem" }));
//  console.log(fusion({ str: "salem" }, { str: "" }));

//--numbers
// console.log(fusion({ a: 10, b: 8, c: 1 }, { a: 10, b: 2 }));
// -> { a: 20, b: 10, c: 1 }

//-- object
console.log(fusion({ a: 1, b: { c: "Salem" } }, { a: 10, x: [], b: { c: "alem" } }));
// -> { a: 11, x: [], b: { c: 'Salem alem' } }
console.log(fusion({ a: { b: [3, 2], c: { d: 8 } } }, { a: { b: [0, 3, 1], c: { d: 3 } } }));
//// -> { a: { b: [ 3, 2, 0, 3, 1 ], c: { d: 11 } } }


// console.log(fusion(
//     { a: { b: [1, 2], c: { d: 2 } } },
//     { a: { b: [0, 2, 1], c: { d: 23 } } }
// ));

// { a: { b: [1, 2, 0, 2, 1], c: { d: 25 } } }

//console.log(fusion({ a: 1 }, { a: { b: 1 } }));
// console.log(fusion({ a: [1, 2] }, { a: 1 }));
// console.log(fusion({ nbr: 12 }, { nbr: 23 }));
// console.log(fusion({ a: "hello", b: [] }, { a: 4 }));
// console.log(fusion({ a: { b: 1 } }, { a: 1 }));

// console.log(fusion({ a: 'A', b: 'B', c: 'C' }, { a: 'B', b: 'C' }))
