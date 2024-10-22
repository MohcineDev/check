import { argv } from "node:process";
import fs from 'node:fs';
const arg = argv[2]
let res = ''
let content = fs.readFile(arg, (err, data) => {
    if (err) {
        console.error(err);
    } else {

        let arg = data.toString().split(" ");
        arg.forEach((word, index) => {
            let space = ''
            let len = word.replace('\n', '').length;
            let firstHalf = word.replace('\n', '').slice(0, Math.floor(len / 2));
            let secondHalf = word.replace('\n', '').slice(Math.floor(len / 2));


            if (index < arg.length - 1) {
                space = ' '
            }
            res += secondHalf + firstHalf + space;
        });
    }

    console.log(res);
})