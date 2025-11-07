//Advent of Code 2015 Solution
//Solution = 138
// 2*l*w + 2*w*h + 2*h*l
import { plugFileIntoArray } from "../../utils/fileFunctions.js";

let feetPaper = 0;
let data = await plugFileIntoArray("input.txt");
const lines = data.split(/\r?\n/);

lines.forEach((line) => {
  let lineNumberArray = line.split("x");
  let l = parseInt(lineNumberArray[0]);
  let w = parseInt(lineNumberArray[1]);
  let h = parseInt(lineNumberArray[2]);
  let ribbon = 2 * (l+w+h - Math.max(l,w,h)) 
  let bow = l * w * h;
  let final = ribbon + bow;
  feetPaper += final;
});
console.log(feetPaper);
