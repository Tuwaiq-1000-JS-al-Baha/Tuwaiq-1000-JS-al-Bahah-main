let tempCelsius = 38
// (38°C × 9/5) + 32 = 100.4°F
let tempFahr = (tempCelsius * 9 / 5) + 32

console.log(tempCelsius + "°C is " + tempFahr + "°F")

let tempFahr2 = 100
// (32°F − 32) × 5/9 = 0°C
let tempCelsius2 = (tempFahr2 - 32) * 5 / 9

console.log(tempFahr2 + "°F is " + tempCelsius2.toFixed(1) + "°C")