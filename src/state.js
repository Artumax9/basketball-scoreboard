export const state = {
  home: { score: 0, fouls: 0, timeouts: 0, bonus: false },
  visitor: { score: 0, fouls: 0, timeouts: 0, bonus: false },
  period: 1,
  possession: "home",
  gameClock: { remaining: 600, running: false },
  shotClock: { remaining: 24, running: false },
}
