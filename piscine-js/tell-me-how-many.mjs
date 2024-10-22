import fs from 'node:fs'
import { argv } from "node:process";


fs.readdir(argv[2], (err, files) => {
    if (err) {

        console.error(err);
    } else {
        console.log(files.length);
    }
})