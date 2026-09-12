export function padTwo(number) {
  return String(number).padStart(2, '0')
}

export function formatTime(totalSeconds) {

  const minutes = Math.floor(totalSeconds / 60)
  const seconds = totalSeconds % 60

  return `${padTwo(minutes)}:${padTwo(seconds)}`
}
