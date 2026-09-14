
const REGULATION_PERIODS = 4
const REGULATION_LENGTH = 600  // 10:00
const OVERTIME_LENGTH = 300    // 5:00

export function padTwo(number) {
  return String(number).padStart(2, '0')
}

export function formatTime(totalSeconds) {

  const minutes = Math.floor(totalSeconds / 60)
  const seconds = totalSeconds % 60

  return `${padTwo(minutes)}:${padTwo(seconds)}`
}

export function isInBonus(fouls) {
  return fouls >= 5
}

export function periodClockLength(period) {
  return period > REGULATION_PERIODS ? OVERTIME_LENGTH : REGULATION_LENGTH
}
