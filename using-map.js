function citiesOnly(arr) {

    return arr.map(elem => elem["city"])

}


function upperCasingStates(arr) {

    return arr.map(elem => elem[0].toUpperCase() + elem.slice(1))
}

function fahrenheitToCelsius(arr) {
    return arr.map(elem => Math.round((parseInt(elem) - 32) * 5 / 9) + '°C')


}


function trimTemp(arr) {

    return arr.map(elem => {
        return {
            city: elem.city,
            temperature: elem.temperature.trim()
        }
    })

}

function tempForecasts(arr) {
    return arr.map(elem => [Math.round((parseInt(elem.temperature) - 32) * 5 / 9) + "°Celsius in " + elem.city + " " + elem.state])
}