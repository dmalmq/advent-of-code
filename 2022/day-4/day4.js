import * as fs from 'fs';

const input = fs.readFileSync('input.txt', 'utf8')
  .split('\n')

input.pop()



console.log(input)

let sum = 0

for (let i = 0; i < input.length; i++) {

  let values = input[i].split(",");
  const firstTwo = (values[0].split('-'))
  const secondTwo = (values[1].split('-'))


  const firstMin = parseInt(firstTwo[0])
  const firstMax = parseInt(firstTwo[1])
  const secondMin = parseInt(secondTwo[0])
  const secondMax = parseInt(secondTwo[1])


  if ((firstMin >= secondMin && firstMax <= secondMax) || (secondMin >= firstMin && secondMax <= firstMax)) {
    sum++
    console.log(`${firstTwo} ${secondTwo} ${sum}`)
  }
}

console.log(sum)
