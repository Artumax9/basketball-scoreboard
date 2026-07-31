let homeScore = 0

let homeScoreEl = document.getElementById("home-score")
console.log(homeScore)
console.log(homeScoreEl)

let visitorScore = 0

let visitorScoreEl = document.getElementById("visitor-score")
console.log(visitorScoreEl)

function addPoints(points, teams) {

  if (teams == "home") {
    homeScore += points
    homeScoreEl.textContent = homeScore
  } if (teams == "visitor") {
    visitorScore += points
    visitorScoreEl.textContent = visitorScore
  } else {
    console.log("error")
  }
}

let homeAddOneBtn = document.getElementById("home-add-one-btn")
let homeAddTwoBtn = document.getElementById("home-add-two-btn")
let homeAddThreeBtn = document.getElementById("home-add-three-btn")
let homeSubOneBtn = document.getElementById("home-sub-one-btn")

let visitorAddOneBtn = document.getElementById("visitor-add-one-btn")
let visitorAddTwoBtn = document.getElementById("visitor-add-two-btn")
let visitorAddThreeBtn = document.getElementById("visitor-add-three-btn")
let visitorSubOneBtn = document.getElementById("visitor-sub-one-btn")


homeAddOneBtn.addEventListener("click", function () {
  addPoints(1, "home")
})

homeAddTwoBtn.addEventListener("click", function () {
  addPoints(2, "home")
})

homeAddThreeBtn.addEventListener("click", function () {
  addPoints(3, "home")
})

homeSubOneBtn.addEventListener("click", function () {
  addPoints(-1, "home")
})


visitorAddOneBtn.addEventListener("click", function () {
  addPoints(1, "visitor")
})

visitorAddTwoBtn.addEventListener("click", function () {
  addPoints(2, "visitor")
})

visitorAddThreeBtn.addEventListener("click", function () {
  addPoints(3, "visitor")
})

visitorSubOneBtn.addEventListener("click", function () {
  addPoints(-1, "visitor")
})

let homeFoul = 0
let visitorFoul = 0

let homeFoulEl = document.getElementById("home-fouls-number")
let visitorFoulEl = document.getElementById("visitor-fouls-number")

let homeFoulBtn = document.getElementById("home-add-foul-btn")
let visitorFoulBtn = document.getElementById("visitor-add-foul-btn")

let resetHomeFoulBtn = document.getElementById("home-reset-foul-btn")
let resetVisitorFoulBtn = document.getElementById("visitor-reset-foul-btn")

function addFoul(teams) {

  if (teams == "home") {
    homeFoul += 1
    homeFoulEl.textContent = homeFoul
  } else if (teams == "visitor") {
    visitorFoul += 1
    visitorFoulEl.textContent = visitorFoul
  } else {
    console.log("error")
  }
}

function resetFoul(teams) {

  if (teams == "home") {
    homeFoul = 0
    homeFoulEl.textContent = homeFoul
  } else if (teams == "visitor") {
    visitorFoul = 0
    visitorFoulEl.textContent = visitorFoul
  } else {
    console.log("error")
  }
}


homeFoulBtn.addEventListener("click", function () {
  addFoul("home")
})

visitorFoulBtn.addEventListener("click", function () {
  addFoul("visitor")
})


resetHomeFoulBtn.addEventListener("click", function () {
  resetFoul("home")
})

resetVisitorFoulBtn.addEventListener("click", function () {
  resetFoul("visitor")
})

let homeBonusIndicator = document.getElementById("home-bonus-indicator")
let homeBonusBtn = document.getElementById("home-bonus-toggle-btn")

let visitorBonusIndicator = document.getElementById("visitor-bonus-indicator")
let visitorBonusBtn = document.getElementById("visitor-bonus-toggle-btn")

visitorBonusBtn.addEventListener("click", function () {
  visitorBonusIndicator.classList.toggle("active")
})

homeBonusBtn.addEventListener("click", function () {
  homeBonusIndicator.classList.toggle("active")
})

// 1. Capturamos el botón y las dos flechas
let switchPossBtn = document.getElementById("switch-poss-btn")
let homePossArrow = document.getElementById("home-poss-arrow")
let visitorPossArrow = document.getElementById("visitor-poss-arrow")

// 2. Le decimos al botón que escuche el clic
switchPossBtn.addEventListener("click", function () {
  // 3. Alternamos ambas flechas al mismo tiempo
  homePossArrow.classList.toggle("active")
  visitorPossArrow.classList.toggle("active")
})

let timeRemaining = 600
let minutes = document.getElementById("min-timer")
let seconds = document.getElementById("sec-timer")

function refreshClock() {
  timeRemaining -= 1
  let minuteTime = Math.floor(timeRemaining / 60)
  let secTime = timeRemaining % 60

  minutes.textContent = minuteTime
  if (secTime < 10) {
    seconds.textContent = "0" + secTime
  }
  else {
    seconds.textContent = secTime
  }
  if (timeRemaining == 0) {
    clearInterval(timerId)
  }

}

let startPauseBtn = document.getElementById("start-pause-time-btn")

let isRunning = false
let timerId
let initialminutes = "10"
let initialseconds = "00"


startPauseBtn.addEventListener("click", function () {

  if (isRunning == true) {
    clearInterval(timerId)
    isRunning = false


  } else {
    timerId = setInterval(refreshClock, 1000)
    isRunning = true
  }
})

let resetBtn = document.getElementById("reset-time-btn")

function resetClock() {

  if (isRunning == true) {
    clearInterval(timerId)
    isRunning = false
  }

  timeRemaining = 600
  minutes.textContent = initialminutes
  seconds.textContent = initialseconds

}

resetBtn.addEventListener("click", function () {
  resetClock()
})


// reloj 24 segundos de tiro
let timeRemainingShotClock = 24
let minutesShotClock = document.getElementById("min-shot-clock")
let secondsShotClock = document.getElementById("sec-shot-clock")
let timerIdShotClock

function refreshTimeShotClock() {
  timeRemainingShotClock -= 1

  secondsShotClock.textContent = timeRemainingShotClock

  if (secondsShotClock < 10) {
    secondsShotClock.textContent = "0" + timeRemainingShotClock
  }

  if (timeRemainingShotClock == 0) {
    clearInterval(timerIdShotClock)
  }

}

let startPauseBtnShotClock = document.getElementById("start-pause-shot-clock-btn")

let isRunningShotClock = false
let initialminutesShotClock = "00"
let initialsecondsShotClock = "24"

startPauseBtnShotClock.addEventListener("click", function () {

  if (isRunningShotClock == true) {
    clearInterval(timerIdShotClock)
    isRunningShotClock = false

  } else {
    timerIdShotClock = setInterval(refreshTimeShotClock, 1000)
    isRunningShotClock = true
  }
})

let resetBtnShotClock = document.getElementById("reset-shot-clock-btn")

function resetClockShotCLock() {

  if (isRunningShotClock == true) {
    clearInterval(timerIdShotClock)
    isRunningShotClock = false
  }

  timeRemainingShotClock = 24
  minutesShotClock.textContent = initialminutesShotClock
  secondsShotClock.textContent = initialsecondsShotClock
}

resetBtnShotClock.addEventListener("click", function () {
  resetClockShotCLock()
})

