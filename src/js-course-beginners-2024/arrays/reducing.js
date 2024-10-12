const numbers = [1, 10, 5, 14];

// let sum = 0;
// for (const num of numbers) {
//   sum += num;
// }
// console.log(`Total sum: ${sum}`);

// const sum = numbers.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue;
// }, 0);

const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue );

console.log(`Total sum: ${sum}`);