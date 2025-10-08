// Select slides, dots, and buttons
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let slideIndex = 0;

// Show the initial slide
showSlide(slideIndex);

// Function to display one slide at a time
function showSlide(index) {
  // Wrap around if index goes beyond bounds
  if (index >= slides.length) slideIndex = 0;
  if (index < 0) slideIndex = slides.length - 1;

  // Hide all slides and deactivate all dots
  slides.forEach(slide => (slide.style.display = "none"));
  dots.forEach(dot => dot.classList.remove("active"));

  // Show current slide and highlight its dot
  slides[slideIndex].style.display = "block";
  dots[slideIndex].classList.add("active");
}

// Next/Previous buttons
next.addEventListener("click", () => {
  slideIndex++;
  showSlide(slideIndex);
});

prev.addEventListener("click", () => {
  slideIndex--;
  showSlide(slideIndex);
});

// Automatic slideshow every 3 seconds
setInterval(() => {
  slideIndex++;
  showSlide(slideIndex);
}, 3000);
