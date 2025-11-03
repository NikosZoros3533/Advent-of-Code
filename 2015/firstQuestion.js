//Advent of Code 2015 Solution
//Solution = 138
const fs = require("fs");
let inputData;
try {
  const data = fs.readFileSync("input.txt", "utf8");
  inputData = data;
} catch (err) {
  console.error("Error reading file:", err);
}
let text = "" + inputData;
let solution = 0;
const textArray = Array.from(text);
textArray.forEach((c) => {
  if (c == "(") {
    solution++;
  }if(c == ")") {
    solution--;
  }
});
console.log(solution);
