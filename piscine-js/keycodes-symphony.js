
export function compose(event, key, color) {
    if (event == "lower_case") {
        const div = document.createElement('div')
        div.classList.add("note")
        div.textContent = key
        div.style.backgroundColor = `#${color}${color}`
        document.body.appendChild(div)
    }

}


document.addEventListener('keypress', e => {
    if (e.keyCode >= 97 && e.keyCode <= 122) {
        compose("lower_case", e.key, e.charCode)
        console.log(e);
    }
})


document.addEventListener('keydown', e => {

    switch (e.keyCode) {
        case 8:
            document.body.removeChild(document.querySelector('div:last-child'))

            break;
        case 27:
            document.querySelectorAll('div').forEach(elem => document.body.removeChild(elem))
            break;
    }

})