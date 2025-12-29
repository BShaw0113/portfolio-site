// script.js
document.getElementById("year").textContent = new Date().getFullYear();

const menuBtn = document.getElementById("menuBtn");
menuBtn?.addEventListener("click", () => {
  const links = document.querySelector(".nav-links");
  if (!links) return;
  const isOpen = links.style.display === "flex";
  links.style.display = isOpen ? "none" : "flex";
  links.style.flexDirection = "column";
  links.style.gap = "12px";
});

const form = document.getElementById("contactForm");
const note = document.getElementById("formNote");

form?.addEventListener("submit", (e) => {
  e.preventDefault();
  // Static site note: wire this to Formspree/Netlify Forms later.
  note.textContent = "Thanks! This form is a demo. Connect it to Formspree or Netlify Forms to receive messages.";
  form.reset();
});
