const images = document.querySelectorAll(".gallery img");
const overlay = document.querySelector("#overlay");
const fullImage = document.querySelector("#fullImage");

// When image is clicked
images.forEach(img => {
  img.addEventListener("click", () => {
    overlay.style.display = "flex";
    fullImage.src = img.src;
  });
});

// Click anywhere to close
overlay.addEventListener("click", () => {
  overlay.style.display = "none";
});