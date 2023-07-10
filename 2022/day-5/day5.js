import * as fs from 'fs';

const input = fs.readFileSync('demo.txt', 'utf8')
  .split('\n')

input.pop()

const numbersOnly = [];

for (let i = 0; i < input.length; i++) {
  const numbers = input[i].match(/\d+/g);
  if (numbers) {
    numbersOnly.push(numbers)
  }

}

let crates = [[], ["Z", "N"], ["M", "C", "D"], ["P"]]

for (let i = 0; i < numbersOnly.length; i++) {

}
