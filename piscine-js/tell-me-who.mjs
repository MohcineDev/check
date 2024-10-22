import { argv } from "node:process";
import fs from 'node:fs'


let names = []
fs.readdir(argv[2], (err, files) => {
    if (err) {

        console.error(err);
    } else {
        files.forEach((elem, index) => {
            const name = elem.substring(0, elem.length - 5)
            const fullName = name.split('_')
            console.log(fullName);
            if (fullName.length > 1) {
                names.push(fullName[1] + " " + fullName[0])

            } else
                names.push(fullName[0])
        })
    }
    names.sort()
    names.map((elem, index) => console.log(++index + '. ' + elem))
})


