// function filterEntries(obj, func) {
//     let newObj = {}

//     let entr = Object.entries(obj)

//     if (func(entr[0], entr[1])) {
//         newObj[key] = obj[1]
//     }

//     return newObj
// }

const nutritionDBs = {
    tomato: { calories: 18, protein: 0.9, carbs: 3.9, sugar: 2.6, fiber: 1.2, fat: 0.2 },
    vinegar: { calories: 20, protein: 0.04, carbs: 0.6, sugar: 0.4, fiber: 0, fat: 0 },
    oil: { calories: 48, protein: 0, carbs: 0, sugar: 123, fiber: 0, fat: 151 },
    onion: { calories: 0, protein: 1, carbs: 9, sugar: 0, fiber: 0, fat: 0 },
    garlic: { calories: 149, protein: 6.4, carbs: 33, sugar: 1, fiber: 2.1, fat: 0.5 },
    paprika: { calories: 282, protein: 14.14, carbs: 53.99, sugar: 1, fiber: 0, fat: 12.89 },
    sugar: { calories: 387, protein: 0, carbs: 100, sugar: 100, fiber: 0, fat: 0 },
    orange: { calories: 49, protein: 0.9, carbs: 13, sugar: 9, fiber: 0.2, fat: 0.1 },
    laafat: { calories: 49, protein: 0.9, carbs: 66, sugar: 9, fiber: 0.2, fat: 0.1 },
}
const groceriesCart1x = { oil: 500, onion: 230, garlic: 220, paprika: 480 }
const groceriesCart2x = { tomato: 700, vinegar: 120, orange: 450 }

function filterEntries(nutrients, func) {
    let newObj = {}

    for (const [key, value] of Object.entries(nutrients)) {
        if (func([key, value])) {
            newObj[key] = value
        }
    }
    return newObj
}

// console.log(filterEntries(groceriesCart1, ([, v]) => v < 300));
///map
const groceriesCartx = { orange: 500, oil: 20, sugar: 480 }

function mapEntries(nutrients, func) {

    let newObj = {}
    for (const [key, v] of Object.entries(nutrients)) {
        const [newKey, newValue] = func([key, v])
        newObj[newKey] = newValue
    }
    return newObj
}
/*
console.log(mapEntries(
    filterEntries(groceriesCart1, ([k, v]) => k === 'onion'),
    ([k, v]) => [`✔️${k}`, v - 100],
));

console.log(mapEntries(groceriesCart1, ([k, v]) => [
    v > 250 ? `✔️${k}` : `❌${k}`,
    v - 250,
]));
*/
///--------- reduce

// function reduceEntries(nutrients, func, acc) {
//     let keys = Object.entries(nutrients)
//     let count = 0
//     let res = acc || ''
//     if (acc || acc == 0) {

//         if (typeof acc == 'number') {
//             res = parseInt(acc)
//         }
//     } else {
//         res = keys[0]
//         count = 1
//     }

//     for (let index = count; index < keys.length; index++) {

//         res += typeof (acc) == 'number' ? parseFloat(func('', keys[index])) : func('', keys[index])
//     }
//     return res
// }

function reduceEntries(nutrients, func, acc) {

    for (const [key, value] of Object.entries(nutrients)) {
        acc = func(acc, [key, value])
    }
    return acc
}

// console.log(reduceEntries(groceriesCart1, (acc, [k, v]) => acc + k + v, ''));

function lowCarbs(groc) {
    const groceries = filterEntries(nutritionDBs, ([k,]) => groc[k])
    // console.log(groceries); 

    return filterEntries(groc, ([k, v]) => (groceries[k].carbs * (v / 100)) < 50)
}

// console.log(lowCarbs(groceriesCart1));
// console.log(lowCarbs(groceriesCart2));

function totalCalories(obj) {

    return parseFloat(reduceEntries(obj, (acc, [k, v]) => acc + nutritionDBs[k].calories * (v / 100), 0).toFixed(1))

}

console.log(totalCalories(groceriesCart1x));

function cartTotal(cart) {
    return mapEntries(cart, ([element, grams]) => {
        const elementnutrition = nutritionDBs[element]
        const res = {}
        for (const [key, value] of Object.entries(elementnutrition)) {
            res[key] = +(value * grams / 100).toFixed(3)
        }
        return [element, res]
    })
}
// return reduceEntries(obj, (acc, [k, v]) => (mapEntries(nutritionDBs, ([ke, ve]) => v * ve)))
// console.log('Total calories:')
// console.log(totalCalories(groceriesCart))
// console.log('Items with low carbs:')
// console.log(lowCarbs(groceriesCart))
// console.log('Total cart nutritional facts:')
// console.log(cartTotal(groceriesCart))
