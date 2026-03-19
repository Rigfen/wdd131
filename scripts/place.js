
const temp = 8;       // °C
const speed = 10;     // km/h


function calculateWindChill(t, s) {
  return 13.12 + (0.6215 * t) - (11.37 * Math.pow(s, 0.16)) + (0.3965 * t * Math.pow(s, 0.16));
}


const windChill = document.querySelector("#windchill");


if (temp <= 10 && speed > 4.8) {
  windChill.textContent = calculateWindChill(temp, speed).toFixed(1) + " °C";
} else {
  windChill.textContent = "N/A";
}

document.querySelector("#year").textContent = new Date().getFullYear();

document.querySelector("#lastModified").textContent =
  "Last Modified: " + document.lastModified;