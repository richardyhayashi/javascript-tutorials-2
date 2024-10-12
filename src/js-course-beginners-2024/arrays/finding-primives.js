const numbers = [5, 4, 3, 2, 1, 3];

const indexOfThree = numbers.indexOf(3);
//console.log(indexOfThree);
//console.log(numbers[indexOfThree]);

const lastIndexOfThree = numbers.lastIndexOf(3);
//console.log(lastIndexOfThree);

const indexOfTen = numbers.lastIndexOf(10);
// console.log(indexOfTen);
// console.log(numbers[indexOfTen]);
// if (indexOfTen === -1) {
//   console.log('10 is not in the arrray');
// }

if (!numbers.includes(10)) {
  console.log('10 is not found in the array');
}