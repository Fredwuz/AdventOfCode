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

  for (let i = 0; i < lines.length; i++) {
    let length = lines[i].length;
    let firstCompartment = lines[i].slice(0, length / 2);
    let secondCompartment = lines[i].slice(length / 2);
    for (let j = 0; j < firstCompartment.length; j++) {
      if (secondCompartment.includes(firstCompartment[j])) {
        duplicates += firstCompartment[j];
        j += firstCompartment.length;
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
