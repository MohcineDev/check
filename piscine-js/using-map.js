const states = [
    {
        city: 'Los Angeles',
        temperature: '101 °F',
        state: 'california',
        region: 'West',
    },
    {
        city: 'San Francisco',
        temperature: '84 °F',
        state: 'california',
        region: 'West',
    },
    {
        city: 'Miami',
        temperature: ' 112 °F',
        state: 'Florida',
        region: 'South',
    },
    {
        city: 'New York City',
        temperature: ' 0 °F',
        state: 'new york',
        region: 'North East',
    },
    { city: 'Juneau', temperature: ' 21° F', state: 'Alaska', region: 'West' },
    {
        city: 'Boston',
        temperature: '45 °F',
        state: 'massachussetts',
        region: 'North East',
    },
    {
        city: 'Jackson',
        temperature: ' 70°F  ',
        state: 'mississippi',
        region: 'South',
    },
    {
        city: 'Utqiagvik',
        temperature: ' -1 °F',
        state: 'Alaska',
        region: 'West',
    },
    {
        city: 'Albuquerque',
        temperature: ' 95 °F',
        state: 'new mexico',
        region: 'West',
    },
]

const cities = [
    'alabama',
    'new jersey',
    'alaska',
    'new york',
    'california',
    'new hampshire',
    'ohio',
    'texas',
    'west virginia',
]

function citiesOnly(arr) {

    return arr.map(elem => elem["city"])

}


function upperCasingStates(arr) {

    return   arr.map(elem => elem.split(' ').map(half => half[0].toUpperCase() + half.slice(1)).join(' '))
    
}

const temps = ['86°F', '100°F', '41°F', '55°F', '10°F', '70°F', '-2°F']

function fahrenheitToCelsius(arr) {
    return arr.map(elem => Math.floor((parseInt(elem) - 32) * 5 / 9) + '°C')
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
    return arr.map(elem => [Math.floor((parseInt(elem.temperature) - 32) * 5 / 9) + "°Celsius in " + elem.city + " " + elem.state])
}
console.log(tempForecasts(states));