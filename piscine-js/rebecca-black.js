function isFriday(date) {
    return new Date(date).getDay() == 5
}

function isWeekend(date) {
    return new Date(date).getDay() == 6 || new Date(date).getDay() == 0

}

function isLeapYear(date) {
    let y = new Date(date).getFullYear()
    let d = new Date(y, 1, 29).getDate() === 29
    return d
}

function isLastDayOfMonth(date) {
    let d = new Date(date)
    console.log("------------ :", d);
    let currentMonth = d.getMonth()
    ///add a month to the same date
    d.setDate(d.getDate() + 1)


    return d.getMonth() !== currentMonth
}
