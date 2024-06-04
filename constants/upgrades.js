import { defaultValues } from "./defaultValues.js";

const createUpgrade = () => {
  const upgradesContainer = document.getElementById('upgrades-container')
  const template = document.getElementById('upgrade-template').textContent

  defaultValues.forEach((obj) => {
    let html = template;
    Object.keys(obj).forEach((key) => {
      const regEx = new RegExp(`{{${key}}}`, 'g')
      html = html.replace(regEx, obj[key])
    })
    upgradesContainer.innerHTML += html
  })
}
createUpgrade()

export const upgrades = [
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
