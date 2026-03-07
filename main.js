// Scroll Reveal
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const windowHeight = window.innerHeight;
  
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < windowHeight - 100) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// Countdown
const deadline = new Date("2026-03-15T23:59:59").getTime();

const countdown = setInterval(() => {
  const now = new Date().getTime();
  const distance = deadline - now;

  if (distance < 0) {
    clearInterval(countdown);
    document.getElementById("days").textContent = "00";
    document.getElementById("hours").textContent = "00";
    document.getElementById("minutes").textContent = "00";
    document.getElementById("seconds").textContent = "00";
    return;
  }

  document.getElementById("days").textContent = 
    Math.floor(distance / (1000 * 60 * 60 * 24)).toString().padStart(2, '0');

  document.getElementById("hours").textContent = 
    Math.floor((distance / (1000 * 60 * 60)) % 24).toString().padStart(2, '0');

  document.getElementById("minutes").textContent = 
    Math.floor((distance / (1000 * 60)) % 60).toString().padStart(2, '0');

  document.getElementById("seconds").textContent = 
    Math.floor((distance / 1000) % 60).toString().padStart(2, '0');
}, 1000);

// Mobile Menu - Hamburger
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    menuToggle.textContent = navLinks.classList.contains("active") ? "✕" : "☰";
  });

  document.querySelectorAll("#nav-links a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      menuToggle.textContent = "☰";
    });
  });
}

