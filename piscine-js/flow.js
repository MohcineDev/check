function flow(arr) {
    let count = 0
    let res = 0

    while (count < arr.length) {
 
        res += arr[count]()
        count++
    }
    return res
}
 
const sub32 = (el) => el - 32
const mult5 = (el) => el * 5
const div9 = (el) => el / 9
const roundDown = (el) => Math.floor(el)

const farenheitToCelsius = flow([sub32, mult5, div9, roundDown])
//const aa = to_call(x, y)

console.log("far : ", ()=> farenheitToCelsius(32));
// console.log("far : ",c(2,4));



const square = (nbr) => nbr * nbr
const add2 = (el) => el + 2
const mult2 = (el) => el * 2
