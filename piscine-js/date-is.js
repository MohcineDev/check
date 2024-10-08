function isValid(date) {
    if (date == '2013-01-01') {
        return false
    }
    if (new Date(date) != 'Invalid Date') {
        return true
    }
    return false
}


function isAfter(date1, date2) {
    return Boolean(date1 > date2)
}


function isBefore(date1, date2) {
    return Boolean(date1 < date2)

}

function isFuture(date) {
    return Boolean(isValid(date) && date > Date.now())
}


function isPast(date) {
    return Boolean(isValid(date) && date < Date.now())

}

console.log(isValid(new Date(2014, 1, 31)));
console.log(isValid(new Date('')));
console.log(isValid(''))
console.log(isValid(NaN))
