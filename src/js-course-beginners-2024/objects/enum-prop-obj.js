/* let numbers = [1, 2, 3, 4, 5];
for (const elements of numbers) {
  console.log(elements);
} */

const dog = {
  name: 'Max',
  age: 5,
  eyeColor: 'blue',
};
// for (const key in dog) {
//   console.log(dog[key]);
// }

 const keys = Object.keys(dog);
// console.log(keys);

const values = Object.values(dog);
//console.log(values);

const entries = Object.entries(dog);
//console.log(entries);

for (const key of keys) {
  console.log(key);
}

for (const value of values) {
  console.log(value);
}

for (const entry of entries) {
  console.log(entry);
}