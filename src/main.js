import { state } from './state.js'
import { render } from "./render.js"
import { toggleGameClock, resetGameClock, toggleShotClock, resetShotClock } from './clock.js'
import { periodClockLength } from "./rules.js";


// 2. Actions functions (modify the state and call render)
function addPoints(team, points) {
  state[team].score = Math.max(0, state[team].score + points)
  render()
}

function updateFouls(team, amount) {
  state[team].fouls = Math.max(0, state[team].fouls + amount)
  render()
}

function resetFouls(team) {
  state[team].fouls = 0
  render()
}

function switchPossession() {
  state.possession = state.possession === "home" ? "visitor" : "home"
  render()
}

function nextPeriod() {
  state.period += 1
  state.home.fouls = 0
  state.visitor.fouls = 0

  resetGameClock(periodClockLength(state.period))
  resetShotClock()
}

const MAX_TIMEOUTS = 5

function useTimeout(team) {
  if (state[team].timeouts >= MAX_TIMEOUTS) return
  state[team].timeouts += 1
  render()

}



// create the handler object that associates the button text with its function
const actions = {
  score: (btn) => addPoints(btn.dataset.team, Number(btn.dataset.points)),
  updateFouls: (btn) => updateFouls(btn.dataset.team, Number(btn.dataset.amount)),
  resetFouls: (btn) => resetFouls(btn.dataset.team),
  switchPossession: () => switchPossession(),
  toggleGameClock: () => toggleGameClock(),
  toggleShotClock: () => toggleShotClock(),
  resetShotClock: () => resetShotClock(),
  resetGameClock: () => resetGameClock(periodClockLength(state.period)),
  nextPeriod: () => nextPeriod(),
  useTimeout: (btn) => useTimeout(btn.dataset.team)
}

// 3. CONNECT THE BUTTONS (event listeners)
const controlPanel = document.getElementById("control-panel")
// Event delegation for fouls, points, and possession

controlPanel.addEventListener("click", function (event) {

  const btn = event.target.closest("button")
  if (!btn) return

  const handler = actions[btn.dataset.action] // i.e. "score" or "addFouls"

  if (handler) handler(btn)

})

render()

