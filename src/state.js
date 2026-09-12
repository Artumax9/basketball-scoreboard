export const state = {
  home: { score: 0, fouls: 0, timeouts: 0 },
  visitor: { score: 0, fouls: 0, timeouts: 0 },
  period: 1,
  possession: "home",
  gameClock: { remaining: 600, running: false },
  shotClock: { remaining: 24, running: false },
}
