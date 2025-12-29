document.getElementById("year").textContent = new Date().getFullYear();

// Mobile menu
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn?.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", String(isOpen));
});

// Reveal on scroll
const revealEls = document.querySelectorAll(".reveal");
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("is-visible");
    });
  },
  { threshold: 0.12 }
);

revealEls.forEach((el) => io.observe(el));
// Expand / collapse project cards
document.querySelectorAll(".toggle-project").forEach((btn) => {
  btn.addEventListener("click", () => {
    const card = btn.closest(".project-card");
    const expanded = card.classList.toggle("expanded");
    btn.textContent = expanded ? "Less ←" : "More →";
  });
});
