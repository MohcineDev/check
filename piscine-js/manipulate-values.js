
const nutrients = { carbohydrates: 12, protein: 20, fat: 5 }

function filterValues(nutrients, func) {
    let newObj = {}
    for (const key in nutrients) {
        if (func(nutrients[key])) {
            newObj[key] = nutrients[key]
        }
    }
    return newObj
}

function mapValues(nutrients, func) {
    acc = ''

    let newObj = {}
    for (const key in nutrients) {
        newObj[key] = func(nutrients[key])
    }
    return newObj
}

function reduceValues(nutrients, func, acc) {
    let total = acc || 0
    for (const key in nutrients) {
        total += func(0, nutrients[key])
    }
    return total
}
// mapValues(nutrients, (v) => v + 1)

// reduceValues(nutrients, (acc, cr) => acc + cr)

console.log(filterValues(nutrients, (nutrient) => nutrient <= 12))
// output: { carbohydrates: 12, fat: 5 }

console.log(mapValues(nutrients, (v) => v + 1))
// output: { carbohydrates: 13, protein: 21, fat: 6 }

console.log(reduceValues(nutrients, (acc, cr) => acc + cr))
// output: 37
