const state = {
  home: { score: 0, fouls: 0, timeouts: 0, bonus: false },
  visitor: { score: 0, fouls: 0, timeouts: 0, bonus: false },
  period: 1,
  possession: "home",
  gameClock: { remaining: 600, running: false },
  shotClock: { remaining: 24, running: false },
}

function render() {
  //update score
  document.getElementById("home-score").textContent = padTwo(state.home.score)
  document.getElementById("visitor-score").textContent = padTwo(state.visitor.score)

  //update period
  document.getElementById("period-number").textContent = state.period

  //update possession arrows (using conditional toggle)
  const homeArrow = document.getElementById("home-poss-arrow")
  const visitorArrow = document.getElementById("visitor-poss-arrow")

  homeArrow.classList.toggle("active", state.possession === "home")
  visitorArrow.classList.toggle("active", state.possession === "visitor")

  //update bonus
  const homeBonus = document.getElementById("home-bonus-indicator")
  homeBonus.classList.toggle("active", state.home.bonus)

  const visitorBonus = document.getElementById("visitor-bonus-indicator")
  visitorBonus.classList.toggle("active", state.visitor.bonus)

  // udpate fouls
  document.getElementById("home-fouls-number").textContent = state.home.fouls
  document.getElementById("visitor-fouls-number").textContent = state.visitor.fouls

  // update dead times
  document.getElementById("home-tol-number").textContent = state.home.timeouts
  document.getElementById("visitor-tol-number").textContent = state.visitor.timeouts

}

function padTwo(number) {
  return String(number).padStart(2, '0')
}

function formatTime(totalSeconds) {

  const minutes = Math.floor(totalSeconds / 60)
  const seconds = totalSeconds % 60

  return `${padTwo(minutes)}:${padTwo(seconds)}`
}

function addPoints(team, points) {
  state[team].score += points
  render()
}

function addFouls(team) {
  state[team].fouls += 1
  render()
}

function resetFouls(team) {
  state[team].fouls = 0
  render()
}

function toggleBonus(team) {
  state[team].bonus = !state[team].bonus
  render()

}

function switchPossession() {
  state.possession = state.possession === "home" ? "visitor" : "home"
  render()
}

let mainTimeContainer = document.getElementById("main-time-container")
let timeRemaining = 600
let minutesEl = document.getElementById("min-timer")
let secondsEl = document.getElementById("sec-timer")

function refreshClock() {
  timeRemaining -= 1

  let timeString = formatTime(timeRemaining)

  let [minString, secString] = timeString.split(":")

  minutesEl.textContent = minString
  secondsEl.textContent = secString
  mainTimeContainer.setAttribute("datetime", timeString)

  minutesEl.textContent = minString
  secondsEl.textContent = secString
  mainTimeContainer.setAttribute("datetime", timeString)

  if (timeRemaining <= 0) {
    clearInterval(timerId)
    isRunning = false
  }
}


const controlPanel = document.getElementById("control-panel")

controlPanel.addEventListener("click", function (event) {

  const btn = event.target.closest("button")
  if (!btn) return

  const action = btn.dataset.action
  const team = btn.dataset.team

  if (action === "score") {
    const points = Number(btn.dataset.points)
    addPoints(team, points)

  }
  else if (action === "addFouls") {
    addFouls(team)
  }
  else if (action === "resetFouls") {
    resetFouls(team)

  }
  else if (action === "toggleBonus") {
    toggleBonus(team)

  } else if (action === "switchPossession") {
    switchPossession()

  }

})



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
  minutesEl.textContent = initialminutes
  secondsEl.textContent = initialseconds

}

resetBtn.addEventListener("click", function () {
  resetClock()
})


// reloj 24 segundos de tiro
let ShotClockContainer = document.getElementById("shot-clock-container")
let timeRemainingShotClock = 24
let minutesShotClock = document.getElementById("min-shot-clock")
let secondsShotClock = document.getElementById("sec-shot-clock")
let timerIdShotClock

function refreshTimeShotClock() {
  timeRemainingShotClock -= 1

  let timeShotString = formatTime(timeRemainingShotClock)

  let [minShotString, secShotString] = timeShotString.split(":")


  secondsShotClock.textContent = secShotString
  ShotClockContainer.setAttribute("datetime", timeShotString)

  if (timeRemainingShotClock <= 0) {
    clearInterval(timerIdShotClock)
    isRunningShotClock = false
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

  if (minutesShotClock) minutesShotClock.textContent = initialminutesShotClock
  secondsShotClock.textContent = initialsecondsShotClock
  ShotClockContainer.setAttribute("datetime", initialminutesShotClock + ":" + initialsecondsShotClock)
}


resetBtnShotClock.addEventListener("click", function () {
  resetClockShotCLock()
})


render()
