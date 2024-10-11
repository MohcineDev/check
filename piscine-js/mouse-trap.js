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
    let inside = fasle
    const REC = document.querySelector('.box').getBoundingClientRect()
    const REC_LEFT = REC.left
    const REC_TOP = REC.top
    const REC_WIDTH = REC.width
    const REC_HEIGHT = REC.height

    document.body.addEventListener('mousemove', (e) => {
        const lastCircle = document.querySelector('.circle:last-child')
        console.log(lastCircle);
        lastCircle.style.position = 'absolute'
        lastCircle.style.left = `${e.clientX}px`
        lastCircle.style.top = `${e.clientY}px`
        console.log(e);

        console.log("lastCircle : ", lastCircle);
        if (lastCircle.offsetLeft > REC_LEFT && lastCircle.offsetLeft + lastCircle.offsetWidth < REC_LEFT + REC_WIDTH
            && lastCircle.offsetTop > REC_TOP && lastCircle.offsetTop + lastCircle.offsetWidth < REC_TOP + REC_HEIGHT) {
            lastCircle.style.backgroundColor = "var(--purple)"
            inside = true
        }
        else {
            lastCircle.style.backgroundColor = "white"

        }
    })
}