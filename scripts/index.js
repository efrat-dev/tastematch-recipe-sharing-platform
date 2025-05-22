let slideIndex = 0;

function showSlides() {
  const slides = document.getElementsByClassName("mySlides");

    // Hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }

  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1; // Loop back to first slide
  }

  slides[slideIndex - 1].classList.add("active"); // Show current slide
  setTimeout(showSlides, 3000); // Auto-advance every 3 seconds
}

function toggleRecipe() {
  const dots = document.getElementById("dots");
  const moreText = document.getElementById("more");
  const btnText = document.getElementById("myBtn");

  const isExpanded = moreText.classList.contains("show");

  if (isExpanded) {
        // Collapse recipe
    dots.classList.remove("hide");
    moreText.classList.remove("show");
    btnText.innerHTML = "הצג את המתכון";
  } else {
        // Expand recipe
    dots.classList.add("hide");
    moreText.classList.add("show");
    btnText.innerHTML = "הסתר את המתכון";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  showSlides(); // Start the slideshow on page load

  const recipeButton = document.getElementById("myBtn");
  if (recipeButton) {
    recipeButton.addEventListener("click", toggleRecipe);
  }
});
