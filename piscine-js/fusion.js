function fusion(...obj) {
    let newObj = {}
    for (let i = 0; i < obj.length; i++) {
        let arr = Object.entries({ ...obj[i] })
        for (let j = 0; j < arr.length; j++) {
            let s = ''
            if (newObj[arr[j][0]]) {

                if (typeof (arr[j][1]) == 'string') {
                    if (arr[j].length) {
                        s = ' '
                    }
                    newObj[arr[j][0]] += s + arr[j][1]

                } else if (Array.isArray(arr[j][1])) {
                    if (arr[j].length >= 1) {
                        newObj[arr[j][0]].push(...arr[j][1])
                    }
                } else if (typeof (arr[j][1]) == 'number') {

                    if (arr[j].length >= 1) {
                        if (typeof (newObj[arr[j][0]]) == typeof (arr[j][1])) {
                            newObj[arr[j][0]] += arr[j][1]
                        } else
                            newObj[arr[j][0]] = arr[j][1]
                    }
                }
                else {
                    if (typeof (newObj[arr[j][0]]) == typeof (arr[j][1])) {
                        newObj[arr[j][0]] += Object.values(arr[j][1])[0]

                    } else {
                        newObj[arr[j][0]] = arr[j][1]
                    }

                }
            } else {
                if (typeof (arr[j][1]) == 'string') {
                    newObj[arr[j][0]] = arr[j][1]

                } else if (typeof (arr[j][1]) == 'number') {

                    newObj[arr[j][0]] = arr[j][1]
                } else if (Array.isArray(arr[j][1])) {
                    newObj[arr[j][0]] = arr[j][1]

                } else {
                    newObj[arr[j][0]] = Object.values(arr[j][1])[0] + " "

                }
            }

        }

    }
    return newObj

}

console.log(fusion(
    { a: { b: [1, 2], c: { d: 2 } } },
    { a: { b: [0, 2, 1], c: { d: 23 } } }
));

// { a: { b: [1, 2, 0, 2, 1], c: { d: 25 } } }

// console.log(fusion({ a: 1 }, { a: { b: 1 } }));
// console.log(fusion({ a: [1, 2] }, { a: 1 }));
// console.log(fusion({ nbr: 12 }, { nbr: 23 }));
// console.log(fusion({ a: "hello", b: [] }, { a: 4 }));
// console.log(fusion({ a: { b: 1 } }, { a: 1 }));
console.log(fusion({ a: 1, b: { c: "Salem" } }, { a: 10, x: [], b: { c: "alem" } }));

// console.log(fusion({ a: 'A', b: 'B', c: 'C' }, { a: 'B', b: 'C' }))

// console.log("fs : ", fusion({ arr: [1, "2"] }, { arr: [2] }));
// console.log("fs : ", fusion({ arr: [], arr1: [5] }, { arr: [10, 3], arr1: [15, 3], arr2: ["7", "1"] }));
// console.log(fusion({ str: "salem" }, { str: "alem" }));
// console.log(fusion({ str: "salem" }, { str: "" }));
// console.log(fusion({ a: 10, b: 8, c: 1 }, { a: 10, b: 2 }));