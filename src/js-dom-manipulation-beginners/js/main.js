const playground = document.getElementById('playground');
//const playground = document.querySelector('#playground'); // id playground
//const playground = document.querySelector('.playground'); // class playground
//const firstDiv = document.querySelector('div'); // first 'div'
//const divs = document.querySelectorAll('div'); // list of all 'div's

//playground.append('🧙 Wizard', ' ', '🔮 Crystal Ball', ' ', '📖 Spell Book');
//console.log(firstDiv);
//console.log(divs);

// const magicalOrb = document.createElement('div');
// magicalOrb.textContent = '🔮';
// //playground.append(magicalOrb);
// playground.appendChild(magicalOrb);

const scrollOfWisdom = document.createElement('p');
playground.append(scrollOfWisdom);

scrollOfWisdom.innerText = 'Ancient wisdom lies here';
console.log(scrollOfWisdom);