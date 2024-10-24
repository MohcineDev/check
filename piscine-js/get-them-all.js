export const getBonannoPisano = () => {
    const arch = document.querySelector('#BonannoPisano')
    const other = document.querySelectorAll('.active.classical')
    return [arch, other]
}

export const getActive = () => {
    const active = document.querySelectorAll('.active')
    const non_active = document.querySelectorAll('a:not(.active)')
    return [active, non_active]
}
export const getArchitects = () => {
    const BonannoPisano = document.querySelectorAll('a')
    const nonArch = document.querySelectorAll('span')
    let a = []
    a.push(BonannoPisano)
    a.push(nonArch)
    console.log(a);
    return a
}
export const getClassical = () => {
    const classical = document.querySelectorAll('.classical')
    const non_classical = document.querySelectorAll('a:not(.classical)')

    return [classical, non_classical]
}