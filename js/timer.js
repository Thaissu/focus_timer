
export default function Timer({
minutesDisplay,
secondsDisplay,
}
){
let timerTimeOut
let minutes= Number(minutesDisplay.textContent)
 
function updateDisplay(minutes, seconds){
  minutesDisplay.textContent = String(minutes).padStart(2,'0')
  secondsDisplay.textContent = String(seconds).padStart(2,'0')
}

function countdown(){
  timerTimeOut= setTimeout(function(){
    let seconds=Number(secondsDisplay.textContent)
    let minutes=Number(minutesDisplay.textContent)
    
    updateDisplay(minutes,0)
    
    if (minutes <= 0 && seconds<=0){
    resetTimer()
    return
    }
        
    if(seconds <= 0 ){
      seconds=60
      --minutes
    //updateTimerDisplay(String(minutes-1),seconds)
    
    }

    updateDisplay(minutes, String (seconds-1))
    
    
    countdown()

    

  },1000)
  
}

function addMinutes(){
  let minutes = Number(minutesDisplay.textContent)
  let seconds = Number(secondsDisplay.textContent)
  
  updateDisplay(minutes + 5, seconds)
}

function removeMinutes(){ 
    let minutes = Number(minutesDisplay.textContent)
    let seconds = Number(secondsDisplay.textContent)
    if (minutes<= 5){
      return
    }
    updateDisplay(minutes - 5, seconds)
    
  }

function resetTimer(){
updateDisplay(minutes,0)
clearTimeout(timerTimeOut)
}

//shorthand property = atalho para criar objeto na factory

//factory eh uma funcao que retorna um objeto
return{
  countdown,
  resetTimer,
  updateDisplay,
  addMinutes,
  removeMinutes
}
}
