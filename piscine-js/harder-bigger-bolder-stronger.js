const upper_case_code = ArrayFromLowToHigh(65, 90);

function ArrayFromLowToHigh(low, high) {
    const array = [];

    for (let i = low; i <= high; i++) {
        array.push(i);
    }
    return array;
}


export function generateLetters(params) {
    for (let index = 0; index < 120; index++) {

        let div = document.createElement('div')
        let char = upper_case_code[Math.floor(Math.random() * upper_case_code.length)]
        div.textContent = String.fromCharCode(char)
        div.style.fontSize = `${index + 11}px`
        if (index < 40) {
            div.style.fontWeight = 300

        } if (index >= 40 && index < 80) {
            div.style.fontWeight = 400

        } if (index >= 80) {
            div.style.fontWeight = 600

        }
        document.body.appendChild(div)
    }
}



