import * as fs from 'fs';

const input = fs.readFileSync('input.txt', 'utf8')
  .split('\n')

input.pop()

// A = Rock, B = Paper, C = Scissor
// X = Loose, Y = Draw, Z = Win

let totalSum = 0

for (let i = 0; i < input.length; i++) {
  let opponentsChoice = input[i][0]
  let myChoice = input[i][2]

  if (myChoice === "Y") {
    console.log(`round ${i} is a tie, Opponent chose ${opponentsChoice} and you chose ${myChoice}`)
    if (opponentsChoice === "A") {
      totalSum += 4
    } else if (opponentsChoice === "B") {
      totalSum += 5
    } else {
      totalSum += 6
    }
  }


  if (myChoice === "Z") {
    console.log(`round ${i} is a win, Opponent chose ${opponentsChoice} and you chose ${myChoice}`)
    if (opponentsChoice === "C") {
      totalSum += 7
    } else if (opponentsChoice === "A") {
      totalSum += 8
    } else {
      totalSum += 9
    }
  }

  if (myChoice === "X") {
    console.log(`round ${i} is a loss, Opponent chose ${opponentsChoice} and you chose ${myChoice}`)
    if (opponentsChoice === "B") {
      totalSum += 1
    } else if (opponentsChoice === "C") {
      totalSum += 2
    } else {
      totalSum += 3
    }
  }

  console.log(totalSum)
}


console.log(input)

