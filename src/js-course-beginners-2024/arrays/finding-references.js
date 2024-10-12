const employees = [
  {
    id: 1,
    name: 'John',
  },
  {
    id: 2,
    name: 'Paul',
  },
  {
    id: 3,
    name: 'George',
  },
  {
    id: 4,
    name: 'Ringo',
  },
];

// const employee = employees.find(function(e) {
//   return e.name === 'George'; 
// });
const employee = employees.find((e) => e.name === 'George');
console.log(employee);

const index = employees.findIndex(function(e) {
  return e.name === 'Paul';
});
console.log(index);


// function add(num1, num2) {
//   return num1 + num2;
// }

// const add = (num1, num2) => {
//   return num1 + num2;
// }

const add = (num1, num2) => num1 + num2;