# Amplidia - Agency Site

### A site built using just HTML, TailwindCSS and vanilla JavaScript.

**Category:** Vanilla — HTML/CSS/JavaScript/Tailwind CSS only  
**Stack:** Tailwind CSS/JavaScript

# Design Reference

---

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
| `--text-1`  | `#0F1B2D` | Primary text — headings, labels        |
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
| `--accent`      | `#4DA6FF` | Same as light — consistent across themes |
| `--on-accent`   | `#0A0F1E` | Text color when placed on accent bg      |
| `--text-1`      | `#E2E8F0` | Primary text                             |
| `--text-2`      | `#94A3B8` | Secondary / body copy                    |
| `--text-3`      | `#4B5B6E` | Footer text, disabled states             |

### Color usage rules

- `--accent` never changes between themes — it is the single constant across both.
- Never place `--text-1` directly on `--accent`; use `--on-accent` (`#0A0F1E`) instead.
- Dark theme uses three distinct dark layers — `--page-bg` → `--surface` → `--card` — to create depth without shadows.

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

- **Sentence case always** — no Title Case in headings or buttons; no ALL CAPS except overlines.
- **Two weights only** in Inter: 400 regular and 500 medium. Avoid 600+ in body type — it reads heavy.
- **Overlines** (`12px / 500 / letter-spacing: 0.1em / text-transform: uppercase`) always appear in `--accent` and sit above section titles, not below.
- **Max line length** for body copy: `max-width: 65ch` or roughly 560–600px. Anything wider is hard to read.
- Display size (`48px`) scales down to `36px` on mobile (≤640px breakpoint).

---

## Buttons

Three variants. Each has a single job — don't swap them based on preference.

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

Same fill as `btn-primary` but smaller — sized for the 60px nav bar. Do not reuse this class outside the nav.

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
max-width: 1100px;
margin: 0 auto;
padding: 0 5%;
```

### Section padding

| Section type    | Padding       |
| --------------- | ------------- |
| Hero            | `7rem 0 6rem` |
| Feature section | `6rem 0`      |
| CTA banner      | `4rem 0`      |
| Nav height      | `60px` fixed  |
| Footer          | `2rem 0`      |

### Card grid

```css
grid-template-columns: repeat(3, 1fr);
gap: 1.25rem;
```

Collapses to `1fr` (single column) below `640px`.

---

## Responsive breakpoints

| Breakpoint | Width         | Changes                                             |
| ---------- | ------------- | --------------------------------------------------- |
| Mobile     | <640px (sm)   | Root font-size → 12px; card grid → single column    |
| Tablet     | <1024px (lg)  | Nav links moved to burger menu; layout optimization |
| MDPI       | <1280px (xl)  | Root font-size → 14px; layout optimization          |
| HiDPI      | ≥1600px (2xl) | Root font-size → 20px                               |

---

## Dark mode implementation

Uses `@media (prefers-color-scheme: dark)` to override tokens automatically.

Uses `dark` class when manually toggling to override tokens, with `light` class added to prevent system color scheme override for light mode.

`@variant dark` Tailwind CSS functionality implemented to use `dark:` Tailwind CSS selectors.

---

## File index

| File | Purpose |
| ---- | ------- |
|      |         |
|      |         |
|      |         |

---
