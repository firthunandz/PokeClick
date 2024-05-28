// POKYS
const pokys = document.querySelector('.pokys');
let parsedPokys = parseFloat(pokys.innerHTML);

// RESET
const reset = document.querySelector('.reset');

// POKYS CLICK INCREASE
let PCI = 1;

// POKY CLICK
const increment = () => {
  pokys.innerHTML = parsedPokys += PCI;
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

const buyPikachu = () => {
  if(parsedPokys >= parsedPikachuCost){
    parsedPokys -= parsedPikachuCost;
    pokys.innerHTML = parsedPokys;

    pikachuLevel.innerHTML++;
    
    parsedPikachuIncrease = parsedPikachuIncrease+1;
    pikachuIncrease.innerHTML = parsedPikachuIncrease;
    PCI += parsedPikachuIncrease;

    parsedPikachuCost += parsedPikachuCost;
    pikachuCost.innerHTML = parsedPikachuCost;
  }
}

const buyBulbasaur = () => {
  if(parsedPokys >= parsedBulbasaurCost){
    parsedPokys -= parsedBulbasaurCost;
    pokys.innerHTML = parsedPokys;

    bulbasaurLevel.innerHTML++;
    
    parsedBulbasaurIncrease = parsedBulbasaurIncrease+2;
    bulbasaurIncrease.innerHTML = parsedBulbasaurIncrease;
    PCI += parsedBulbasaurIncrease;

    parsedBulbasaurCost += parsedBulbasaurCost;
    bulbasaurCost.innerHTML = parsedBulbasaurCost;
  }
}

const buyCharmander = () => {
  if(parsedPokys >= parsedCharmanderCost){
    parsedPokys -= parsedCharmanderCost;
    pokys.innerHTML = parsedPokys;

    charmanderLevel.innerHTML++;
    
    parsedCharmanderIncrease = parsedCharmanderIncrease+5;
    charmanderIncrease.innerHTML = parsedCharmanderIncrease;
    PCI += parsedCharmanderIncrease;

    parsedCharmanderCost += parsedCharmanderCost;
    charmanderCost.innerHTML = parsedCharmanderCost;
  }
}

const buySquirtle = () => {
  if(parsedPokys >= parsedSquirtleCost){
    parsedPokys -= parsedSquirtleCost;
    pokys.innerHTML = parsedPokys;

    squirtleLevel.innerHTML++;
    
    parsedSquirtleIncrease = parsedSquirtleIncrease+10;
    squirtleIncrease.innerHTML = parsedSquirtleIncrease;
    PCI += parsedSquirtleIncrease;

    parsedSquirtleCost += parsedSquirtleCost;
    squirtleCost.innerHTML = parsedSquirtleCost;
  }
}

const resetGame = () => {
  parsedPokys = 0;
  pokys.innerHTML = parsedPokys;
  PCI = 1;

  parsedPikachuLevel = 0;
  pikachuLevel.innerHTML = 0;
  parsedPikachuIncrease = 1;
  pikachuIncrease.innerHTML = 1;

  parsedBulbasaurLevel = 0;
  bulbasaurLevel.innerHTML = 0;
  parsedBulbasaurIncrease = 2;
  bulbasaurIncrease.innerHTML = 2;
  
  parsedCharmanderLevel = 0;
  charmanderLevel.innerHTML = 0;
  parsedCharmanderIncrease = 5;
  charmanderIncrease.innerHTML = 5;
  
  parsedSquirtleLevel = 0;
  squirtleLevel.innerHTML = 0;
  parsedSquirtleIncrease = 10;
  squirtleIncrease.innerHTML = 10;
  
}