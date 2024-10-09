function filterShortStateName(arr) {
    return arr.filter(elem => elem.length < 7)
}

function filterStartVowel(arr) {
    return arr.filter(elem => /^[aeiou]/i.test(elem))
    // return arr.filter(elem => elem[0] == "a" || elem[0] == "e" || elem[0] == "i" || elem[0] == "o" || elem[0] == "u")
}


function filter5Vowels(arr) {
    return arr.filter(elem => check5Vowels(elem))
}

function check5Vowels(elem) {
    let count = 0
    for (let i = 0; i < elem.length; i++) {
        if (elem[i] == "a" || elem[i] == "e" || elem[i] == "i" || elem[i] == "o" || elem[i] == "u") {
            count++
        }
    }
    return count >= 5 ? true : false
}

function filter1DistinctVowel(arr) {
    return arr.filter(elem => for1DistinctVowel(elem))
}


function for1DistinctVowel(elem) {
    let count = 0

    elem.includes('a') ? count++ : null
    elem.includes('e') ? count++ : null
    elem.includes('i') ? count++ : null
    elem.includes('o') ? count++ : null
    elem.includes('u') || elem.includes('U') ? count++ : null
    if (count > 1) {
        return false
    }
    return true


}



function multiFilter(arr) {
    return arr.filter(elem => forMultiFilter_Capital(elem.capital) && forMultiFilter_Name(elem.name) && forMultiFilter_Tag(elem.tag) && forMultiFilter_Region(elem.region))
    //
}
function forMultiFilter_Capital(elem) {
    return elem.length >= 8
}
function forMultiFilter_Name(elem) {
    // return elem[0] != "a" && elem[0] != "e" && elem[0] != "i" && elem[0] != "o" && elem[0] != "u"
    return !/^[aeiuo]/ig.test(elem)
}
function forMultiFilter_Tag(elem) {
    return /[aeiuo]/ig.test(elem)
}

function forMultiFilter_Region(elem) {
    return elem != "South"
}
