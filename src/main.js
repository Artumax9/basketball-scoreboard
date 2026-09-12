import { state } from './state.js'
import { render } from "./render.js"
import { toggleGameClock, resetGameClock, toggleShotClock, resetShotClock } from './clock.js'



// 2. Actions functions (modify the state and call render)

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

// 3. CONNECT THE BUTTONS (event listeners)
const controlPanel = document.getElementById("control-panel")
// Event delegation for fouls, points, bonuses, and possession

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

  } else if (action === "toggleGameClock") {
    toggleGameClock()
  } else if (action === "resetGameClock") {
    resetGameClock()

  } else if (action === "toggleShotClock") {
    toggleShotClock()

  } else if (action === "resetShotClock") {
    resetShotClock()

  }
})

render()

window.appState = state
window.appRender = render
