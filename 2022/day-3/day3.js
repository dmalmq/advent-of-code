import * as fs from 'fs';

const input = fs.readFileSync('input.txt', 'utf8')
  .split('\n')

input.pop()


let sum = 0

function letterValue(char) {
  const asciiValue = char.charCodeAt(0);

  if (asciiValue >= 97 && asciiValue <= 122) {
    sum += asciiValue - 96
  } else if (asciiValue >= 65 && asciiValue <= 90) {
    sum += asciiValue - 38
  }
}

for (let i = 0; i < input.length; i++) {
  let firstExample = input[i]
  let wordLength = firstExample.length / 2
  let firstCompartment = firstExample.slice(0, wordLength);
  let secondCompartment = firstExample.slice(wordLength, firstExample.length);
  let match = ""
  for (let j = 0; j < firstCompartment.length; j++) {
    for (let k = 0; k < secondCompartment.length; k++) {
      if (firstCompartment[j] === secondCompartment[k]) {
        match = secondCompartment[k]
        break;
      }
    }
  }
  letterValue(match)
}

console.log(sum)
