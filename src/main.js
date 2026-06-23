import "./style.css";

import initTheme from "./js/theme.js";
import renderHeader, { initHeader } from "./pages/header.js";
import renderFooter from "./pages/footer.js";
import renderHome from "./pages/home";
import renderAbout from "./pages/about";
import renderServices from "./pages/services";
import renderPortfolio, {
  destroyPortfolio,
  initPortfolio,
} from "./pages/portfolio";
import renderPrivacyPolicy from "./pages/privacy";
import renderContact, { initContact } from "./pages/contact";
import render404 from "./pages/404";

// ─── Route map ────────────────────────────────────────────────────────────────
const routes = {
  "/": renderHome,
  "/about": renderAbout,
  "/services": renderServices,
  "/portfolio": renderPortfolio,
  "/contact": renderContact,
  "/privacy": renderPrivacyPolicy,
};

// ─── Title map ────────────────────────────────────────────────────────────────
const titles = {
  "/": "Amplidia",
  "/about": "About Us | Amplidia",
  "/services": "Services | Amplidia",
  "/portfolio": "Portfolio | Amplidia",
  "/contact": "Contact Us | Amplidia",
  "/privacy": "Privacy Policy | Amplidia",
};

// ─── App container ───────────────────────────────────────────────────────────
const appContainer = document.getElementById("app-container");

appContainer.insertAdjacentHTML("beforebegin", renderHeader());
appContainer.insertAdjacentHTML("afterend", renderFooter());

initHeader();
initTheme();

// ─── Clean index.html path ────────────────────────────────────────────────────
function getPath() {
  return window.location.pathname.replace("/index.html", "") || "/";
}

// ─── Navigate ─────────────────────────────────────────────────────────────────
async function navigate() {
  const path = getPath();

  // Clean up /index.html in the address bar
  if (window.location.pathname === "/index.html") {
    history.replaceState(null, "", "/");
  }

  const renderPage = routes[path] ?? render404;
  document.title = titles[path] ?? "404 | Amplidia";

  appContainer.innerHTML = renderPage();
  if (path === "/contact") initContact();

  if (path === "/portfolio") await initPortfolio();
  else destroyPortfolio();

  updateActiveLink(path);
  if (!window.location.hash) {
    window.scrollTo(0, 0);
  }

  document.getElementById("initial-loader")?.remove();
}

// ─── Update nav active state ──────────────────────────────────────────────────
function updateActiveLink(path) {
  const pageName = path === "/" ? "home" : path.replace("/", "");

  document
    .getElementById("burger-nav-links")
    .querySelectorAll("a")
    .forEach((link) => {
      if (link.dataset.page === pageName) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    });
}

// ─── Intercept all link clicks ────────────────────────────────────────────────
document.addEventListener("click", (e) => {
  const link = e.target.closest("a");

  if (!link) return;

  if (link.target === "_blank") return;

  if (link.href && !link.href.startsWith(window.location.origin)) return;

  if (link.getAttribute("href").startsWith("#")) return;

  e.preventDefault();
  history.pushState(null, "", link.href);
  navigate().catch(console.error);
});

// ─── Handle back / forward buttons ───────────────────────────────────────────
window.addEventListener("popstate", () => navigate().catch(console.error));

// Run once on first load
navigate().catch(console.error);
