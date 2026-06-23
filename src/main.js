import "./style.css";
import "./js/theme.js";
import "./js/burgerMenu.js";

import renderHome from "./pages/home";
import renderAbout from "./pages/about"
import renderServices from "./pages/services"
import renderPortfolio, { destroyPortfolio, initPortfolio } from "./pages/portfolio";
import renderPrivacyPolicy from "./pages/privacy";
import renderContact, {initContact} from "./pages/contact";
import render404 from "./pages/404";

// ─── Route map ────────────────────────────────────────────────────────────────
const routes = {
  '/':        renderHome,
  '/about':   renderAbout,
  '/services': renderServices,
  '/portfolio': renderPortfolio,
  '/contact': renderContact,
  '/privacy': renderPrivacyPolicy
};

// ─── Title map ────────────────────────────────────────────────────────────────
const titles = {
  '/':        'Amplidia',
  '/about':   'About Us | Amplidia',
  '/services': 'Services | Amplidia',
  '/portfolio': 'Portfolio | Amplidia',
  '/contact': 'Contact Us | Amplidia',
  '/privacy': 'Privacy Policy | Amplidia'
};

// ─── App container ───────────────────────────────────────────────────────────
const appContainer = document.getElementById('app-container');

// ─── Clean index.html path ────────────────────────────────────────────────────
function getPath() {
  return window.location.pathname.replace('/index.html', '') || '/';
}

// ─── Navigate ─────────────────────────────────────────────────────────────────
// Reads window.location.pathname (e.g. "/about"), calls the matching render
// function, and injects the result into #view.
async function navigate() {
  const path = getPath();
  
  /* Spinning Loader - need to configure not a priority
  appContainer.innerHTML = `
    <div class="flex justify-center items-center min-h-screen pb-40">
        <div class="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin"></div>
    </div> 
  `
  */

  // Clean up /index.html in the address bar
  if (window.location.pathname === '/index.html') {
    history.replaceState(null, '', '/');  // ← replaceState, not pushState
  }

  const renderPage = routes[path] ?? render404;
  document.title = titles[path] ?? '404 | Amplidia';

  appContainer.innerHTML = renderPage();
  if (path === '/contact') 
    initContact();

  if (path === '/portfolio')
    await initPortfolio();
  else
    destroyPortfolio();

  updateActiveLink(path);
  if (!window.location.hash) {
    window.scrollTo(0, 0);
  }
}

// ─── Update nav active state ──────────────────────────────────────────────────
function updateActiveLink(path) {
  const pageName = path === '/' ? 'home' : path.replace('/', '');

  document.getElementById('burger-nav-links').querySelectorAll('a').forEach(link => {
    if (link.dataset.page === pageName) {
      link.setAttribute('aria-current', 'page');
    } else {
      link.removeAttribute('aria-current');
    }
  });
}

// ─── Intercept all link clicks ────────────────────────────────────────────────
// Without this, clicking <a href="/about"> would trigger a full page reload.
// We catch every click, check if it's an internal link, and handle it ourselves.
document.addEventListener('click', (e) => {
  const link = e.target.closest('a');

  // Ignore: not a link
  if (!link) return;

  // Ignore: opens in a new tab
  if (link.target === '_blank') return;

  // Ignore: external link (different origin)
  if (link.href && !link.href.startsWith(window.location.origin)) return;

  if (link.getAttribute('href').startsWith('#')) return;

  // It's an internal link — handle it ourselves
  e.preventDefault();
  history.pushState(null, '', link.href); // update the URL silently
  navigate().catch(console.error);                              // swap the page content
});

// ─── Handle back / forward buttons ───────────────────────────────────────────
// pushState doesn't fire any event, but navigating history (back/forward)
// fires 'popstate' — so we re-run navigate() when that happens.
window.addEventListener('popstate', () => navigate().catch(console.error));

// Run once on first load
navigate().catch(console.error);