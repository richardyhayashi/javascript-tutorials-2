const dog = {
  name: 'Max',
  breed: 'Dachshund',
  age: 5,
  weightInPounds: 12,
  eat: function() {
    console.log('Chomp!');
  },
  bark() {
    console.log('Woof!');
  }
};

// const anotherDog = {
//   name: 'Marley',
//   breed: 'Chocolate Lab',
//   age: 3,
//   weightInPounds: 60,
//   eat: function () {
//     console.log('Chomp!');
//   },
//   bark() {
//     console.log('Woof!');
//   },
// };

function getDog(name, breed, age, weightInPounds) {
  return {
    name,
    breed,
    age,
    weightInPounds,
    eat() {
      console.log('Chomp!');
    },
    bark() {
      console.log('Woof!');
    },
  };
}

const anotherDog = getDog('Marley', 'Chocolate Lab', 3, 60);
console.log(anotherDog);