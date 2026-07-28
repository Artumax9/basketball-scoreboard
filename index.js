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
