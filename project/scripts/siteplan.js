function showMessage() {
  const facts = [
    "Paragliding can keep you in the air for hours using thermal currents.",
    "The longest paragliding flight exceeded 500 km!",
    "Paragliders launch by running off hills or mountains."
  ];

  const randomFact = facts[Math.floor(Math.random() * facts.length)];
  document.getElementById("fact").textContent = randomFact;
}

function showMessage() {
  document.getElementById("fact").textContent =
    "Paragliding uses rising air currents to stay in flight!";
}