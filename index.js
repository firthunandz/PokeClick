
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

const upgrades = [
  {
    name: 'pikachu',
    cost: document.querySelector('.pikachu-cost'),
    parsedCost: parseInt(document.querySelector('.pikachu-cost').innerHTML),
    increase: document.querySelector('.pikachu-increase'),
    parsedIncrease: parseInt(document.querySelector('.pikachu-increase').innerHTML),
    level: document.querySelector('.pikachu-level'),
    baseIncrease: 1,
    baseCost: 10,
    pokyMultiplier: 2,
    costMultiplier: 3,
    isPerSecond: false,
  },
  {
    name: 'bulbasaur',
    cost: document.querySelector('.bulbasaur-cost'),
    parsedCost: parseInt(document.querySelector('.bulbasaur-cost').innerHTML),
    increase: document.querySelector('.bulbasaur-increase'),
    parsedIncrease: parseInt(document.querySelector('.bulbasaur-increase').innerHTML),
    level: document.querySelector('.bulbasaur-level'),
    baseIncrease: 2,
    baseCost: 200,
    pokyMultiplier: 2,
    costMultiplier: 3,
    isPerSecond: false,
  },
  {
    name: 'charmander',
    cost: document.querySelector('.charmander-cost'),
    parsedCost: parseInt(document.querySelector('.charmander-cost').innerHTML),
    increase: document.querySelector('.charmander-increase'),
    parsedIncrease: parseInt(document.querySelector('.charmander-increase').innerHTML),
    level: document.querySelector('.charmander-level'),
    baseIncrease: 5,
    baseCost: 500,
    pokyMultiplier: 2,
    costMultiplier: 3,
    isPerSecond: false,
  },
  {
    name: 'squirtle',
    cost: document.querySelector('.squirtle-cost'),
    parsedCost: parseInt(document.querySelector('.squirtle-cost').innerHTML),
    increase: document.querySelector('.squirtle-increase'),
    parsedIncrease: parseInt(document.querySelector('.squirtle-increase').innerHTML),
    level: document.querySelector('.squirtle-level'),
    baseIncrease: 10,
    baseCost: 1000,
    pokyMultiplier: 2,
    costMultiplier: 3,
    isPerSecond: false,
  },
  {
    name: 'great-ball',
    cost: document.querySelector('.great-ball-cost'),
    parsedCost: parseInt(document.querySelector('.great-ball-cost').innerHTML),
    increase: document.querySelector('.great-ball-increase'),
    parsedIncrease: parseInt(document.querySelector('.great-ball-increase').innerHTML),
    level: document.querySelector('.great-ball-level'),
    baseIncrease: 10,
    baseCost: 10000,
    pokyMultiplier: 2,
    costMultiplier: 3,
    isPerSecond: true,
  },
];


function buyUpgrade(upgrade) {
  const up = upgrades.find((object) => object.name === upgrade)
  if (up && parsedPokys >= up.parsedCost){
    parsedPokys -= up.parsedCost;
    pokys.innerHTML = parsedPokys;

    const currentLevel = parseInt(up.level.innerHTML) + 1;
    up.level.innerHTML = currentLevel;

    const increment = up.baseIncrease * Math.pow(up.pokyMultiplier, currentLevel - 1);
    currentLevel === 1 ?
      up.parsedIncrease = up.baseIncrease :
      up.parsedIncrease *= increment;

    up.parsedCost *= up.costMultiplier;

    up.isPerSecond ?
      PPS += increment:
      PCI += increment;
    
    up.cost.innerHTML = up.parsedCost;
    up.increase.innerHTML = increment;
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

// POKYS PER SECOND
let intervalId;

const setPPS = () => {
  if (intervalId) {
    clearInterval(intervalId);
  }
  intervalId = setInterval(() => {
    parsedPokys += PPS;
    pokys.innerHTML = parsedPokys;
    spanPPS.innerHTML = PPS;
  }, 1000)
}

const save = () => {
  localStorage.clear();
  upgrades.map((upgrade) => {
    const obj = JSON.stringify({
      parsedLevel: parseFloat(upgrade.level.innerHTML),
      parsedCost: upgrade.parsedCost,
      parsedIncrease: upgrade.parsedIncrease,
    })
    localStorage.setItem(upgrade.name, obj);
  })
  localStorage.setItem('pci', JSON.stringify(PCI));
  localStorage.setItem('pps', JSON.stringify(PPS));
  localStorage.setItem('pokys', JSON.stringify(parsedPokys));
}

const load = () => {
  upgrades.map((upgrade) => {
    const savedValues = JSON.parse(localStorage.getItem(upgrade.name))

    upgrade.parsedCost = savedValues.parsedCost
    upgrade.parsedIncrease = savedValues.parsedIncrease
    upgrade.level.innerHTML = savedValues.parsedLevel
    upgrade.cost.innerHTML =  
    upgrade.increase.innerHTML = upgrade.parsedIncrease
  })

  PCI = JSON.parse(localStorage.getItem('pci'))
  PPS = JSON.parse(localStorage.getItem('pps'))
  parsedPokys = JSON.parse(localStorage.getItem('pokys'))
  spanPPS.innerHTML = PPS
  pokys.innerHTML = parsedPokys;
  setPPS()
}


const resetGame = () => {
  parsedPokys = 0;
  pokys.innerHTML = parsedPokys;
  PCI = 1;
  PPS = 0;
  spanPPS.innerHTML = 0;
  parsedPPS = 0;

  upgrades.map((upgrade) => {
    upgrade.level.innerHTML = 0;

    upgrade.parsedIncrease = upgrade.baseIncrease
    upgrade.increase.innerHTML = upgrade.baseIncrease

    upgrade.parsedCost = upgrade.baseCost
    upgrade.cost.innerHTML = upgrade.baseCost
  })

  // parsedPikachuLevel = 0;
  // pikachuLevel.innerHTML = 0;
  // parsedPikachuIncrease = 1;
  // pikachuIncrease.innerHTML = 1;
  // parsedPikachuCost = 10;
  // pikachuCost.innerHTML = 10;

  // parsedBulbasaurLevel = 0;
  // bulbasaurLevel.innerHTML = 0;
  // parsedBulbasaurIncrease = 2;
  // bulbasaurIncrease.innerHTML = 2;
  // parsedBulbasaurCost = 200;
  // bulbasaurCost.innerHTML = 200;
  
  // parsedCharmanderLevel = 0;
  // charmanderLevel.innerHTML = 0;
  // parsedCharmanderIncrease = 5;
  // charmanderIncrease.innerHTML = 5;
  // parsedCharmanderCost = 500;
  // charmanderCost.innerHTML = 500;
  
  // parsedSquirtleLevel = 0;
  // squirtleLevel.innerHTML = 0;
  // parsedSquirtleIncrease = 10;
  // squirtleIncrease.innerHTML = 10;
  // parsedSquirtleCost = 1000
  // squirtleCost.innerHTML = 1000;
 
  // parsedGreatBallLevel = 0;
  // greatBallLevel.innerHTML = 0;
  // parsedGreatBallIncrease = 10;
  // greatBallIncrease.innerHTML = 10;
  // parsedGreatBallCost = 10000;
  // greatBallCost.innerHTML = 10000;
  
}