//Advent of Code 2015 Solution
//Solution = 1771
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
textArray.forEach((c, index) => {
  if (c == "(") {
    solution++;
  }
  if (c == ")") {
    solution--;
  }
  if (solution == -1) {
    console.log(index);
  }
});
