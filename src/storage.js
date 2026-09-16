import { state } from "./state";

const STORAGE_KEY = "scoreboard-state"

export function saveState(state) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
}

export function loadState(state) {
  const saved = localStorage.getItem(STORAGE_KEY)
  if (!saved) return
  Object.assign(state, JSON.parse(saved))
  state.gameClock.running = false
  state.shotClock.running = false
}
