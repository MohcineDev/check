import { argv } from "node:process";
import fs from 'node:fs';
const arg = argv[2].split(" ");
let res = "";

arg.forEach((word, index) => {
    let space = ''
    let len = word.length;
    let firstHalf = word.slice(0, Math.ceil(len / 2));
    let secondHalf = word.slice(Math.ceil(len / 2));
    if (index < arg.length - 1) {
        space = ' '
    }
    res += secondHalf + firstHalf + space;
});

fs.writeFile('verydisco-forever.txt', res, err => {
    if (err) {
        console.error(err);
    } else console.log('file written successfully');
})
