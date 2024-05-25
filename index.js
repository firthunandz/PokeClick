const pokys = document.querySelector('.pokys');
let parsedPokys = parseFloat(pokys.innerHTML);
const pokyCost = document.querySelector('.upgrade-cost');
let parsedCost = parseFloat(pokyCost.innerHTML);
const upgradeLevel = document.querySelector('.upgrade-level');
let parsedUpgradeLevel = parseFloat(upgradeLevel.innerHTML);
const upgradeIncrease = document.querySelector('.upgrade-increase');
let parsedUpgradeIncrease = parseFloat(upgradeIncrease.innerHTML)

const reset = document.querySelector('.reset');

let pps = 1;

const increment = () => {
  parsedPokys += pps;
  pokys.innerHTML = Math.round(parsedPokys + pps);
}

const buyUpgrade = () => {
  if(parsedPokys >= parsedCost){
    parsedPokys -= parsedCost;
    pokys.innerHTML = parsedPokys;
    upgradeLevel.innerHTML++;
    parsedUpgradeIncrease = parsedUpgradeIncrease * 1.1;
    upgradeIncrease.innerHTML = parsedUpgradeIncrease;
    pps += parsedUpgradeIncrease;
  }
}

const resetGame = () => {
  parsedPokys = 0;
  pokys.innerHTML = parsedPokys;
}