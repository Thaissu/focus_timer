export default function Sounds (){
  const forestSound = new Audio ("src/forest.wav")
  const rainSound = new Audio("src/rain.wav")
  const coffeeShopSound = new Audio("src/coffeeshop.wav")
  const fireCracklingSound = new Audio("src/firecrackling.wav")
  const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")

  function pressButton(){
    buttonPressAudio.play()
  }

  function playForest(){
    forestSound.play()
    buttonPressAudio.play()
  }

  function stopForest() {
    forestSound.pause()
    buttonPressAudio.play()
}
  
  function playRain(){
    rainSound.play()
    buttonPressAudio.play()
  }

  function stopRain(){
  rainSound.pause()
  buttonPressAudio.play()
  }

  function playFireCrackling(){
    fireCracklingSound.play()
    buttonPressAudio.play()
  }

  function stopFireCrackling(){
    fireCracklingSound.pause()
    buttonPressAudio.play()
  }

  function playCoffeeShop(){
    coffeeShopSound.play()
    buttonPressAudio.play()
  }
function stopCoffeeShop(){
  coffeeShopSound.pause()
  buttonPressAudio.play()
}


return{
  playCoffeeShop,
  stopCoffeeShop,
  playFireCrackling,
  stopFireCrackling,
  playRain,
  stopRain,
  pressButton,
  playForest,
  stopForest
  
}
}