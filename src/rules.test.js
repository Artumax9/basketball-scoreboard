import { describe, it, expect } from "vitest"
import { padTwo, formatTime, isInBonus, periodClockLength } from "./rules.js"

describe("padTwo", () => {
  it("pads a single digit with a leading zero", () => {
    expect(padTwo(5)).toBe("05")
  })

  it("leaves two-digit numbers unchanged", () => {
    expect(padTwo(42)).toBe("42")
  })
})

describe("formatTime", () => {
  it("formats a round number of minutes", () => {
    expect(formatTime(600)).toBe("10:00")
  })

  it("formats zero", () => {
    expect(formatTime(0)).toBe("00:00")
  })

  // Regression test for the original shot clock bug (Stage 1.1): a DOM element
  // was compared against a number, so NaN comparisons silently evaluated to
  // false and the leading zero never rendered for single-digit seconds.
  it("pads single-digit seconds with a leading zero (regression: original shot clock bug)", () => {
    expect(formatTime(9)).toBe("00:09")
  })
})


describe("isInBonus", () => {
  it("returns false when fouls are below the bonus threshold", () => {
    expect(isInBonus(4)).toBe(false)
  })

  it("return true when fouls are above the bonus threshold.", () => {
    expect(isInBonus(5)).toBe(true)
  })

})


describe("periodClockLength()", () => {
  it("Returns the extra time when the period is greater than 4", () => {
    expect(periodClockLength(5)).toBe(300)
  })

  it("Returns the regulation time when the period is less than or equal to 4", () => {
    expect(periodClockLength(3)).lessThanOrEqual(600)
  })

})


