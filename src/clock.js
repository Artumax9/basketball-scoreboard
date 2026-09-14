import { state } from './state.js'
import { render } from './render.js'

let timerId
let expectedEndTime
let shotClockTimerId
let expectedShotClockEndTime

function refreshClock() {
  const now = Date.now()
  const msRemaining = expectedEndTime - now

  const secondsRemaining = Math.max(0, Math.ceil(msRemaining / 1000))

  state.gameClock.remaining = secondsRemaining
  render()

  if (secondsRemaining <= 0) {
    clearInterval(timerId)
    state.gameClock.running = false
  }
}


export function toggleGameClock() {
  if (state.gameClock.running) {
    clearInterval(timerId)
    state.gameClock.running = false


  } else {
    expectedEndTime = Date.now() + (state.gameClock.remaining * 1000)
    timerId = setInterval(refreshClock, 200)
    state.gameClock.running = true
  }
}

export function resetGameClock(seconds = 600) {

  if (state.gameClock.running) {
    clearInterval(timerId)
    state.gameClock.running = false
  }
  state.gameClock.remaining = seconds
  render()

}

function refreshTimeShotClock() {
  const now = Date.now()
  const msRemaining = expectedShotClockEndTime - now
  const secondsRemaining = Math.max(0, Math.ceil(msRemaining / 1000))

  state.shotClock.remaining = secondsRemaining
  render()

  if (secondsRemaining <= 0) {
    clearInterval(shotClockTimerId)
    state.shotClock.running = false
  }

}

export function toggleShotClock() {

  if (state.shotClock.running) {
    clearInterval(shotClockTimerId)
    state.shotClock.running = false

  } else {
    expectedShotClockEndTime = Date.now() + (state.shotClock.remaining * 1000)
    shotClockTimerId = setInterval(refreshTimeShotClock, 200)
    state.shotClock.running = true
  }
}


export function resetShotClock() {

  if (state.shotClock.running) {
    clearInterval(shotClockTimerId)
    state.shotClock.running = false
  }

  state.shotClock.remaining = 24
  render()

}


