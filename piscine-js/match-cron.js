function matchCron(cron, date) {
    let d = new Date(date)

    let day = d.getDay()
    let month = d.getMonth() + 1
    let dayOfMonth = d.getDate()
    let h = d.getHours()
    let m = d.getMinutes()

    let arr = [m, h, dayOfMonth, month, day]

    let str = cron.split(' ')
    for (let i = 0; i < str.length; i++) {
        console.log(arr[i], " ", str[i]);
        if (arr[i] != str[i] && str[i] !== "*") {
            return false
        }
    }
    return true
}
