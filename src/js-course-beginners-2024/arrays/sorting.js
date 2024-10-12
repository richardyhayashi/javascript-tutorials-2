//let characters = ['c', 'd', 'b', 'a'];
// characters.sort();
// console.log(characters);

//characters.reverse();
//console.log(characters);

let employees = [
  { id: 1, name: 'Jen' },
  { id: 2, name: 'Steven' },
  { id: 3, name: 'Andrew' },
  { id: 4, name: 'Terry' },
];
employees.sort((a, b) => {
  const lowercaseA = a.name.toLowerCase();
  const lowercaseB = b.name.toLowerCase();

  if (lowercaseA < lowercaseB) return -1;
  if (lowercaseA > lowercaseB) return 1;
  return 0;
});
console.log(employees);