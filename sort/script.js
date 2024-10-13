const URL = "https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/all.json"
const THEAD = document.querySelector('thead')
const TBODY = document.querySelector('tbody')
const TABLE_HEAD = ['icon', 'name', 'full Name', 'Power stats', 'race', 'gender', 'height', 'weight', 'place Of Birth', 'alignment']
const SEARCH_INPUT = document.querySelector('#search')
const BTN_CONTAINER = document.querySelector('.btn-wrapper')
const ROWS_TO_DISPLAY = document.querySelector('#rowsToDisplay')

let superheroes = []
let tr = ''

// This function is called only after the data has been fetched, and parsed.
const loadData = heroes => {
    if (heroes.length) {
        ///table HEAD
        for (let i = 0; i < TABLE_HEAD.length; i++) {
            createAppendNode("thead", "th", TABLE_HEAD[i], "asc")
        }
        heroes.forEach((elem, i) => {

            superheroes.push(elem)

        })
        buildTable(sortTAble(superheroes))
    }
}


const page = {
    'table': superheroes,
    'list': 1,
    'rows': 20
}


ROWS_TO_DISPLAY.addEventListener('change', e => {
    if (e.target.value == 'all') {
        page.rows = superheroes.length

    } else {

        page.rows = e.target.value
    }

    buildTable()
})

// Request the file with fetch, the data will downloaded to your browser cache.
fetch('https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/all.json')
    .then((response) => response.json()) // parse the response from JSON
    .then(loadData) // .then will call the `loadData` function with the JSON value.


////SORT TABLE 
//column name by ascending order
function sortTAble(table) {
    return table.sort()
}

///add pagination btns
function paginatonBtns(totalPages) {
    BTN_CONTAINER.innerHTML = ''
    for (let i = 1; i <= totalPages; i++) {
        BTN_CONTAINER.innerHTML += `<button value=${i} class="btn">${i}</button>`
    }

    document.querySelectorAll('.btn').forEach(elem => elem.addEventListener('click', (e) => {
        TBODY.innerHTML = ''
        page.list = e.target.value
        buildTable()
    }))
}

function pagination(table, list, rows) {
    let start = (list - 1) * rows
    let end = start + rows

    let data = table.slice(start, end)
    let pages = Math.ceil(table.length / rows)

    return {
        'table': data,
        'pages': pages
    }
}

function buildTable() {
    TBODY.innerHTML = ''

    rows = pagination(page.table, page.list, page.rows)

    rows.table.forEach(elem => {
        ///create table row
        tr = document.createElement('tr')

        let powerstats = `
            <span>intelligence&nbsp;:&nbsp;${elem.powerstats.intelligence} </span>
            <span>strength : ${elem.powerstats.strength} </span>
            <span>speed : ${elem.powerstats.speed} </span>
            <span>durability : ${elem.powerstats.durability} </span>
            <span>power : ${elem.powerstats.power} </span>
            <span>combat : ${elem.powerstats.combat}</span>
            `
        //table BODY
        let img = document.createElement('img')

        img.src = elem.images.xs
        img.setAttribute("data-larg", elem.images.lg)
        let td = document.createElement('td')
        td.appendChild(img)
        tr.appendChild(td)
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
        selectImg()
    });

    paginatonBtns(rows.pages)
}


////create table elements
function createAppendNode(place, tag, value, order) {

    let node = document.createElement(tag)
    node.innerHTML = value

    if (place == 'thead') {
        node.setAttribute('data-name', value.replaceAll(' ', ''))
        node.setAttribute('data-order', order)
        THEAD.appendChild(node)
    }

    else {
        place.appendChild(node)
    }
}

///SEARCH
///generate new table
SEARCH_INPUT.addEventListener('keyup', () => {
    buildSearchTable(filterTable(SEARCH_INPUT.value, superheroes))
})

////filter rows based on the user input
function filterTable(value, table) {
    let result = []

    for (let i = 0; i < table.length; i++) {
        if (table[i].name.toLowerCase().includes(value.toLowerCase())) {
            result.push(table[i])
        }
    }
    return result
}


function buildSearchTable(table) {
    TBODY.innerHTML = ''

    table.forEach(elem => {
        ///create table row
        tr = document.createElement('tr')

        let powerstats = `
            <span>intelligence&nbsp;:&nbsp;${elem.powerstats.intelligence} </span>
            <span>strength : ${elem.powerstats.strength} </span>
            <span>speed : ${elem.powerstats.speed} </span>
            <span>durability : ${elem.powerstats.durability} </span>
            <span>power : ${elem.powerstats.power} </span>
            <span>combat : ${elem.powerstats.combat}</span>
            `
        //table BODY
        let img = document.createElement('img')

        img.src = elem.images.xs
        img.setAttribute("data-larg", elem.images.lg)
        let td = document.createElement('td')
        td.appendChild(img)
        tr.appendChild(td)
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
        selectImg()
    });

    paginatonBtns(rows.pages)
}

////sort on head clicks
THEAD.addEventListener('click', (e) => {

    if (e.target.dataset["order"] == 'desc') {

        e.target.setAttribute('data-order', 'asc')

        superheroes = superheroes.sort(function (a, b) {

            let sortA = getClickedColumn(a, e.target.attributes[0].value)

            let sortB = getClickedColumn(b, e.target.attributes[0].value)
            if (sortA.length == 2) {
                ////weight for ex

                sortA = parseInt(sortA[0].split(' ')[0])

                sortB = parseInt(sortB[0].split(' ')[0])
                return sortA - sortB
            }
            return sortA > sortB ? 1 : -1

        })
    } else {
        e.target.setAttribute('data-order', 'desc')
        superheroes = superheroes.sort(function (a, b) {
            let sortA = getClickedColumn(a, e.target.attributes[0].value)

            let sortB = getClickedColumn(b, e.target.attributes[0].value)
            if (sortA.length == 2) {
                ////weight for ex
                sortA = parseInt(sortA[0].split(' ')[0])

                sortB = parseInt(sortB[0].split(' ')[0])
                return sortB - sortA

            }

            return sortA < sortB ? 1 : -1
        })
    }
    buildTable(superheroes)
})

function getClickedColumn(hero, columnName) {

    if (columnName == "name") {
        return hero.name
    }
    else if (columnName == "fullName") {
        return hero.biography.fullName
    }
    else if (columnName == "race") {
        return hero.appearance.race
    }
    else if (columnName == "gender") {
        return hero.appearance.gender
    }
    else if (columnName == "height") {
        return hero.appearance.height
    }
    else if (columnName == "placeOfBirth") {
        return hero.biography.placeOfBirth
    }

    ///TODO : to remove
    else if (columnName == "weight") {

        return hero.appearance.weight
    }
    else if (columnName == "alignment") {
        return hero.biography.alignment
    }

}



////display large img
//call the function after data loaded
function selectImg() {

    document.querySelectorAll('img').forEach(elem => elem.addEventListener('click', (e) => {
        handleHeroClick(e)
    }))
}

////Detail view. Clicking a hero from the list will show all the details and large image.
function handleHeroClick(e) {
    let tr = e.target.parentNode.parentNode

    let tds = tr.querySelectorAll('td')

    let lastImg = document.querySelector('.lg-img')
    if (lastImg) {
        document.body.removeChild(lastImg)
    }

    let div = document.createElement('div')
    let img = document.createElement('img')
    div.classList.add('lg-img')
    img.src = e.target.dataset.larg
    div.appendChild(img)
    let details = ''
    details += `<span>Name : ${tds[1].textContent} </span>`
    details += `<span>Full Name : ${tds[2].textContent} </span>`
    details += `<span>Power stats : ${tds[3].textContent} </span>`
    details += `<span>race : ${tds[4].textContent} </span>`
    details += `<span>gender : ${tds[5].textContent} </span>`
    details += `<span>height : ${tds[6].textContent} </span>`
    details += `<span>weight : ${tds[7].textContent} </span>`
    details += `<span>place Of Birth : ${tds[8].textContent} </span>`
    details += `<span>alignment : ${tds[9].textContent} </span>`
    let p = document.createElement('p')
    p.innerHTML = details
    div.appendChild(p)

    div.addEventListener('click', () => {
        document.body.classList.remove('blur')
        document.body.removeChild(document.querySelector('.lg-img'))

    })
    document.body.appendChild(div)
}

///footer
document.querySelector('#year').textContent = new Date().getFullYear()


///scroll btn
const scrollTop = document.querySelector('#scroll-top')
const height = innerHeight

document.addEventListener('scroll', () => {

    if (scrollY >= height * 1.5) {
        scrollTop.style.display = 'block'
    }
    else
        scrollTop.style.display = 'none'
})

scrollTop.addEventListener('click', () => {

    scroll({
        top: 0,
        behavior: "smooth"
    })

})