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

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
  const isLight = document.body.classList.contains("light");
  showToast(isLight ? "Light mode active" : "Dark mode active");
});
