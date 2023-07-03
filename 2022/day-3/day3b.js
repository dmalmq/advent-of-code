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

function findCommonCharacters(sentance) {
  const sentance1 = sentance[0]
  const sentance2 = sentance[1]
  const sentance3 = sentance[2]

  const set1 = new Set(sentance1)
  const set2 = new Set(sentance2)
  const set3 = new Set(sentance3)

  const commonChars = [...set1].filter(char => set2.has(char) && set3.has(char))

  return commonChars
}


for (let i = 0; i < input.length; i += 3) {
  let threeGroup = input.slice(i, i + 3)

  const commonChars = findCommonCharacters(threeGroup)
  let char = commonChars[0]
  letterValue(char)
}

console.log(sum)
