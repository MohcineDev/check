import { argv } from 'node:process'
import { writeFile, readdir, readFile } from 'node:fs/promises'
import path from 'node:path';

let withYES = []

async function getData() {
    try {

        let files = await readdir(argv[2])

        if (files.length == 0) {
            handleWrite('')
            return

        }
        for (let index = 0; index < files.length; index++) {
            let content = await readFile(path.join(argv[2], files[index]))

            if (JSON.parse(content.toString()).answer == 'yes') {
                withYES.push(files[index])
            }
        }
        let newData = []
        withYES.map((elem, index) => {
            let file = elem.slice(0, elem.length - 5)
            let line = file.split('_')
            newData.push(`${line[1]} ${line[0]}`)

        })
        let sortedData = newData.sort()
        let toPrint = []
        sortedData.map((elem, index) => {
            if (index < sortedData.length - 1) {

                toPrint.push(`${index + 1}. ${elem}\n`)
            } else {
                toPrint.push(`${index + 1}. ${elem}`)
            }
        })
        handleWrite(toPrint)

    } catch (err) {
        console.error(err);
    }

}

function handleWrite(data) {
    writeFile('vip.txt', data)
}

getData()