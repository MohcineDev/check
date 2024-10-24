function pronoun(str) {
    let obj = {}
    const pronounList = ['i', 'you', 'he', 'she', 'it', 'they', 'we']
    let newStr = str.replaceAll('\n', ' ')
    let splited = newStr.split(' ')


    for (let index = 0; index < splited.length; index++) {
        ///check lower case
        let word = splited[index].toLowerCase()

        if (pronounList.includes(word)) {
            ///init obj properties
            obj[word] = {}
            obj[word]['word'] = []
            obj[word]['count'] = 1
        }
    }

    ////add words
    ///update count
    for (let j = 0; j < pronounList.length; j++) {
        let count = 0
        let key = ''
        for (let index = 0; index < splited.length; index++) {
            if (pronounList[j] == splited[index].toLowerCase()) {
                count++
                key = pronounList[j]

                ///the next word isn't a pronoun and there is index+1 availabel
                !pronounList.includes(splited[index + 1]) && index + 1<splited.length ?
                    obj[key]['word'].push(splited[index + 1])
                    : null

                obj[key]['count'] = count
            }

        }
    }


    return obj
}
//  const ex = 'Using Array Destructuring, you you can iterate through objects easily.'
//{ you: { word: [ 'can' ], count: 2 } }
// const ex = 'If he you want to buy something you have to pay.'
// {
//     he: { word: [], count: 1}
//     you: { word: [ 'want', 'have' ], count: 2 }
//   }

//  console.log(pronoun(ex))
//   console.log(pronoun('I buy,\ni to,\nYOU buy,\nit have,\nIt buys,\nit is,\nyou go'))

// console.log(pronoun(`The seal method seals an object, preventing new properties from being
//     added to it and marking all existing properties as non-configurable. Values of present 
//    properties can still be changed as long as they are writable.`))

// console.log(pronoun('I buy,\ni to,\nYOU buy,\nit have,\nIt buys,\nit is,\nyou go'));
console.log(pronoun(`it i it she is gone`));
console.log(pronoun('she she she she is'));
console.log(pronoun('we will rock you'));