import { state } from "./state.js"
import { padTwo, formatTime, isInBonus } from "./rules.js";

export function render() {
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
  homeBonus.classList.toggle("active", isInBonus(state.home.fouls))

  const visitorBonus = document.getElementById("visitor-bonus-indicator")
  visitorBonus.classList.toggle("active", isInBonus(state.visitor.fouls))

  // udpate fouls
  document.getElementById("home-fouls-number").textContent = state.home.fouls
  document.getElementById("visitor-fouls-number").textContent = state.visitor.fouls

  // update timeouts
  document.getElementById("home-tol-number").textContent = state.home.timeouts
  document.getElementById("visitor-tol-number").textContent = state.visitor.timeouts


  const gameClockString = formatTime(state.gameClock.remaining)
  const [minGameClock, secGameClock] = gameClockString.split(":")


  document.getElementById("min-timer").textContent = minGameClock
  document.getElementById("sec-timer").textContent = secGameClock
  document.getElementById("main-time-container").setAttribute("datetime", gameClockString)

  const shotClockString = formatTime(state.shotClock.remaining)
  const [minShotClock, secShotClock] = shotClockString.split(":")


  document.getElementById("min-shot-clock").textContent = minShotClock
  document.getElementById("sec-shot-clock").textContent = secShotClock
  document.getElementById("shot-clock-container").setAttribute("datetime", shotClockString)






}



