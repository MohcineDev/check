function dogYears(planet, age) {
    let period = 1
    if (planet == "earth") {
        period = 1.0
    } else if (planet == "mercury") {
        period = 0.2408467
    } else if (planet == "venus") {
        period = 0.61519726
    } else if (planet == "mars") {
        period = 1.8808158
    } else if (planet == "jupiter") {
        period = 11.862615
    } else if (planet == "saturn") {
        period = 29.447498
    } else if (planet == "uranus") {
        period = 84.016846
    } else if (planet == "neptune") {
        period = 164.79132
    }


    return parseFloat((((((age / 60) / 60) / 24) / 365.25) / period * 7).toFixed(2))
}