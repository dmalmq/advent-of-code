import * as fs from 'fs';

const calories = fs.readFileSync('day-1-input.txt', 'utf8')
  .split('\n')


const splitArray = []
let currentArray = []

for (let i = 0; i < calories.length; i++) {
  if (calories[i] === '') {
    if (currentArray.length > 0) {
      splitArray.push(currentArray)
      currentArray = [];
    }
  } else {
    currentArray.push(calories[i])
  }
}

if (currentArray.length > 0) {
  splitArray.push(currentArray)
}

let maxCalorieSum = 0
let calorieArray = []


for (let i = 0; i < splitArray.length; i++) {
  console.log(`current array is: ${splitArray[i]}`)
  let currentCalorieSum = 0
  for (let j = 0; j < splitArray[i].length; j++) {
    currentCalorieSum += parseInt(splitArray[i][j])
  }
  calorieArray.push(currentCalorieSum)
  if (currentCalorieSum > maxCalorieSum) {
    console.log(currentCalorieSum)
    maxCalorieSum = currentCalorieSum
  }
}

calorieArray.sort(function(a, b) { return a - b }).reverse()
let finalArray = calorieArray.slice(0, 3).reduce((acc, curr) => acc + curr, 0)


console.log(maxCalorieSum)
console.log(calorieArray)
console.log(finalArray)
