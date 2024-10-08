function firstDayWeek(weekNum, year) {
    if (weekNum == 1) {
        return "01-01-" + year
    }
    let weekInMills = (weekNum - 1) * 7 * 24 * 60 * 60 * 1000

    let date = new Date(weekInMills + new Date(year).getTime())



    while (date.getDay() !== 1) {

        date.setDate(date.getDate() - 1)
    }

    return date.toISOString().slice(0, 10).split("-").reverse().join("-")
}