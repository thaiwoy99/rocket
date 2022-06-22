const countdownDisplay = document.getElementById("countdown-display")
const rocket = document.getElementById("rocket")
let timeRemaining = 60
let iD = 0
const btn =document.getElementById("btn-1")

function reduceNum(){
    
    if(timeRemaining >0){
        timeRemaining -=1 }
        else{
            timeRemaining =0
            countdownDisplay.style.visibility = 'hidden'
            btn.style.visibility="hidden"
            rocket.classList.add('rocket')
        }
        
        
    
    document.getElementById('countdown-display').innerHTML =timeRemaining

}


document.querySelector('button').addEventListener("click", function(){
   iD = setInterval(reduceNum,1000)


    }
)
        
    

// Task: 
// 1. Write the JavaScript to count down from 60 to 0 and display the remaining time
// 2. When the countdown reaches 0, launch the rocket with an animation


// Stretch goals: 
// 1) Add fire under the rocket. 
// 2) Randomly don’t launch the rocket when the timer reaches 0.


