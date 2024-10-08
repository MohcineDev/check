function countLeapYears(date) {
    let y = new Date(date).getFullYear()
    let count = 0
    for (let i = 1; i < y; i++) {
        new Date(i, 1, 29).getDate() === 29 ? count++ : null
    }
    return count
}
