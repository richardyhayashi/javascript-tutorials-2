const exampleNumbersA = [1, 2, 3];
const exampleNumbersB = [4, 5, 6];

const combinedArray = exampleNumbersA.concat(exampleNumbersB);
console.log(combinedArray);

const firstSlice = combinedArray.slice(0, 4);
console.log(firstSlice);

let combined = [...exampleNumbersA, 9, ...exampleNumbersB, 10];
console.log(combined);

// Copy array
let a =[1, 2];
let b = [...a]

console.log(b);