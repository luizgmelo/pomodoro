const timer = document.querySelector("#time")
const counter = document.querySelector("#counter")
const startButton = document.querySelector("#startButton");
const pauseButton = document.querySelector("#pauseButton");
const stopButton = document.querySelector("#stopButton");
const title = document.querySelector("#title")
const body = document.querySelector("body")
let seconds = 0
let minutes = 0
let myInterval = null
let flag = false
let count = 0

function twoDigits(digit) {
    if (digit < 10) {
        digit = "0" + digit;
    }
    
    return digit
}

function startPomodoro(){
    startButton.disabled = true

    if (minutes == 0) {

        if (title.textContent == "Pomodoro") {
            body.style.backgroundColor = "#48A9DF"
            title.textContent = "Break"
            seconds = 0
            minutes = 5
            count++
            counter.textContent = "Counter: " + count
        } else if (title.textContent == "Break"){
            body.style.backgroundColor = "#df4848"
            title.textContent = "Pomodoro"
        }

        timer.textContent = `${twoDigits(minutes)}:${twoDigits(seconds)}`
        return stopPomodoro()
    }

    if (seconds == 0) {
        seconds = 60
        minutes--
    }

    seconds--

    timer.textContent = `${twoDigits(minutes)}:${twoDigits(seconds)}`
        
    myInterval = setTimeout(startPomodoro, 1000)
    
}

function pausePomodoro() {
    startButton.disabled = false
    clearTimeout(myInterval)
}

function stopPomodoro() {
    startButton.disabled = false
    if (title.textContent == "Pomodoro") {
        seconds = 0
        minutes = 25
    } else if (title.textContent == "Break") {
        seconds = 0
        minutes = 5
    }

    clearTimeout(myInterval)
    timer.textContent = `${twoDigits(minutes)}:${twoDigits(seconds)}`
}

startButton.addEventListener("click", startPomodoro)
pauseButton.addEventListener("click", pausePomodoro)
stopButton.addEventListener("click", stopPomodoro)