function words(a) {
    return a.split(" ")
}
function sentence(qq) {
    return qq.join(" ")
}
function yell(a) {
    return a.toUpperCase()
}
function whisper(a) {
    return "*"+a.toLowerCase()+"*"
}
function capitalize(a) {
    return a[0].toUpperCase() + a.substring(1).toLowerCase()
}