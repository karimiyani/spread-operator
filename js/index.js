const first = [10, 20, 30];
const second = [40, 50, 60];


// const combined = first.concat(second);
// console.log(combined);
// (6) [10, 20, 30, 40, 50, 60]


const combined = [...first];
console.log(combined);
// (3) [10, 20, 30]


// *****combine more than two********
const combined2 = [...first,...second];
console.log(combined2);
// (6) [10, 20, 30, 40, 50, 60]


//spread and add data
const combined3 = [...first,"a",...second,"bb"];
console.log(combined3);
// (8) [10, 20, 30, 'a', 40, 50, 60, 'bb']