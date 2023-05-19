const buttonPlay=document.querySelector ('.play')
const buttonStop=document.querySelector('.stop')
const buttonAddFiveMinutes=document.querySelector ('.addFive')
const buttonRemoveFiveMinutes=document.querySelector('.removeFive')
const minutesDisplay=document.querySelector('.minutes')
const secondsDisplay=document.querySelector('.seconds')
const forestSound=document.querySelector('#buttonForestSound')
const rainSound=document.querySelector('#buttonRainSound')
const fireSound=document.querySelector('#buttonFirePlace') 
const coffeeShopSound=document.querySelector('#buttonCoffeeShop')
let minutes = Number(minutesDisplay.textContent)
let timerTimeOut

export const elements = {
  coffeeShopSound,
  fireSound,
  rainSound,
  forestSound,
  buttonPlay,
  buttonStop,
  buttonAddFiveMinutes,
  buttonRemoveFiveMinutes,
  minutesDisplay,
  secondsDisplay,
  minutes,
  timerTimeOut
}