let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
let btn1 = document.getElementsByClassName("btn-1")
let btn2 = document.getElementsByClassName("btn-2")
let btn3 = document.getElementsByClassName("btn-3")

let totalHomeScore = 0
let totalGuestScore = 0

function homeBtn1Click() {
    totalHomeScore++
    homeScore.textContent = totalHomeScore
}

function homeBtn2Click() {
    totalHomeScore +=2
    homeScore.textContent = totalHomeScore
}

function homeBtn3Click() {
    totalHomeScore +=3
    homeScore.textContent = totalHomeScore
}

function btn1Click() {
    totalGuestScore ++
    guestScore.textContent = totalGuestScore
}

function btn2Click() {
    totalGuestScore +=2
    guestScore.textContent = totalGuestScore
}

function btn3Click() {
    totalGuestScore +=3
    guestScore.textContent = totalGuestScore
}