import * as fs from 'fs';

const input = fs.readFileSync('input.txt', 'utf8')
  .split('\n')

input.pop()

// A = Rock, B = Paper, C = Scissor
// X = Rock(1), Y = Paper(2), Z = Scissor(3)

let totalSum = 0

for (let i = 0; i < input.length; i++) {
  let opponentsChoice = input[i][0]
  let myChoice = input[i][2]

  if (opponentsChoice === "A" && myChoice === "X" || opponentsChoice === "B" && myChoice === "Y" || opponentsChoice === "C" && myChoice === "Z") {
    console.log(`round ${i} is a tie, Opponent chose ${opponentsChoice} and you chose ${myChoice}`)
    if (myChoice === "X") {
      totalSum += 4
    } else if (myChoice === "Y") {
      totalSum += 5
    } else {
      totalSum += 6
    }
  }


  if (opponentsChoice === "A" && myChoice === "Y" || opponentsChoice === "B" && myChoice === "Z" || opponentsChoice === "C" && myChoice === "X") {
    console.log(`round ${i} is a win, Opponent chose ${opponentsChoice} and you chose ${myChoice}`)
    if (myChoice === "X") {
      totalSum += 7
    } else if (myChoice === "Y") {
      totalSum += 8
    } else {
      totalSum += 9
    }
  }

  if (opponentsChoice === "A" && myChoice === "Z" || opponentsChoice === "B" && myChoice === "X" || opponentsChoice === "C" && myChoice === "Y") {
    console.log(`round ${i} is a loss, Opponent chose ${opponentsChoice} and you chose ${myChoice}`)
    if (myChoice === "X") {
      totalSum += 1
    } else if (myChoice === "Y") {
      totalSum += 2
    } else {
      totalSum += 3
    }
  }

  console.log(totalSum)
}


console.log(input)
