import { argv } from "node:process";
const arg = argv[2].split(" ");
let res = "";
arg.forEach((word, index) => {

    let len = word.length;
    let firstHalf = word.slice(0, Math.ceil(len / 2));
    let secondHalf = word.slice(Math.ceil(len / 2));


    res += secondHalf + firstHalf + ' ';
});
console.log(res);