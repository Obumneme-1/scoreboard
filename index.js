let homeNum = document.getElementById("home-num")
let awayNum = document.getElementById("away-num")
let countA = 0
let countB = 0

function oneA() {
    countA += 1
    homeNum.innerText = countA
}

function twoA() {
    countA += 2
    homeNum.innerText = countA
}

function threeA() {
    countA += 3
    homeNum.innerText = countA
}

function oneB() {
    countB += 1
    awayNum.innerText = countB
}

function twoB() {
    countB += 2
    awayNum.innerText = countB
}

function threeB() {
    countB += 3
    awayNum.innerText = countB
}

