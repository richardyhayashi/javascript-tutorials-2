// *** ***
// const course = {
//   name: 'Javascript for Beginners',
//   start() {
//       console.log(this.name);
//   }
// }

// course.start();


// *** ***
// function startVideo() {
//   console.log(this);
// }

// startVideo();


// *** ***
// const course = {
//   name: 'ES6 Syntax',
//   start: () => {
//       console.log(this.name);
//   }
// }

// course.start();


// *** ***
function introduce(language) {
  console.log(`${this.name} teaches ${language}`);
}

const instructor = { name: 'Steven' };
const introduction = introduce.bind(instructor);
introduction('JavaScript');