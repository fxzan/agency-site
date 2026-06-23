export default function initTheme() {
  const stored = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  const theme =
    stored === "system" || !stored ? (prefersDark ? "dark" : "light") : stored;

  if (theme === "dark") {
    document.documentElement.classList.add("dark");
  }

  if (!stored) localStorage.setItem("theme", "system");

  function updateToggleIcon(isDark) {
    const btn = document.getElementById("theme-toggle-icon");
    if (!btn) return;

    if (isDark) {
      btn.classList.add("text-on-accent", "bg-accent");
      btn.classList.remove("bg-white/10");
    } else {
      btn.classList.remove("text-on-accent", "bg-accent");
      btn.classList.add("bg-white/10");
    }
  }

  function toggleTheme() {
    const isDark = document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    updateToggleIcon(isDark);
  }

  document
    .getElementById("theme-toggle-icon")
    .addEventListener("click", toggleTheme);
  updateToggleIcon(document.documentElement.classList.contains("dark"));
}
