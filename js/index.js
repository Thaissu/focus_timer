import Timer from "./timer.js"
import Controls from "./controls.js"
import {elements} from "./elements.js"
import Sounds from "./sounds.js"
const { 
  coffeeShopSound,
  fireSound,
  rainSound,
  forestSound,
  buttonPlay,
  buttonStop,
  buttonAddFiveMinutes,
  buttonRemoveFiveMinutes,
  secondsDisplay,
  minutesDisplay,
 } = elements

let minutes = Number(minutesDisplay.textContent)
let timerTimeOut

//depois de criar a factory precisa criar a funcao que vai receber as dependencias
//Injecao de dependencias
const sounds = Sounds(
  
)
const controls = Controls({
buttonPlay,
buttonStop,
forestSound,
rainSound,


})

const timer =  Timer({
  minutesDisplay,
  secondsDisplay,
  timerTimeOut,
  })

buttonPlay.addEventListener('click',function(){
controls.play()
//setTimeout executa uma funcao apos o periodo de tempo determinado, em milisegundos
//setTimeout = coloca a funcao e depois o tempo pra ser executada
timer.countdown()
sounds.pressButton()
})

buttonStop.addEventListener('click', function(){
stop()
timer.resetTimer()
sounds.pressButton()
})

buttonAddFiveMinutes.addEventListener('click', function(){
timer.addMinutes()
sounds.pressButton()
})

buttonRemoveFiveMinutes.addEventListener('click', function(){
timer.removeMinutes()
sounds.pressButton()
})

forestSound.addEventListener('click', function(){
  if (forestSound.classList.contains('active'))  {
    sounds.stopForest()
    
    forestSound.classList.remove('active')
    return
} 
forestSound.classList.add('active')
  sounds.playForest()

})

rainSound.addEventListener('click', function(){
  if(rainSound.classList.contains('active')){
    sounds.stopRain()
    rainSound.classList.remove('active')
    return
  }
  rainSound.classList.add('active')
  sounds.playRain()
  
})

fireSound.addEventListener('click', function(){
 if(fireSound.classList.contains('active')){
  sounds.stopFireCrackling()
  fireSound.classList.remove('active')
  return
 }
 fireSound.classList.add('active')
  sounds.playFireCrackling()
 
})

coffeeShopSound.addEventListener('click', function(){
  if(coffeeShopSound.classList.contains('active')){
    sounds.stopCoffeeShop()
    coffeeShopSound.classList.remove('active')
    return
  }
  coffeeShopSound.classList.add('active')
  sounds.playCoffeeShop()


})

minutesDisplay.addEventListener('click', function(){
  let newMinutes = controls.getMinutes()
  if(!newMinutes){
    timer.resetTimer()
    return
  }
minutes = newMinutes
timer.updateDisplay(minutes, 0)
})









