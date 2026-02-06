const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (top < windowHeight - 100) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// REGISTRATION COUNTDOWN
const deadline = new Date("2026-03-15T23:59:59").getTime();

const countdown = setInterval(() => {
  const now = new Date().getTime();
  const distance = deadline - now;

  if (distance < 0) {
    clearInterval(countdown);
    return;
  }

  document.getElementById("days").textContent =
    Math.floor(distance / (1000 * 60 * 60 * 24));

  document.getElementById("hours").textContent =
    Math.floor((distance / (1000 * 60 * 60)) % 24);

  document.getElementById("minutes").textContent =
    Math.floor((distance / (1000 * 60)) % 60);

  document.getElementById("seconds").textContent =
    Math.floor((distance / 1000) % 60);
}, 1000);

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});