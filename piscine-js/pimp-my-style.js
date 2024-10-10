export const styles = [
    'one',
    'two',
    'three',
    // 'four',
    // 'five',
    // 'six',
    // 'seven',
    // 'eight',
    // 'nine',
    // 'ten',
    // 'eleven',
    // 'twelve',
    // 'thirteen',
    // 'fourteen',
    // 'fifteen',
]


let count = 0
let end = false
let allremoveed = false


export function pimp() {
    const btn = document.querySelector('button')
    if (count == 0 && allremoveed) {
        end = false
        console.log("hi");
    }

    if (count < styles.length && !end) {
        btn.classList.add(styles[count])
        btn.classList.remove("unpimp")
        count++
    }

    if (count == styles.length) {
        btn.classList.add("unpimp")
        end = true
    }
    ///removinnnnnnnnnnng
    if (end) {
        btn.classList.remove(styles[count])
        if (count == 0) {

            btn.classList.remove("unpimp")
            allremoveed = true
        }
        count > 0 ?  count-- : null
    }
}
