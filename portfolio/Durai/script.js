// Smooth scroll for nav links
const navLinks = document.querySelectorAll(".nav-links a");
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    document
      .querySelector(link.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// Typing animation
const roles = [
  "Full Stack Developer",
  "Software Engineer",
  "Problem Solver",
  "Tech Enthusiast",
  "Angular Developer",
];
let i = 0;
let j = 0;
let currentRole = "";
let isDeleting = false;
const typingEl = document.querySelector(".typing");

function type() {
  currentRole = roles[i];

  if (isDeleting) {
    typingEl.textContent = currentRole.substring(0, j--);
    if (j < 0) {
      isDeleting = false;
      i = (i + 1) % roles.length;
    }
  } else {
    typingEl.textContent = currentRole.substring(0, j++);
    if (j > currentRole.length) {
      isDeleting = true;
      setTimeout(type, 1500);
      return;
    }
  }

  setTimeout(type, isDeleting ? 50 : 100);
}

type();

// Scroll reveal animation
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  },
  { threshold: 0.1 },
);

document.querySelectorAll("section").forEach((s) => {
  s.style.opacity = "0";
  s.style.transform = "translateY(30px)";
  s.style.transition = "all 0.8s ease";
  observer.observe(s);
});

// Form submit
const contactForm = document.querySelector(".contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thank you! Your message has been sent. 🚀");
    e.target.reset();
  });
}
