

let homePoints = document.getElementById("home-points")
let guestPoints = document.getElementById("guest-points")

let hPoints = 0
let gPoints = 0


function onePoint() {
    hPoints += 1
    homePoints.textContent = hPoints
}

function twoPoint() {
    hPoints += 2
    homePoints.textContent = hPoints

}

function threePoint() {
    hPoints += 3
    homePoints.textContent = hPoints

}

function onePoint1() {
    gPoints += 1
    guestPoints.textContent = gPoints
}

function twoPoint1() {
    gPoints += 2
    guestPoints.textContent = gPoints

}

function threePoint1() {
    gPoints += 3
    guestPoints.textContent = gPoints

}