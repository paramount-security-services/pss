// Typing effect on hero tagline
const text = "Protecting What Matters Most";
const typedTextElem = document.getElementById("typed-text");
let index = 0;

function type() {
  if (index < text.length) {
    typedTextElem.textContent += text.charAt(index);
    index++;
    setTimeout(type, 120);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  type();
});

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

// Back to top button functionality
const backToTopBtn = document.getElementById("backToTop");

window.onscroll = function () {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
 
