function firstDayWeek(weekNum, year) {
    let weekInMills = (weekNum - 1) * 7 * 24 * 60 * 60 * 1000

    let date = new Date(weekInMills + new Date(year).getTime() + (60 * 60 * 1000))
    let day = date.getDate()
    let month = date.getMonth()
    let y = date.getFullYear()

    console.log(date)
    console.log("m : " + month)
    if (month < 9) {
        month = '0' + (month + 1)
    }
    if (day <= 9) {
        day = '0' + day
    }

    return `${day}-${month}-${y}`
}

console.log(firstDayWeek(1, '1000')); 