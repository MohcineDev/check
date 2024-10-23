const body = document.querySelector('body')
let middleBricks = []
export function build(bricks) {
    for (let i = 1; i <= bricks; i++) {
        let bricka = document.createElement('div')
        bricka.setAttribute("id", `brick-${i}`)
        if (i % 3 === 2) {
            bricka.setAttribute("data-foundation", `true`)
            middleBricks.push(i)
        }
        setTimeout(() => {
            body.appendChild(bricka)
        }, i * 100)
    }
}
export const repair = (...ids) => {
    console.log(ids.length);
    const bricks = document.querySelectorAll("div[id^='brick']")
    // let b = []
    // for (let i = 0; i < ids.length; i++) {
    //     b.push(document.querySelector(`#${ids[i]}`))
    // }
    // console.log(b);
    if (Array.isArray(ids)) {
        for (let i = 0; i < ids.length; i++) {
            let id = ids[i].match(/[0-9]/g).join('')
            if (middleBricks.filter(v => v == id).length >= 1) {
                //console.log(document.querySelector("#" + ids));
                document.querySelector("#" + ids[i]).setAttribute("data-repaired", "in progress")
            } else {
                document.querySelector("#" + ids[i]).setAttribute("data-repaired", "true")
            }
        }
    }
    // else {
    //     let id = ids.match(/[0-9]/g).join('')
    //     if (middleBricks.filter(v => v == id).length >= 1) {
    //         //console.log(document.querySelector("#" + ids));
    //         document.querySelector("#" + ids).setAttribute("data-repaired", "in progress")
    //     } else {
    //         document.querySelector("#" + ids).setAttribute("data-repaired", "true")
    //     }
    // }
}
export const destroy = () => {
    let elements = document.querySelectorAll("div[id^='brick']")
    body.removeChild(elements[elements.length - 1])
}