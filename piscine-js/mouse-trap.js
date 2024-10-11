export function setBox() {
    const div = document.createElement('div')
    div.classList.add('box')
    document.body.appendChild(div)

}
export function createCircle() {
    document.body.addEventListener('click', () => {
        const div = document.createElement('div')
        div.style.backgroundColor = "white"
        div.classList.add('circle')
        document.body.appendChild(div)

    })
}
export function moveCircle() {
    document.body.addEventListener('mousemove', (e) => {
        const lastCircle = document.querySelector('.circle:last-child')
        console.log(lastCircle);
        lastCircle.style.position = 'absolute'
        lastCircle.style.left = `${e.clientX}px`
        lastCircle.style.top = `${e.clientY}px`
        console.log(e);

        let rec = document.querySelector('.box').getBoundingClientRect()
        console.log(rec.left, lastCircle.offsetTop);
        if (lastCircle.offsetLeft > rec.left && lastCircle.offsetLeft < rec.left+rec.width
            && lastCircle.offsetTop > rec.top && lastCircle.offsetTop < rec.top+rec.height ) {
            lastCircle.style.backgroundColor = "red"
        }
        else {
            lastCircle.style.backgroundColor = "white"

        }
    })
}