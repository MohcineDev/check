const TOP_STORIES_URL = 'https://hacker-news.firebaseio.com/v0/topstories.json'
const NEWS_ITEM_URL = 'https://hacker-news.firebaseio.com/v0/item/'
const container = document.querySelector('.container')
const fetchData = url => {
    return new Promise((resolve, reject) => {
        fetch(url).then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err))

    })
}

const showData = async () => {
    let data = await fetchData(TOP_STORIES_URL)


    data.map(async d => {
        let newsData = await fetchData(`${NEWS_ITEM_URL}${d}.json`)
        createAndAppend(newsData)
    })
}


showData()


function createAndAppend(data) {
    const div = document.createElement('div')
    div.classList.add("wrapper")

    const h2 = document.createElement('h2')
    const p = document.createElement('p')
    const span = document.createElement('span')
    const url = document.createElement('a')


    h2.textContent = data.by
    p.textContent = data.title
    span.textContent = new Date(data.time)
    url.href = data.url
    url.textContent = `${data.type} Link`

    div.appendChild(h2)
    div.appendChild(p)
    div.appendChild(span)
    div.appendChild(url)

    container.appendChild(div)

}