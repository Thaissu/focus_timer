export default function Controls({
  buttonPlay,
  buttonStop,
  forestSound,
  rainSound

 }){


function play(){
    buttonPlay.classList.remove('active')
    buttonStop.classList.add('active')

  }


function getMinutes(){
    let newMinutes = prompt('how long?')
  if(!newMinutes){
    timer.resetTimer()
    return false
  }
return newMinutes


  }


  return{
    play,
    getMinutes,
    
  

  }
}