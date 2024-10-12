// const numbers = [1, 2, 4, 8, 16, 32];
// const squaredNumbers = numbers.map(num => num * num);
// console.log(squaredNumbers);

// const characters = ['a', 'b', 'c', 'd'];
// const upperCaseCharacters = characters.map(char => char.toUpperCase());
// console.log(upperCaseCharacters);

const employees = [
  { id: 1, name: 'Alice', email: 'AliCe@gmail.com' },
  { id: 2, name: 'Steven', email: 'STeVen@gmail.com' },
  { id: 3, name: 'Joe', email: 'Joe@gmail.com' },
];
const updatedEmployees = employees.map(employee => ({
  ...employee,
  email: employee.email.toLowerCase()
}));
console.log(updatedEmployees);