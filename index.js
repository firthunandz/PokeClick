import { upgrades } from './constants/upgrades.js'

// POKYS
const pokys = document.querySelector('.pokys');
let parsedPokys = parseFloat(pokys.innerHTML);

// POKY CLICK
export const increment = () => {
  pokys.innerHTML = parsedPokys += PCI;
  numberPCI();
}

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

// BUY UPGRADE
export const buyUpgrade = (upgrade) => {
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

// POKYS PER SECOND
let intervalId;
export const setPPS = () => {
  if (intervalId) {
    clearInterval(intervalId);
  }
  intervalId = setInterval(() => {
    parsedPokys += PPS;
    pokys.innerHTML = parsedPokys;
    spanPPS.innerHTML = PPS;
  }, 1000)
}

// SAVE
export const save = () => {
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

// LOAD
export const load = () => {
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

// RESET
const reset = document.querySelector('.reset');

export const resetGame = () => {
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
}


window.increment = increment
window.buyUpgrade = buyUpgrade
window.save = save
window.load = load
window.resetGame = resetGame