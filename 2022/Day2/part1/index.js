/*
Author: Fredwuz (frederic23.mai@gmail.com)
index.js (c) 2022
Desc: description
Created:  2.12.2022
Modified: 2.12.2022
*/

let fs = require('fs');

(async () => {
  let data = await fs.readFileSync('input.txt', 'utf8');
  let lines = data.split('\n');
  let rock = 1,
    paper = 2,
    scissors = 3,
    win = 6,
    draw = 3,
    lose = 0,
    score = 0;

  /*
  win = 6
  draw = 3
  lose = 0
  Rock = 1
  Paper = 2
  Scissors = 3
  Player
    Rock = X
    Paper = Y
    Siccors = Z
  Elves
    Rock = A
    Paper = B
    Siccors = C

  */

  for (let i = 0; i < lines.length; i++) {
    let input = lines[i].split(' ');
    let elves = input[0];
    let player = input[1];

    switch (player) {
      case 'X':
        score += rock;
        break;
      case 'Y':
        score += paper;
        break;
      case 'Z':
        score += scissors;
        break;
    }

    if ((player == 'X' && elves == 'C') || (player == 'Y' && elves == 'A') || (player == 'Z' && elves == 'B')) {
      score += win;
    } else if ((player == 'X' && elves == 'A') || (player == 'Y' && elves == 'B') || (player == 'Z' && elves == 'C')) {
      score += draw;
    }
  }
  console.log(score);
})();
