//Advent of Code 2015 Solution
//Solution = 138
// 2*l*w + 2*w*h + 2*h*l
import { plugFileIntoArray } from "../../utils/fileFunctions.js";

let feetPaper = 0;
let data = await plugFileIntoArray("secondDay/input.txt");
const lines = data.split(/\r?\n/);

lines.forEach((line) => {
  let lineNumberArray = line.split("x");
  let l = parseInt(lineNumberArray[0]);
  let w = parseInt(lineNumberArray[1]);
  let h = parseInt(lineNumberArray[2]);
  let sur1 = l * w;
  let sur2 =  w * h;
  let sur3 =  h * l;
  let minSur = Math.min(sur1,sur2,sur3)
  let surface =2*( sur1 + sur2 + sur3);
  let final = surface + minSur
  feetPaper += final
});
console.log(feetPaper);

