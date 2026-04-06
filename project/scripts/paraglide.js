
const year = document.getElementById("currentyear");
if (year) year.textContent = new Date().getFullYear();

const modified = document.getElementById("lastModified");
if (modified) {
  modified.textContent = `Last Modified: ${document.lastModified}`;
}


const flights = [
  { location: "Swiss Alps", price: 250, level: "Advanced" },
  { location: "Utah Valley", price: 150, level: "Beginner" },
  { location: "California Coast", price: 200, level: "Intermediate" }
];


function displayFlights() {
  const container = document.getElementById("flights");

  if (container) {
    flights.forEach(flight => {
      const card = document.createElement("div");

      card.innerHTML = `
        <h3>${flight.location}</h3>
        <p>Price: $${flight.price}</p>
        <p>Level: ${flight.level}</p>
      `;

      container.appendChild(card);
    });
  }
}


function handleForm() {
  const form = document.querySelector("form");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("name").value;

      if (name.length < 2) {
        alert("Please enter a valid name.");
        return;
      }

      localStorage.setItem("userName", name);

      alert(`Thanks for booking, ${name}!`);
    });
  }
}


const visits = Number(localStorage.getItem("visits")) || 0;
localStorage.setItem("visits", visits + 1);


if (visits > 0) {
  console.log(`Welcome back! Visit #${visits}`);
} else {
  console.log("Welcome first-time flyer!");
}


displayFlights();
handleForm();