/*
Author: Fredwuz (frederic23.mai@gmail.com)
index.js (c) 2022
Desc: description
Created:  1.12.2022
Modified: 1.12.2022
*/

let fs = require('fs');

(async () => {
  let data = await fs.readFileSync('input.txt', 'utf8');
  let lines = data.split('\n');
  let calories = [0];
  j = 0;
  let highestCalories = 0;
  let highestTopCalories = 0;

  for (let i = 0; i < lines.length; i++) {
    if (lines[i] === '') {
      j++;
      calories[j] = 0;
    } else {
      calories[j] += Number(lines[i]);
    }
  }
  for (let j = 0; j < 3; j++) {
    for (let i = 0; i < calories.length; i++) {
      if (calories[i] > highestCalories) {
        highestCalories = calories[i];
      }
    }
    console.log(highestCalories);
    calories.splice(calories.indexOf(highestCalories), 1);
    highestTopCalories += highestCalories;
    highestCalories = 0;
  }
  console.log(highestTopCalories);
})();
