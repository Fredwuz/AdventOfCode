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
    // 2-4,6-8
    let section11 = Number(section1[0]); // 2
    let section12 = Number(section1[1]); // 4
    let section21 = Number(section2[0]); // 6
    let section22 = Number(section2[1]); // 8

    if (
      section11 == section21 ||
      section11 == section22 ||
      section12 == section21 ||
      section12 == section22 ||
      (section11 >= section21 && section11 <= section22) ||
      (section12 >= section21 && section11 <= section22)
    ) {
      overlappingSections++;
    }
  }
  console.log(overlappingSections);
})();
