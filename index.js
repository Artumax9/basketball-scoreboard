let homeScore = 0

let homeScoreEl = document.getElementById("home-score")
console.log(homeScore)
console.log(homeScoreEl)

let visitorScore = 0

let visitorScoreEl = document.getElementById("visitor-score")
console.log(visitorScoreEl)

function addPoints(points, teams) {

  if (teams == "home") {
    homeScore += points
    homeScoreEl.textContent = homeScore
  } if (teams == "visitor") {
    visitorScore += points
    visitorScoreEl.textContent = visitorScore
  } else {
    console.log("error")
  }
}

let homeAddOneBtn = document.getElementById("home-add-one-btn")
let homeAddTwoBtn = document.getElementById("home-add-two-btn")
let homeAddThreeBtn = document.getElementById("home-add-three-btn")
let homeSubOneBtn = document.getElementById("home-sub-one-btn")

let visitorAddOneBtn = document.getElementById("visitor-add-one-btn")
let visitorAddTwoBtn = document.getElementById("visitor-add-two-btn")
let visitorAddThreeBtn = document.getElementById("visitor-add-three-btn")
let visitorSubOneBtn = document.getElementById("visitor-sub-one-btn")


homeAddOneBtn.addEventListener("click", function () {
  addPoints(1, "home")
})

homeAddTwoBtn.addEventListener("click", function () {
  addPoints(2, "home")
})

homeAddThreeBtn.addEventListener("click", function () {
  addPoints(3, "home")
})

homeSubOneBtn.addEventListener("click", function () {
  addPoints(-1, "home")
})


visitorAddOneBtn.addEventListener("click", function () {
  addPoints(1, "visitor")
})

visitorAddTwoBtn.addEventListener("click", function () {
  addPoints(2, "visitor")
})

visitorAddThreeBtn.addEventListener("click", function () {
  addPoints(3, "visitor")
})

visitorSubOneBtn.addEventListener("click", function () {
  addPoints(-1, "visitor")
})

let homeFoul = 0
let visitorFoul = 0

let homeFoulEl = document.getElementById("home-fouls-number")
let visitorFoulEl = document.getElementById("visitor-fouls-number")

let homeFoulBtn = document.getElementById("home-add-foul-btn")
let visitorFoulBtn = document.getElementById("visitor-add-foul-btn")

let resetHomeFoulBtn = document.getElementById("home-reset-foul-btn")
let resetVisitorFoulBtn = document.getElementById("visitor-reset-foul-btn")

function addFoul(teams) {

  if (teams == "home") {
    homeFoul += 1
    homeFoulEl.textContent = homeFoul
  } else if (teams == "visitor") {
    visitorFoul += 1
    visitorFoulEl.textContent = visitorFoul
  } else {
    console.log("error")
  }
}

function resetFoul(teams) {

  if (teams == "home") {
    homeFoul = 0
    homeFoulEl.textContent = homeFoul
  } else if (teams == "visitor") {
    visitorFoul = 0
    visitorFoulEl.textContent = visitorFoul
  } else {
    console.log("error")
  }
}


homeFoulBtn.addEventListener("click", function () {
  addFoul("home")
})

visitorFoulBtn.addEventListener("click", function () {
  addFoul("visitor")
})


resetHomeFoulBtn.addEventListener("click", function () {
  resetFoul("home")
})

resetVisitorFoulBtn.addEventListener("click", function () {
  resetFoul("visitor")
})

let homeBonusIndicator = document.getElementById("home-bonus-indicator");
let homeBonusBtn = document.getElementById("home-bonus-toggle-btn");

let visitorBonusIndicator = document.getElementById("visitor-bonus-indicator");
let visitorBonusBtn = document.getElementById("visitor-bonus-toggle-btn");

visitorBonusBtn.addEventListener("click", function () {
  visitorBonusIndicator.classList.toggle("active")
})

homeBonusBtn.addEventListener("click", function () {
  homeBonusIndicator.classList.toggle("active")
})

// 1. Capturamos el botón y las dos flechas
let switchPossBtn = document.getElementById("switch-poss-btn");
let homePossArrow = document.getElementById("home-poss-arrow");
let visitorPossArrow = document.getElementById("visitor-poss-arrow");

// 2. Le decimos al botón que escuche el clic
switchPossBtn.addEventListener("click", function () {
  // 3. Alternamos ambas flechas al mismo tiempo
  homePossArrow.classList.toggle("active");
  visitorPossArrow.classList.toggle("active");
});

