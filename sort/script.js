const URL = "https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/all.json"
const THEAD = document.querySelector('thead')
const TBODY = document.querySelector('tbody')
const TABLE_HEAD = ['icon', 'name', 'fullName', 'Powerstats', 'race', 'gender', 'height', 'weight', 'placeOfBirth', 'alignment',]


let tr = ''
// This function is called only after the data has been fetched, and parsed.
const loadData = heroes => {
    if (heroes.length) {
        ///table HEAD
        for (let i = 0; i < TABLE_HEAD.length; i++) {
            createAppendNode("thead", "th", TABLE_HEAD[i])
        }
    }
    heroes.forEach((elem, i) => {
        if (i < 20) {
            ///create table row
            tr = document.createElement('tr')
            let powerstats = `
            <span>intelligence : ${elem.powerstats.intelligence} </span>
            <span>strength : ${elem.powerstats.strength} </span>
            <span>speed : ${elem.powerstats.speed} </span>
            <span>durability : ${elem.powerstats.durability} </span>
            <span>power : ${elem.powerstats.power} </span>
            <span>combat : ${elem.powerstats.combat}</span>
            `
            //table BODY
            createAppendNode(tr, "td", null)
            createAppendNode(tr, "td", elem.name)
            createAppendNode(tr, "td", elem.biography.fullName)
            createAppendNode(tr, "td", powerstats)
            createAppendNode(tr, "td", elem.appearance.race)
            createAppendNode(tr, "td", elem.appearance.gender)
            createAppendNode(tr, "td", elem.appearance.height)
            createAppendNode(tr, "td", elem.appearance.weight)
            createAppendNode(tr, "td", elem.biography.placeOfBirth)
            createAppendNode(tr, "td", elem.biography.alignment)

            TBODY.appendChild(tr)
        }
    });
}

// Request the file with fetch, the data will downloaded to your browser cache.
fetch('https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/all.json')
    .then((response) => response.json()) // parse the response from JSON
    .then(loadData) // .then will call the `loadData` function with the JSON value.


function createAppendNode(place, tag, value) {

    let node = document.createElement(tag)
    node.innerHTML = value

    if (place == 'thead') {
        THEAD.appendChild(node)

    } else {
        place.appendChild(node)
    }
}