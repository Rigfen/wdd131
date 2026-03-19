const images = document.querySelectorAll(".gallery img");
const overlay = document.querySelector("#overlay");
const fullImage = document.querySelector("#fullImage");

images.forEach(img => {
  img.addEventListener("click", () => {
    overlay.style.display = "flex";
    fullImage.src = img.src;
  });
});

overlay.addEventListener("click", () => {
  overlay.style.display = "none";
});