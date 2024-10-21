import { argv } from 'node:process'
import { writeFile, readdir, readFile } from 'node:fs/promises'
import path from 'node:path';

// let dir = argv.slice(2)
let withYES = []
let count = 0


async function handleReadFile(file) {
    let content = await readFile('./guests/' + file)

    if (JSON.parse(content.toString()).answer == 'yes') {

        return true
    }

    return false
}

async function getData() {
    // let files = ''
    try {

        let files = await readdir('./guests')
        // files.map(elem => {
        //     handleReadFile(elem) ? withYES.push(elem) : null

        // })


        // (err, data) => {
        //     err ? console.log(err) : console.log(data)


        for (let index = 0; index < files.length; index++) {
            // console.log(handleReadFile(files[index]));
            let content = await readFile('./guests/' + files[index])

            if (JSON.parse(content.toString()).answer == 'yes') {
                withYES.push(files[index])
                // return true
            }
        }
        let newData = []
        withYES.sort().map((elem, index) => {
            let file = elem.slice(0, elem.length - 5)
            let line =  file.split('_')
            newData.push(`${index+1}. ${line[1]} ${line[0]}\n`)
        })
        handleWrite(newData)
        // console.log(withYES)

        // })
    } catch (err) {
        console.error(err);
    }


}

function handleWrite(data) {
    writeFile('vip.txt', data)
}

getData()