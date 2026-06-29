import "./style.css";
import { base } from "./js/utils.js";

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
import renderPrivacyPolicy, { initPrivacyPolicy } from "./pages/privacy";
import renderContact, { initContact } from "./pages/contact";
import render404 from "./pages/404";

// --- Route map -------------------------------------------------------------------
const routes = {
  "/": renderHome,
  "/about": renderAbout,
  "/services": renderServices,
  "/portfolio": renderPortfolio,
  "/contact": renderContact,
  "/privacy": renderPrivacyPolicy,
};

// --- Title map -------------------------------------------------------------------
const titles = {
  "/": "Amplidia",
  "/about": "About Us | Amplidia",
  "/services": "Services | Amplidia",
  "/portfolio": "Portfolio | Amplidia",
  "/contact": "Contact Us | Amplidia",
  "/privacy": "Privacy Policy | Amplidia",
};

let currentPath = null; // Track current path to prevent render on #links

// --- App container ---------------------------------------------------------------
const appContainer = document.getElementById("app-container");

appContainer.insertAdjacentHTML("beforebegin", renderHeader());
appContainer.insertAdjacentHTML("afterend", renderFooter());

initHeader();
initTheme();

// --- Clean index.html path -------------------------------------------------------
function getPath() {
  return window.location.pathname.replace(base, "") || "/";
}

// --- Navigate --------------------------------------------------------------------
async function navigate() {
   // Clean up /index.html in the address bar
  if (window.location.pathname === "/index.html" || window.location.pathname === base + "/index.html") {
    history.replaceState(null, "", base + "/");
  }

  const path = getPath();
  currentPath = path; 

  // Navbar active link update
  updateActiveLink(path);

  // Sroll to top of page
  if (!window.location.hash) {
    window.scrollTo(0, 0);
  }
  
  // Loading spinner before page render
  appContainer.innerHTML = `
    <div id="page-loader" role="status" aria-busy="true" aria-label="Loading"
      class="flex justify-center items-center fixed inset-0 z-60 bg-page-bg h-screen pb-15"
      >
      <div class="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin"></div>
    </div>
  `;

  const renderPage = routes[path] ?? render404;
  document.title = titles[path] ?? "404 | Amplidia";

  appContainer.innerHTML = renderPage();

  // Page specific init functions
  if (path === "/contact") initContact();
  if (path === "/privacy") await initPrivacyPolicy();
  
  if (path === "/portfolio") await initPortfolio();
  else destroyPortfolio();

  // Remove initial loading spinner after site loads on first visit
  document.getElementById("initial-loader")?.remove();
}

// --- Update nav active state -----------------------------------------------------
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

// --- Intercept all link clicks ---------------------------------------------------
document.addEventListener("click", (e) => {
  const link = e.target.closest("a");

  if (!link) return;
  if (link.target === "_blank") return;
  if (link.href && !link.href.startsWith(window.location.origin)) return; // External links
  if (link.getAttribute("href").startsWith("#")) return;

  // Update address bar and call navigate
  e.preventDefault();
  history.pushState(null, "", base + link.getAttribute('href'));
  navigate().catch(console.error);
});

// --- Handle back / forward buttons -----------------------------------------------
window.addEventListener("popstate", () => {
  if (currentPath === getPath()) return; // guard against #links
  navigate().catch(console.error);
});

// Run once on first load
navigate().catch(console.error);
