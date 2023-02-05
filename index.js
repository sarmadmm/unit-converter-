//constants for the conversion
const meterToFeet = 3.281 
const literToGallon = 0.264 
const kilogramToPound = 2.204 

const unitInput = document.getElementById("unit-input")
const convertBtn = document.getElementById("convert-btn")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")

convertBtn.addEventListener("click", function() {
    const baseValue = unitInput.value
    //lenght
    lengthEl.innerHTML = `${baseValue} meters = ${(baseValue*meterToFeet).toFixed(3)} feet | ${baseValue} feet = ${(baseValue/meterToFeet).toFixed(3)} meters`
    //volume
    volumeEl.innerHTML = `${baseValue} lites = ${(baseValue*literToGallon).toFixed(3)} gallons | ${baseValue} gallons = ${(baseValue/literToGallon).toFixed(3)} liters`
    //mass
    massEl.innerHTML = `${baseValue} kilos = ${(baseValue*kilogramToPound).toFixed(3)} pounds | ${baseValue} pounds = ${(baseValue/kilogramToPound).toFixed(3)} kilos`
})