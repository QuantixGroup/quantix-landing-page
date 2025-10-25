window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar-quantix");
  if (navbar) {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  }

  const animatedElements = document.querySelectorAll("[data-animate]");
  const triggerBottom = window.innerHeight * 0.85;

  animatedElements.forEach((el) => {
    const boxTop = el.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      el.classList.add("visible");
    }
  });
});

(function () {
  const toggleBtn = document.getElementById("theme-toggle");
  if (!toggleBtn) return;

  const body = document.body;

  function setTheme(isLight) {
    if (isLight) {
      body.classList.add("light-mode");
      toggleBtn.innerHTML = '<i class="bi bi-sun-fill"></i>';
      localStorage.setItem("theme", "light");
    } else {
      body.classList.remove("light-mode");
      toggleBtn.innerHTML = '<i class="bi bi-moon-stars"></i>';
      localStorage.setItem("theme", "dark");
    }
  }

  const savedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (savedTheme === "light") {
    setTheme(true);
  } else if (savedTheme === "dark") {
    setTheme(false);
  } else {
    setTheme(!prefersDark);
  }

  toggleBtn.addEventListener("click", function () {
    const isLight = !body.classList.contains("light-mode");
    setTheme(isLight);
  });
})();

(function () {
  const form = document.querySelector(".contact-form");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");

    if (name && email && message) {
      if (name.value.trim() && email.value.trim() && message.value.trim()) {
        alert("¡Gracias por contactarnos! Te responderemos pronto.");
        form.reset();
      }
    }
  });
})();

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      const offset = 80;
      const targetPosition = target.offsetTop - offset;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });

      document.querySelectorAll(".nav-link").forEach((link) => {
        link.classList.remove("active");
      });
      if (this.classList.contains("nav-link")) {
        this.classList.add("active");
      }
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  window.dispatchEvent(new Event("scroll"));
});
