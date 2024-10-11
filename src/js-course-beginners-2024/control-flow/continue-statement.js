// for (let i = 0; i < 10; i++) {
//   if (i % 2 === 0) {
//     continue;
//   }
//   console.log(i);
// }

// let i = 0;
// while (i < 10) {
//   i++;
//   if (i % 2 === 0) {
//     continue;
//   }
//   console.log(i);
// }

// let i = 0;
// do {
//   i++;
//   if (i % 2 === 0) {
//     continue;
//   }
//   console.log(i);
// } while (i < 10);

// const obj = { a: 1, b: 2, c: 3, d: 4 };
// for (let key in obj) {
//   if (obj[key] % 2 === 0) {
//     continue;
//   }
//   console.log(obj[key]);
// }

const arr = [1, 2, 3, 4, 5];
for (let element of arr) {
  if (element % 2 === 0) {
    continue;
  }
  console.log(element);
}