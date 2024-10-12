// function add(num1, num2) {
//   return num1 + num2;
// };

// const n = add;
// console.log(n(1, 2));

//console.log(add.length);

// function Programmer(name) {
//   this.name = name;
//   this.writeCode = function () {
//     console.log('Code in JavaScript');
//   };
// }
//  console.log(Programmer.length);
//  console.log(Programmer.constructor);

const Programmer = new Function(
  'name',
  `
    this.name = name;
    this.writeCode = function() {
      console.log('Code in JavaScript');
    }
  `
);
const newProgrammer = new Programmer('Steven');

newProgrammer.writeCode();