function defaultCurry(obj1) {
    return (obj2) => {
        return obj1 = { ...obj1, ...obj2 }
    }
}


// console.log(defaultCurry({
//     http: 403,
//     connection: 'close',
//     contentType: 'multipart/form-data',
// })({
//     http: 200,
//     connection: 'open',
//     requestMethod: 'GET'
// }));


const personnel22 = {
    lukeSkywalker: { id: 5, pilotingScore: 98, shootingScore: 56, isForceUser: true },
    sabineWren: { id: 82, pilotingScore: 73, shootingScore: 99, isForceUser: false },
    zebOrellios: { id: 22, pilotingScore: 20, shootingScore: 59, isForceUser: false },
    ezraBridger: { id: 15, pilotingScore: 43, shootingScore: 67, isForceUser: true },
    calebDume: { id: 11, pilotingScore: 71, shootingScore: 85, isForceUser: true },
}

function mapCurry(func) {
    return (nutrients) => {

        let newObj = {}
        for (const [key, v] of Object.entries(nutrients)) {
            const [newKey, newValue] = func([key, v])
            newObj[newKey] = newValue
        }
        return newObj
    }
}
// console.log(mapCurry(([k, v]) => [`${k}_force`, v])(personnel22));

function reduceCurry(func) {
    return (nutrients, acc) => {

        for (const [key, value] of Object.entries(nutrients)) {
            acc = func(acc, [key, value])
        }
        return acc
    }
}
// console.log(reduceCurry((acc, [k, v]) => (acc += v))({ a: 1, b: 2, c: 3 }, 0));

function filterCurry(func) {
    return nutrients => {

        let newObj = {}

        for (const [key, value] of Object.entries(nutrients)) {
            if (func([key, value])) {
                newObj[key] = value
            }
        }
        return newObj
    }
}

function reduceScore(personnel22, init) {
    return reduceCurry((acc, [k, v]) => v["isForceUser"] ? v["pilotingScore"] + v["shootingScore"] + acc : acc)(personnel22, init)
}


function filterForce() {
    return filterCurry(([k, v]) => v["shootingScore"] >= 80 && v["isForceUser"])(personnel22)
}

function mapAverage(obj) {
    let newObj = mapCurry(([k, v]) => [k, (v["pilotingScore"] + v["shootingScore"]) / 2])(obj)

    for (const key in obj) {


        obj[key]["averageScore"] = newObj[key]
    }
    return obj
}
console.log(filterForce(personnel22));
// console.log(reduceScore(personnel22, 420));

// console.log(mapAverage(personnel22));