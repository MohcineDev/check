const person1 = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};


function invert(obj) {
    let newObj = {}
    let length = Object.keys(obj).length

    for (let i = 0; i < length; i++) {
        newObj[Object.values(obj)[i]] = Object.keys(obj)[i]

    }

    // newObj[invertString(obj)]
    return newObj
}

console.log(invert(person1));