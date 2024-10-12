// let course = {
//   name: 'Javascript for Beginners',
//   duration: '3 hours',
// };

// let newCourse = {
//   ...course,
//   name: 'JavaScript Pro'
// };
// console.log(newCourse);

// function multiply(...args) {
//   return args.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
// }
// console.log(multiply(1, 2, 3, 4));

function multiply(multiplier, ...numbers) {
  return numbers.map(number => number * multiplier);
}
console.log(multiply(2, 1, 2, 3, 4));