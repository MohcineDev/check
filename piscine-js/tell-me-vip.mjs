import { argv } from 'node:process'
import { readdir, readFile } from 'node:fs/promises'
import path from 'node:path';

// let dir = argv.slice(2)
let withYES = []
let count = 0


async function handleReadFile(file) {
    let content = await readFile('./guests/' + file)

    if (JSON.parse(content.toString()).answer == 'yes') {
        count++
        console.log('hi', count)
        
        return true
    }

    return false
}

async function getData() {
    // let files = ''
    try {

        let files = await readdir('./guests')
        files.map(elem => {
            handleReadFile(elem) ? withYES.push(elem) : null

        })

        // console.log(withYES)

        // (err, data) => {
        //     err ? console.log(err) : console.log(data)


        //     for (let index = 0; index < data.length; index++) {
        //         console.log(handleReadFile(data[index]));

        //     }

        // })
    } catch (err) {
        console.error(err);
    }


}



getData()