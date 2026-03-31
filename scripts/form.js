// PRODUCT ARRAY
const products = [
  { id: "p1", name: "Paragliding Wing" },
  { id: "p2", name: "Harness System" },
  { id: "p3", name: "Helmet Pro" },
  { id: "p4", name: "Flight Backpack" }
];

// POPULATE SELECT
const productSelect = document.getElementById("product");

if (productSelect) {
  products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.name;
    option.textContent = product.name;
    productSelect.appendChild(option);
  });
}

// REVIEW COUNTER
if (document.getElementById("counter")) {
  let count = localStorage.getItem("reviewCount") || 0;
  count++;
  localStorage.setItem("reviewCount", count);
  document.getElementById("counter").textContent = count;
}

const year = new Date().getFullYear();
document.getElementById("currentyear").textContent = year;

document.getElementById("lastModified").textContent =
"Last Modification: " + document.lastModified;