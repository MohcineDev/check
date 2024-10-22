import { readFile, writeFile } from 'node:fs'
import path from 'node:path'
import { argv } from 'node:process'

let file = argv[2]
let encodeDecode = argv[3]
let newName = argv[4]


readFile(file, (err, data) => {
    try {
        if (err) {
            console.error(err);

        } else {
            handleBase64(encodeDecode, data)
        }
    } catch (error) {
        console.log(error);
    }
})

function handleBase64(type, data) {

    let content = ''

    if (type == 'encode') {

        content = btoa(data.toString())
        if (newName && path.extname(newName) == '.txt') {
            
            writeFile(newName, content, err => console.log(err))
        } else {
            writeFile('cypher.txt', content, err => console.log(err))
        }

    } else if (type = 'decode') {

        content = atob(data.toString())

        if (newName && path.extname(newName) == '.txt') {
            writeFile(newName , content, err => console.log(err))
        } else {
            writeFile('clear.txt', content, err => console.log(err))
        }
    }

}