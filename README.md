# Amplidia - Agency Site
https://fxzan.github.io/agency-site/  

### A site built using just HTML, TailwindCSS and vanilla JavaScript.

**Category:** Vanilla - HTML/CSS/JavaScript/Tailwind CSS only  
**Stack:** Tailwind CSS/JavaScript

---      
---
# Architecture

## SPA routing

The site is a single-page application with Vanilla JS - no application framework. Tailwind CSS used for styling. Routing is handled entirely in `main.js`.

**Route and title maps** declare which render function and document title correspond to each path:

```js
const routes = { "/": renderHome, "/about": renderAbout, ... };
const titles = { "/": "Amplidia", "/about": "About Us | Amplidia", ... };
```

**`navigate()`** is the core function. On every route change it:
1. Cleans up `/index.html` from the address bar if present
2. Updates the active nav link
3. Injects a loading spinner into the app container
4. Calls the matching render function and sets `document.title`
5. Runs any page-specific `init*` function
6. Removes the initial full-page loader on first visit

**Link interception** is handled by a global `click` listener on `document`. Any internal `<a>` click that isn't `_blank`, external, or a hash link is intercepted, prevented, and routed through `navigate()` via `history.pushState`.

**Back/forward navigation** is handled by a `popstate` listener. A `currentPath` guard prevents a re-render when the URL change is only a hash.

---

## Page render / init pattern

Pages follows a two-function split:

| Function | Purpose |
| --- | --- |
| `render*()` | Returns an HTML string. Pure, no side effects. |
| `init*()` | Attaches event listeners and fetches data after the HTML is in the DOM. |

`render*` is always called first and its output is written to `appContainer.innerHTML`. `init*` is called immediately after, and only for pages that need it (`/contact`, `/privacy`, `/portfolio`).

---

## Data files

Two static data files under `/public/data/`:

**`/public/data/campaigns.json`** - array of campaign objects consumed by the portfolio page. Expected shape:

```json
[
  {
    "campaignPath": "campaign-slug",
    "name": "Campaign Name",
    "date": "Month Year",
    "thumbUrl": "/path/to/image.jpg",
    "description": "Campaign description.",
    "featured": true,
    "metrics": [
      { "metricName": "Reach", "metricValue": "2M+" }
    ]
  }
]
```

- `campaignPath` is used as the DOM `id` of the grid card and as the lookup key when opening campaign details. It must be unique.
- `featured: true` marks a campaign for the hero carousel. At least one featured campaign is required.

**`/public/data/privacy.html`** - raw HTML fragment (no `<html>` or `<body>` tags) injected into the privacy policy section. Styled by the existing Tailwind classes on the page.

---

## Theme system

Theme is resolved in two places intentionally:

1. **Inline `<script>` in `index.html`** - runs before any CSS or JS loads. Reads `localStorage` and adds the `dark` class to `<html>` immediately, preventing a flash of the wrong theme on first paint.

2. **`theme.js` (`initTheme()`)** - runs after the page loads. Sets up the toggle button listener, syncs the toggle icon state, and writes the user's preference back to `localStorage` on change.

Stored values: `"dark"`, `"light"`, or `"system"` (default on first visit, resolves via `prefers-color-scheme`).

---

## `destroyPortfolio`

The portfolio page runs a `setInterval` for the featured carousel auto-advance. Since this is a SPA and the DOM is replaced on navigation rather than a full page reload, the interval must be manually cleared when leaving the page. `destroyPortfolio()` is called on every route change except `/portfolio` to handle this.  
It also removes the "See more" button, which lives outside the app container and would otherwise persist across navigations.  
Additionally, `carousel-details` and `carousel-backdrop` are removed if present when navigating away from `/portfolio`.

---

## `trapFocus` utility (`utils.js`)

Used to trap keyboard focus inside a modal while it is open - required for accessibility.

```js
trapFocus(container, signal);
```

| Parameter | Type | Description |
| --- | --- | --- |
| `container` | `HTMLElement` | The modal or dialog element to trap focus within |
| `signal` | `AbortSignal` | From an `AbortController`; removes the listener when `controller.abort()` is called |

Focuses the first focusable element on call, then intercepts `Tab` and `Shift+Tab` to cycle within the container. The listener is cleaned up automatically when the modal closes via `controller.abort()`.
  
---
---
# Design Reference

## Color tokens

### Light theme

| Token       | Hex       | Role                                   |
| ----------- | --------- | -------------------------------------- |
| `--page-bg` | `#0F1B2D` | Page background, nav, hero, footer     |
| `--deep`    | `#1A3A5C` | Secondary dark surface, hero visual bg |
| `--mid`     | `#2E6DA4` | Mid-tone blue, decorative only         |
| `--accent`  | `#4DA6FF` | CTAs, overlines, links, icon strokes   |
| `--surface` | `#F5F7FA` | Page background (features section)     |
| `--card`    | `#FFFFFF` | Card background                        |
| `--border`  | `#D0D8E4` | Card borders, dividers                 |
| `--text-1`  | `#0F1B2D` | Primary text - headings, labels        |
| `--text-2`  | `#4B5B6E` | Body copy, descriptions                |
| `--text-3`  | `#6B7A8E` | Placeholder text, disabled states      |

### Dark theme

| Token           | Hex       | Role                                     |
| --------------- | --------- | ---------------------------------------- |
| `--page-bg`     | `#0A0F1E` | Root page background                     |
| `--surface`     | `#111827` | Section backgrounds (features)           |
| `--card`        | `#1E2D4A` | Card background                          |
| `--card-hover`  | `#243556` | Card background on hover                 |
| `--border`      | `#2A3F63` | Card borders, button outlines            |
| `--border-soft` | `#1E2D4A` | Nav border, footer border                |
| `--accent`      | `#4DA6FF` | Same as light - consistent across themes |
| `--on-accent`   | `#0A0F1E` | Text color when placed on accent bg      |
| `--text-1`      | `#E2E8F0` | Primary text                             |
| `--text-2`      | `#94A3B8` | Secondary / body copy                    |
| `--text-3`      | `#4B5B6E` | Footer text, disabled states             |

### Color usage rules

- `--accent` never changes between themes - it is the single constant across both.
- Never place `--text-1` directly on `--accent`; use `--on-accent` (`#0A0F1E`) instead.
- Dark theme uses three distinct dark layers - `--page-bg` → `--surface` → `--card` - to create depth without shadows.

---

## Typography

### Typefaces

| Role    | Family            | Weights used | Usage                                      |
| ------- | ----------------- | ------------ | ------------------------------------------ |
| Display | Plus Jakarta Sans | 600, 700     | Hero headline, section titles, card titles |
| Body    | Inter             | 400, 500     | All body copy, buttons, labels, captions   |

Google Fonts import:

```html
<link
  href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Plus+Jakarta+Sans:wght@600;700&display=swap"
  rel="stylesheet"
/>
```

### Type scale

| Name       | Size | Weight  | Font              | Line height | Used for                     |
| ---------- | ---- | ------- | ----------------- | ----------- | ---------------------------- |
| Display    | 48px | 700     | Plus Jakarta Sans | 1.15        | Hero headline (`h1`)         |
| Heading 1  | 36px | 700     | Plus Jakarta Sans | 1.25        | Section title (`h2`)         |
| Heading 2  | 22px | 600     | Plus Jakarta Sans | 1.3         | Sub-section, modal titles    |
| Card title | 16px | 600     | Plus Jakarta Sans | 1.4         | Feature card headings        |
| Body large | 18px | 400     | Inter             | 1.7         | Hero lead paragraph          |
| Body       | 16px | 400     | Inter             | 1.7         | General body copy            |
| Body small | 14px | 400     | Inter             | 1.65        | Card body copy               |
| Overline   | 12px | 500     | Inter             | 1.0         | Section labels, eyebrows     |
| Caption    | 13px | 400–500 | Inter             | 1.5         | Footer text, nav links, meta |

### Typography rules

- **Sentence case always** - no Title Case in headings or buttons; no ALL CAPS except overlines.
- **Two weights only** in Inter: 400 regular and 500 medium. Avoid 600+ in body type - it reads heavy.
- **Overlines** (`12px / 500 / letter-spacing: 0.1em / text-transform: uppercase`) always appear in `--accent` and sit above section titles, not below.
- **Max line length** for body copy: `max-width: 65ch` or roughly 560–600px. Anything wider is hard to read.
- Display size (`48px`) scales down to `36px` on mobile (≤640px breakpoint).

---

## Buttons

Three variants. Each has a single job - don't swap them based on preference.

### btn-primary

```css
background: var(--accent); /* #4DA6FF */
color: var(--on-accent); /* #0A0F1E */
font-size: 15px;
font-weight: 500;
padding: 0.75rem 1.75rem;
border-radius: 6px;
border: none;
```

**When to use:** The single most important action in a section. One per visual group max.
Examples: "See our work", "Start a project", "Get in touch"

**Hover:** `box-shadow: 0 0 8px var(--accent)`

---

### btn-secondary

```css
background: transparent;
color: var(--text-1); /* #E2E8F0 dark / #0F1B2D light */
border: 1.5px solid var(--border);
font-size: 15px;
font-weight: 500;
padding: 0.75rem 1.75rem;
border-radius: 6px;
```

**When to use:** Supporting action alongside a primary button. Never alone (implies there's a more important action elsewhere).
Examples: "How we work", "See pricing", "Learn more"

**Hover:** `border-color: var(--accent); color: var(--accent);`

---

### btn-ghost

```css
background: transparent;
color: var(--text-2); /* #94A3B8 dark / #4B5B6E light */
border: none;
font-size: 15px;
font-weight: 400;
padding: 0;
```

**When to use:** Low-priority exploratory paths. Common inside cards, footers, and as a third option in a button row. Always include a directional arrow (`→`).
Examples: "Read the story →", "Explore process →", "View case studies →"

**Hover:** `color: var(--accent);`

---

### btn-nav (nav-only variant)

```css
background: var(--accent);
color: var(--on-accent);
font-size: 13px;
font-weight: 500;
padding: 0.45rem 1.1rem;
border-radius: 6px;
```

Same fill as `btn-primary` but smaller - sized for the 60px nav bar. Do not reuse this class outside the nav.

---

### Button hierarchy rule

In any button group, always order: **primary → secondary → ghost**, left to right. The visual weight decreases left to right, guiding the eye toward the primary action first.

```html
<!-- Correct order -->
<a href="#" class="btn-primary">See our work</a>
<a href="#" class="btn-secondary">How we work</a>
<a href="#" class="btn-ghost">Read the story →</a>
```

---

## Spacing & layout

| Token          | Value | Used for                               |
| -------------- | ----- | -------------------------------------- |
| `--radius-md`  | 6px   | Buttons, icon backgrounds, small chips |
| `--radius-xl`  | 12px  | Inputs, tooltips                       |
| `--radius-2xl` | 16px  | Cards, modals, hero visual placeholder |

### Container

```css
max-width: 75rem;
margin: 0 auto;
padding: 0 2rem;
```

### Section padding

| Section type    | Padding         |
| --------------- | ----------------|
| Hero            | `7rem 0 6rem`   |
| Feature section | `6rem 0`        |
| CTA banner      | `4rem 0`        |
| Nav height      | `3.75rem` fixed |
| Footer          | `2rem 0`        |

### Card grid

```css
grid-template-columns: repeat(3, 1fr);
gap: 1rem;
```

Collapses to `1fr` (single column) below `640px`.

---

## Responsive breakpoints

| Breakpoint | Width         | Changes                                             |
| ---------- | ------------- | --------------------------------------------------- |
| Mobile     | <640px (sm)   | Nav links moved to burger menu; layout optimization |
| Tablet     | <1024px (lg)  | Root font-size → 14px; layout optimization          |
| MDPI       | <1280px (xl)  | Root font-size → default (16px)                     |

---

## Dark mode implementation

Uses theme logic with `localStorage` to apply light/dark themes automatically.
Uses `dark` class to override color tokens, applied when system prefers dark theme, or when manually toggled.

`@variant dark` Tailwind CSS functionality implemented to use `dark:` Tailwind CSS selectors.

---
---
# File index
---

| File | Purpose |
| --- | --- |
| `src/main.js` | SPA router, link interception, navigation logic |
| `src/js/theme.js` | Theme init, toggle button, localStorage sync |
| `src/js/utils.js` | `trapFocus` accessibility utility |
| `src/pages/header.js` | Header render + burger menu init |
| `src/pages/footer.js` | Footer render |
| `src/pages/home.js` | Home page render |
| `src/pages/about.js` | About page render |
| `src/pages/services.js` | Services page render |
| `src/pages/portfolio.js` | Portfolio render, carousel, grid, campaign detail modal |
| `src/pages/contact.js` | Contact render, form validation, hCaptcha, submission |
| `src/pages/privacy.js` | Privacy policy render + fetch |
| `src/pages/404.js` | 404 page render |
| `src/style.css` | Tailwind config, design tokens, component classes |
| `public/data/campaigns.json` | Campaign data for portfolio page |
| `public/data/privacy.html` | Privacy policy HTML fragment |
| `index.html` | App shell, initial loader, theme script |
| `src/assets/` | SVG icons and `.avif` images used across pages - not individually indexed |

---
---
# Setup

```bash
npm install
npm run dev    # start dev server
npm run build  # production build
```

## Environment variables

Create a `.env` file in the project root with the following (Vite):

```env
VITE_HCAPTCHA_SITEKEY=your_hcaptcha_site_key
VITE_WEB3FORMS_KEY=your_web3forms_access_key
```

Both keys required.