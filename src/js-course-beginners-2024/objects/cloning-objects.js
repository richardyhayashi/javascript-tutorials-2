let a = { value: 10 }
//let b = {};
let b = { ...a }

//Object.assign(b, a);

b.value = 20;

console.log(a);
console.log(b);