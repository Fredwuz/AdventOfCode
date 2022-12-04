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
  let overlappingSections = 0;

  for (let i = 0; i < lines.length; i++) {
    let sections = lines[i].split(',');
    let section1 = sections[0].split('-');
    let section2 = sections[1].split('-');

    if (
      (Number(section1[0]) >= Number(section2[0]) && Number(section1[1]) <= Number(section2[1])) ||
      (Number(section1[0]) <= Number(section2[0]) && Number(section1[1]) >= Number(section2[1])) // String has to be Converted to Number
    ) {
      overlappingSections++;
    }
  }
  console.log(overlappingSections);
})();
