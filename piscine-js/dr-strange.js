function addWeek(date) {

    let r = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "secondMonday", "secondTuesday", "secondWednesday", "secondThursday", "secondFriday", "secondSaturday", "secondSunday",]
    const minute = 1000 * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const w = day * 14

    const d = new Date("0001-01-01");
    let rr = new Date(date).getTime() - d.getTime()

    let dayinMill = rr % w

    const m = dayinMill / minute;
    const h = m / 60;
    const days = h / 24;

    return r[Math.floor(days)]
}

function timeTravel(obj) {

    obj.date.setSeconds(obj.second)
    obj.date.setMinutes(obj.minute)
    obj.date.setHours(obj.hour)
    return obj.date
}
