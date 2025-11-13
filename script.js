document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector("[data-mobile-toggle]");
  const navLinks = document.querySelector(".nav-links");
  const toTop = document.getElementById("to-top");
  const yearSpan = document.getElementById("year");

  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      navLinks.classList.toggle("nav-links--open");
    });

    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("nav-links--open");
      });
    });
  }

  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      toTop.style.display = "flex";
    } else {
      toTop.style.display = "none";
    }
  });

  if (toTop) {
    toTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});
