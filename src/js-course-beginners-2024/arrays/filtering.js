// const numbers = [1, 2, 3, 4, 5, 6];
// const evenNumbers = numbers.filter(number => number % 2 === 0);
// console.log(evenNumbers);

const employees = [
  { id: 1, name: 'Alice', role: 'Developer' },
  { id: 2, name: 'Bob', role: 'Designer' },
  { id: 3, name: 'Charlie', role: 'Developer' },
  { id: 4, name: 'Danielle', role: 'Manager' },
];
const developers = employees.filter(employee => employee.role.toLowerCase() === 'developer');
console.log(developers);