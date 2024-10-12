const person = {
  name: 'Steven',
};
//console.log(person);

// Add property with key.
person.favoriteFood = 'tacos';
//console.log(person);

// Add property w/ bracket notation and key.
person['favoriteIceCream'] = 'Chocolate';
//console.log(person);

// Delete properties.
delete person.favoriteIceCream;
//console.log(person);

// Add methods
person.eat = function () {
  console.log('Start eating');
}
person.eat();

// Cannot reasign becsause of const
//person = {};