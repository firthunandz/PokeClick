
// POKYS
const pokys = document.querySelector('.pokys');
let parsedPokys = parseFloat(pokys.innerHTML);

// RESET
const reset = document.querySelector('.reset');

// POKYS CLICK INCREASE
let PCI = 1;
const clickIncrease = document.getElementById('#clickIncrement');
const numberPCI = () => {
  document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('clickable-area').addEventListener('click', function(event) {
      const number = document.createElement('span');
      number.className = 'number';
      number.textContent = PCI;

      const x = event.clientX;
      const y = event.clientY;

      number.style.left = `${x}px`;
      number.style.top = `${y-45}px`;

      document.getElementById('number-container').appendChild(number);

      // Remove the element after animation ends
      number.addEventListener('animationend', function() {
          number.remove();
      });
    });
  });
};
numberPCI();

// POKYS PER SECOND
let PPS = 0;
const spanPPS = document.querySelector('.spanpps');
let parsedPPS = parseFloat(spanPPS.innerHTML);

// POKY CLICK
const increment = () => {
  pokys.innerHTML = parsedPokys += PCI;
  numberPCI();
}

// PIKACHU
const pikachuCost = document.querySelector('.pikachu-cost');
let parsedPikachuCost = parseFloat(pikachuCost.innerHTML);
const pikachuLevel = document.querySelector('.pikachu-level');
let parsedPikachuLevel = parseFloat(pikachuLevel.innerHTML);
const pikachuIncrease = document.querySelector('.pikachu-increase');
let parsedPikachuIncrease = parseFloat(pikachuIncrease.innerHTML)

// BULBASAUR
const bulbasaurCost = document.querySelector('.bulbasaur-cost');
let parsedBulbasaurCost = parseFloat(bulbasaurCost.innerHTML);
const bulbasaurLevel = document.querySelector('.bulbasaur-level');
let parsedBulbasaurLevel = parseFloat(bulbasaurLevel.innerHTML);
const bulbasaurIncrease = document.querySelector('.bulbasaur-increase');
let parsedBulbasaurIncrease = parseFloat(bulbasaurIncrease.innerHTML);

// CHARMANDER
const charmanderCost = document.querySelector('.charmander-cost');
let parsedCharmanderCost = parseFloat(charmanderCost.innerHTML);
const charmanderLevel = document.querySelector('.charmander-level');
let parsedCharmanderLevel = parseFloat(charmanderLevel.innerHTML);
const charmanderIncrease = document.querySelector('.charmander-increase');
let parsedCharmanderIncrease = parseFloat(charmanderIncrease.innerHTML);

// SQUIRTLE
const squirtleCost = document.querySelector('.squirtle-cost');
let parsedSquirtleCost = parseFloat(squirtleCost.innerHTML);
const squirtleLevel = document.querySelector('.squirtle-level');
let parsedSquirtleLevel = parseFloat(squirtleLevel.innerHTML);
const squirtleIncrease = document.querySelector('.squirtle-increase');
let parsedSquirtleIncrease = parseFloat(squirtleIncrease.innerHTML);

// GREAT BALL
const greatBallCost = document.querySelector('.great-ball-cost');
let parsedGreatBallCost = parseFloat(greatBallCost.innerHTML);
const greatBallLevel = document.querySelector('.great-ball-level');
let parsedGreatBallLevel = parseFloat(greatBallLevel.innerHTML);
const greatBallIncrease = document.querySelector('.great-ball-increase');
let parsedGreatBallIncrease = parseFloat(greatBallIncrease.innerHTML);

const upgrades = [
  {
    name: 'pikachu',
    cost: document.querySelector('.pikachu-cost'),
    parsedCost: parseFloat(document.querySelector('.pikachu-cost').innerHTML),
    increase: document.querySelector('.pikachu-increase'),
    parsedIncrease: parseFloat(document.querySelector('.pikachu-increase').innerHTML),
    level: document.querySelector('.pikachu-level'),
    pokyMultiplier: 2,
    costMultiplier: 4,
    isPerSecond: false,
  },
  {
    name: 'bulbasaur',
    cost: document.querySelector('.bulbasaur-cost'),
    parsedCost: parseFloat(document.querySelector('.bulbasaur-cost').innerHTML),
    increase: document.querySelector('.bulbasaur-increase'),
    parsedIncrease: parseFloat(document.querySelector('.bulbasaur-increase').innerHTML),
    level: document.querySelector('.bulbasaur-level'),
    pokyMultiplier: 2,
    costMultiplier: 4,
    isPerSecond: false,
  },
  {
    name: 'charmander',
    cost: document.querySelector('.charmander-cost'),
    parsedCost: parseFloat(document.querySelector('.charmander-cost').innerHTML),
    increase: document.querySelector('.charmander-increase'),
    parsedIncrease: parseFloat(document.querySelector('.charmander-increase').innerHTML),
    level: document.querySelector('.charmander-level'),
    pokyMultiplier: 2,
    costMultiplier: 4,
    isPerSecond: false,
  },
  {
    name: 'squirtle',
    cost: document.querySelector('.squirtle-cost'),
    parsedCost: parseFloat(document.querySelector('.squirtle-cost').innerHTML),
    increase: document.querySelector('.squirtle-increase'),
    parsedIncrease: parseFloat(document.querySelector('.squirtle-increase').innerHTML),
    level: document.querySelector('.squirtle-level'),
    pokyMultiplier: 2,
    costMultiplier: 4,
    isPerSecond: false,
  },
  {
    name: 'great-ball',
    cost: document.querySelector('.great-ball-cost'),
    parsedCost: parseFloat(document.querySelector('.great-ball-cost').innerHTML),
    increase: document.querySelector('.great-ball-increase'),
    parsedIncrease: parseFloat(document.querySelector('.great-ball-increase').innerHTML),
    level: document.querySelector('.great-ball-level'),
    pokyMultiplier: 2,
    costMultiplier: 4,
    isPerSecond: true,
  },
];

function buyUpgrade(upgrade) {
  const up = upgrades.find((object) => object.name === upgrade)
  if (up && parsedPokys >= up.parsedCost){
    parsedPokys -= up.parsedCost;
    pokys.innerHTML = parsedPokys;
    up.level.innerHTML++;
    up.parsedIncrease = parseFloat(up.parsedIncrease * up.pokyMultiplier);
    up.parsedCost *= up.costMultiplier;
    up.isPerSecond ? PPS += up.parsedIncrease : PCI += up.parsedIncrease;
    up.cost.innerHTML = up.parsedCost;
    up.increase.innerHTML = up.parsedIncrease;
    setPPS();
  }
};

// const buyPikachu = () => {
//   if(parsedPokys >= parsedPikachuCost){
//     parsedPokys -= parsedPikachuCost;
//     pokys.innerHTML = parsedPokys;

//     pikachuLevel.innerHTML++;
    
//     pikachuIncrease.innerHTML = parsedPikachuIncrease;
//     PCI += parsedPikachuIncrease;
//     parsedPikachuIncrease = parsedPikachuIncrease+1;

//     parsedPikachuCost += parsedPikachuCost;
//     pikachuCost.innerHTML = parsedPikachuCost;
//   }
// }

// const buyBulbasaur = () => {
//   if(parsedPokys >= parsedBulbasaurCost){
//     parsedPokys -= parsedBulbasaurCost;
//     pokys.innerHTML = parsedPokys;

//     bulbasaurLevel.innerHTML++;
    
//     parsedBulbasaurIncrease = parsedBulbasaurIncrease+2;
//     bulbasaurIncrease.innerHTML = parsedBulbasaurIncrease;
//     PCI += parsedBulbasaurIncrease;

//     parsedBulbasaurCost += parsedBulbasaurCost;
//     bulbasaurCost.innerHTML = parsedBulbasaurCost;
//   }
// }

// const buyCharmander = () => {
//   if(parsedPokys >= parsedCharmanderCost){
//     parsedPokys -= parsedCharmanderCost;
//     pokys.innerHTML = parsedPokys;

//     charmanderLevel.innerHTML++;
    
//     parsedCharmanderIncrease = parsedCharmanderIncrease+5;
//     charmanderIncrease.innerHTML = parsedCharmanderIncrease;
//     PCI += parsedCharmanderIncrease;

//     parsedCharmanderCost += parsedCharmanderCost;
//     charmanderCost.innerHTML = parsedCharmanderCost;
//   }
// }

// const buySquirtle = () => {
//   if(parsedPokys >= parsedSquirtleCost){
//     parsedPokys -= parsedSquirtleCost;
//     pokys.innerHTML = parsedPokys;

//     squirtleLevel.innerHTML++;
    
//     parsedSquirtleIncrease = parsedSquirtleIncrease+10;
//     squirtleIncrease.innerHTML = parsedSquirtleIncrease;
//     PCI += parsedSquirtleIncrease;

//     parsedSquirtleCost += parsedSquirtleCost;
//     squirtleCost.innerHTML = parsedSquirtleCost;
//   }
// }

// const buyGreatBall = () => {
//   if(parsedPokys >= parsedGreatBallCost){
//     parsedPokys -= parsedGreatBallCost;
//     pokys.innerHTML = parsedPokys;

//     greatBallLevel.innerHTML++;
    
//     PPS += parsedGreatBallIncrease;
//     parsedGreatBallIncrease = parsedGreatBallIncrease+10;
//     greatBallIncrease.innerHTML = parsedGreatBallIncrease;

//     parsedGreatBallCost += parsedGreatBallCost;
//     greatBallCost.innerHTML = parsedGreatBallCost;

//     parsedPPS += parsedGreatBallIncrease;
//     PPS.innerHTML = parsedPPS;
//     setPPS();
//   }
// }

const setPPS = () => {
  setInterval(() => {
    parsedPokys += PPS;
    pokys.innerHTML = parsedPokys;
    spanPPS.innerHTML = PPS;
  }, 1000)
}

const resetGame = () => {
  parsedPokys = 0;
  pokys.innerHTML = parsedPokys;
  PCI = 1;
  PPS = 0;
  spanPPS.innerHTML = 0;
  parsedPPS = 0;

  parsedPikachuLevel = 0;
  pikachuLevel.innerHTML = 0;
  parsedPikachuIncrease = 1;
  pikachuIncrease.innerHTML = 1;
  parsedPikachuCost = 10;
  pikachuCost.innerHTML = 10;

  parsedBulbasaurLevel = 0;
  bulbasaurLevel.innerHTML = 0;
  parsedBulbasaurIncrease = 2;
  bulbasaurIncrease.innerHTML = 2;
  parsedBulbasaurCost = 200;
  bulbasaurCost.innerHTML = 200;
  
  parsedCharmanderLevel = 0;
  charmanderLevel.innerHTML = 0;
  parsedCharmanderIncrease = 5;
  charmanderIncrease.innerHTML = 5;
  parsedCharmanderCost = 500;
  charmanderCost.innerHTML = 500;
  
  parsedSquirtleLevel = 0;
  squirtleLevel.innerHTML = 0;
  parsedSquirtleIncrease = 10;
  squirtleIncrease.innerHTML = 10;
  parsedSquirtleCost = 1000
  squirtleCost.innerHTML = 1000;
 
  parsedGreatBallLevel = 0;
  greatBallLevel.innerHTML = 0;
  parsedGreatBallIncrease = 10;
  greatBallIncrease.innerHTML = 10;
  parsedGreatBallCost = 10000;
  greatBallCost.innerHTML = 10000;
  
}