function flow(arr) {
    let count = 0
    let res
    while (count < arr.length) {
        res += arr[count]
        count++
    }

    return res
}




const sub32 = (el) => el - 32
const mult5 = (el) => el * 5
const div9 = (el) => el / 9
const roundDown = (el) => Math.floor(el)


const square = (nbr) => nbr * nbr
const add2 = (el) => el + 2
const mult2 = (el) => el * 2

