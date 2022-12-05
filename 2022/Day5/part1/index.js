/*
Author: Fredwuz (frederic23.mai@gmail.com)
index.js (c) 2022
Desc: description
Created:  2.12.2022
Modified: 5.12.2022
*/

let fs = require('fs');

(async () => {
  let data = await fs.readFileSync('input.txt', 'utf8');
  let lines = data.split('\n');
  let crates = {
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
    6: [],
    7: [],
    8: [],
    9: [],
  };
  let index;

  for (let i = 0; i < lines.length; i++) {
    if (lines[i][1] == 1) {
      index = i + 2;
      i += lines.length;
      break;
    }
    for (let j = 1, l = 1; j < lines[i].length; j += 4, l++) {
      if (lines[i][j] != ' ') {
        crates[l].push(lines[i][j]);
      }
    }
  }
  for (let i = 1; i < 10; i++) {
    crates[i] = crates[i].reverse();
  }
  const regex = /\d+/g;
  for (let i = index; i < lines.length; i++) {
    let commands = lines[i].match(regex);

    for (let j = 0; j < commands[0]; j++) {
      crates[commands[2]].push(crates[commands[1]].pop());
    }
  }
  let message = '';
  for (let i = 1; i < 10; i++) {
    message += crates[i].slice(-1);
  }
  console.log(message);
})();
