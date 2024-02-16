/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let btnEl = document.getElementById("convert")
let lengthResultEl = document.getElementById("lengthResult")

btnEl.addEventListener("click", function () {
    let userInputEl = document.getElementById("userInput").value

    let feet = Math.floor(userInputEl * 3.281)
    let meter = Math.floor(userInputEl / 3.281)
    lengthResultEl.innerHTML = `
    ${userInputEl} meters = ${feet} feet | ${userInputEl} feet = ${meter} meters
    `

    let gallon = Math.floor(userInputEl * 0.264)
    let liter = Math.floor(userInputEl / 0.264)
    volumReusult.innerHTML = `
    ${userInputEl} liters = ${gallon} gallons | ${userInputEl} gallons = ${liter} liters
    `


    let pound = Math.floor(userInputEl * 2.204)
    let kilogram = Math.floor(userInputEl / 2.204)
    massResult.innerHTML = `
    ${userInputEl} kilos = ${pound} pounds | ${userInputEl} pounds = ${meter} kilos
    `




})
