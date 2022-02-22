let feet = document.getElementById("one");
let gallons = document.getElementById("two");
let pounds = document.getElementById("three");
let input = document.getElementById("input").innerText;


feet.textContent = input + " meters = " + (3.281 * input).toFixed(3) + " feet | " + input + " feet = " + (input/3.281).toFixed(3)+ " meters";
gallons.textContent = input + " liters = " + (input/3.78541).toFixed(3) + " gallons | " + input + " gallons = " + (input*3.78541).toFixed(3) + " liters";
pounds.textContent = input + " kilos = " + (2.205 * input).toFixed(3) + " pounds | " + input + " pounds = " + (input/2.205).toFixed(3) + " kilos";






