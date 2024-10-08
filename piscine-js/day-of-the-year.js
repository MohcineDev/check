function dayOfTheYear(date) {

    if (new Date(date).getMonth() == 0) {
        return 1
    }
    let d = new Date(date)

    let diff = d - new Date("01-01-" + d.getFullYear())

    if (diff < 1) {
        diff *= -1
    }
    return Math.round(diff / 1000 / 60 / 60 / 24) + 1
}
