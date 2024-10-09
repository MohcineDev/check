
function longWords(arr) {
    return arr.every(elem => typeof (elem) != 'string' || elem.length >= 5)
}


function oneLongWord(arr) {
    return arr.some(elem => typeof (elem) == 'string' && elem.length >= 10)
}


function noLongWords(arr) {
    return arr.every(elem => typeof (elem) == 'string' && elem.length < 7)
} 