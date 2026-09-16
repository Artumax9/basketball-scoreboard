import { render } from './render.js'
import { saveState } from './storage.js'
import { state } from './state.js'

export function sync() {
  render()
  saveState(state)
}
