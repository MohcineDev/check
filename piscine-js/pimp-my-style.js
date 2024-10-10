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
export function pimp() {
    if (count == 0) {
        end = false
    }
    const btn = document.querySelector('button')
    if (count <= styles.length && !end) {
        console.log(btn);
        btn.classList.add("unpimp")
        btn.classList.add(styles[count])
        count++
    }
    if (count > styles.length) {
        end = true
    }
    if (end) {
        count--
        btn.classList.remove("unpimp")
        btn.classList.remove(styles[count])
    }
}