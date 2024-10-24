function pronoun(str) {
    let obj = {}
    const pronounList = ['i', 'you', 'he', 'she', 'it', 'they', 'we']
    let newStr = str.replaceAll('\n', ' ')
    let splited = newStr.split(' ')


    for (let index = 0; index < splited.length; index++) {
        if (pronounList.includes(splited[index])) {
            obj[splited[index]] = {}
            if (!pronounList.includes(splited[index + 1])) {

                obj[splited[index]]['word'] = [splited[index + 1]]
            } else
                obj[splited[index]]['word'] = []

            obj[splited[index]]['count'] = 1
        }
    }
    ///update count

    for (let j = 0; j < pronounList.length; j++) {
        let count = 0
        let key = ''
        for (let index = 0; index < splited.length; index++) {
            if (pronounList[j] == splited[index]) {
                count++
                key = pronounList[j]
                obj[key].count = count
            }

        }
    }


    return obj
}
// const ex = 'Using Array Destructuring, you you can iterate through objects easily.'
//{ you: { word: [ 'can' ], count: 2 } }
// const ex = 'If he you want to buy something you have to pay.'
// {
//     he: { word: [], count: 1}
//     you: { word: [ 'want', 'have' ], count: 2 }
//   }

// console.log(pronoun(ex))

console.log(pronoun('I buy,\ni to,\nYOU buy,\nit have,\nIt buys,\nit is,\nyou go'))

// console.log(pronoun(`The seal method seals an object, preventing new properties from being
//     added to it and marking all existing properties as non-configurable. Values of present 
//    properties can still be changed as long as they are writable.`))
