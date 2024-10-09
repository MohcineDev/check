function citiesOnly(arr) {
    return arr.map(elem => elem["city"])
}


function upperCasingStates(arr) {
    return arr.map(elem => elem.split(' ').map(half => half[0].toUpperCase() + half.slice(1)).join(' '))
}

function fahrenheitToCelsius(arr) {
    return arr.map(elem => Math.floor((parseInt(elem) - 32) * 5 / 9) + '°C')
}


function trimTemp(arr) {

    return arr.map(elem => {
        return {
            city: elem.city,
            state: elem.state,
            region: elem.region,
            temperature: elem.temperature.replaceAll(' ', '')
        }
    })

}

function upperCasing(elem) {
    return elem.split(' ').map(half => half[0].toUpperCase() + half.slice(1)).join(' ')
}


function tempForecasts(arr) {
    return arr.map(elem => [Math.floor((parseInt(elem.temperature) - 32) * 5 / 9) + "°Celsius in " + elem.city + ", " + upperCasing(elem.state)].join(''))
}