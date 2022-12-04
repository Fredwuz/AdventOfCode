/*
Author: Fredwuz (frederic23.mai@gmail.com)
index.js (c) 2022
Desc: description
Created:  2.12.2022
Modified: 4.12.2022
*/

let fs = require('fs');

(async () => {
  let data = await fs.readFileSync('input.txt', 'utf8');
  let lines = data.split('\n');
  let duplicates = '';
  let sum = 0;

  for (let i = 0; i < lines.length; i += 3) {
    let firstElf = lines[i];
    let secondElf = lines[i + 1];
    let thirdElf = lines[i + 2];
    for (let j = 0; j < firstElf.length; j++) {
      if (secondElf.includes(firstElf[j]) && thirdElf.includes(firstElf[j])) {
        duplicates += firstElf[j];
        j += firstElf.length;
      }
    }
  }
  for (let i = 0; i < duplicates.length; i++) {
    let charCode = duplicates[i].charCodeAt(0);
    if (charCode > 90) {
      sum += charCode - 96; // -96 => a = 97 has to be 1
    } else {
      sum += charCode - 38; // -38  => A = 65 has to be 27
    }
  }
  console.log(sum);
})();
