const detailsButtons = document.querySelectorAll(".details-btn");
const toast = document.getElementById("toast");
const themeToggle = document.getElementById("themeToggle");

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");

  window.clearTimeout(showToast._timerId);
  showToast._timerId = window.setTimeout(() => {
    toast.classList.remove("show");
  }, 1800);
}

detailsButtons.forEach((el) => {
  el.addEventListener("click", () => {
    const card = el.closest(".project-card");
    const projectName = card?.querySelector("h4")?.textContent?.trim() || "Project";
    showToast(`Opened: ${projectName}`);
  });
});

document.getElementById("footerYear").textContent = String(new Date().getFullYear());

function initScrollReveal() {
  const els = document.querySelectorAll(".reveal");
  if (!els.length) return;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    els.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        obs.unobserve(entry.target);
      });
    },
    { root: null, rootMargin: "0px 0px -10% 0px", threshold: 0.12 }
  );

  els.forEach((el) => observer.observe(el));
}

initScrollReveal();

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
  const isLight = document.body.classList.contains("light");
  showToast(isLight ? "Light theme on" : "Dark theme on");
});
