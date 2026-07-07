# HyVue CMS — Design System

A complete UI design system for **HyVue CMS**, the web content-management platform by **HyWeb / 凌網科技** (a Taiwan information-services company). HyVue CMS is an administrative dashboard product used to manage websites, nodes, content and publishing — the interface is **Traditional Chinese (zh-Hant)** first, with Latin support.

This package captures the brand's foundations (color, type, spacing, elevation), its reusable component primitives, and full-screen UI-kit recreations of the product, so any new screen, mock, slide or prototype can be produced on-brand.

> **Source of truth:** the Figma library *“HyVue CMS 1.1”* (updated 2025/09/01). Pages cover Color & Typography, Shadows, Icons, and ~30 component families (Buttons, Forms, Cards, Charts, Tables, Steppers, Timeline, Navigation, Left-Menu, Dialogs, Snackbars, …) plus a `Mockup` page with the live dashboard. Values here were extracted directly from the file's Figma Variables (227 tokens across Blue / Green / Red / Purple themes) — not from screenshots. If you have access to the original `.fig`, prefer it for pixel-level detail.

---

## What HyVue CMS is

HyVue CMS is a **Material-Design-influenced admin console**. The signature view is a dashboard: a floating white left sidebar (logo, collapsible nav tree, user card), a top bar of circular accessibility/theme controls (logout, settings, notifications, contrast, font-size, theme), a breadcrumb, a page title with a blue accent bar, KPI stat cards, area/pie charts, and data tables with blue headers. The product ships **four switchable accent themes** and **accessibility affordances** (contrast toggle, font-size scaling) as first-class UI.

The brand mark is a **stacked-parallelogram glyph** in a blue→teal gradient beside a bold *HyVue CMS* wordmark.

---

## CONTENT FUNDAMENTALS

How HyVue CMS writes copy:

- **Language:** Traditional Chinese (Taiwan) is primary. UI labels, table headers, buttons and titles are Chinese; Latin appears for product name, numbers, dates and the occasional technical term. Example titles: 「系統首頁儀表板」(System Home Dashboard), 「今日熱門網頁」(Today's Popular Pages), 「節點管理」(Node Management).
- **Tone:** Neutral, professional, institutional — this is enterprise/government-grade software. Calm and factual, never playful or marketing-y.
- **Voice / person:** Impersonal and system-oriented. Labels are nouns or short verb phrases (「更多」more, 「儲存」save, 「新增節點」add node). It does not address the user as “you/您” in chrome; instructional helper text is terse (e.g. 「這不是一個正常的 Email 格式」“this isn't a valid Email format”).
- **Casing:** Latin labels use Title Case for the product name (*HyVue CMS*) and small-caps-style ALL-CAPS eyebrows in the spec sheets (HEADING TEXT, BODY TEXT). Chinese has no casing; weight (Bold) carries emphasis instead.
- **Density:** Concise. Buttons are 2–4 characters (更多 / 儲存 / 取消). Stat labels are short noun phrases (今日訪客人數). Dates are numeric `YYYY/MM/DD` (2025/09/01).
- **Punctuation:** Full-width Chinese punctuation in prose (、「」：). Numeric/date separators are half-width slashes.
- **Emoji:** **None.** The product never uses emoji. Iconography is carried entirely by Material Symbols.
- **Vibe:** Trustworthy, orderly, data-dense, accessible. “以人為本，以技術為核心，以客戶為導向” (people-centered, technology-core, customer-oriented) — HyWeb's own tagline — captures the temperament.

---

## VISUAL FOUNDATIONS

**Color.** A two-blue brand system: a deep navy **primary** (`#014D92`) for solid actions, and a brighter blue→teal **secondary** ramp (`#0055A0 · #2D62B3 · #057BB7 · #80CBD7`) for links, charts, tonal fills and accents. Neutrals are a slightly warm grey ramp from `#111` text down to `#F8F8F8` app surface and white cards. Status colors are conventional: info blue, success green `#00754B`, warning orange `#C23E00`, error red `#C40000`, each with a pale fill partner. Four **themes** (Blue default, Green, Red, Purple) re-tint only the brand ramp; neutrals/status stay constant. The brand **gradient** is a 120° navy→blue→teal mesh, used on the cover/login and hero areas.

**Type.** Primary face is **Noto Sans TC** (CJK + Latin) in Regular/Medium/Bold/Black. A secondary **Helvetica** stack carries numbers, KPI figures, pagination and dates. Headings are Bold with positive letter-spacing (~1.2px) for CJK legibility: H-LG 48, H1 32/40, H2 26/32, H3 20/28, H4 18/24. Body runs loose line-height for Chinese comfort (16/32, 18/36). Latin spec eyebrows are ALL-CAPS Helvetica Bold 14.

**Spacing & layout.** 4px base unit. Dashboard blocks gap at 20px; cards pad 24px; the app shell pads 30px. The sidebar is a fixed 300px floating panel (88px collapsed). Top-bar controls are 56px; form fields 48px.

**Shape & elevation.** Buttons and fields round at **8px**, cards at **12px**, the app shell/drawers at **24px**, pills/avatars/icon-buttons are fully round. Shadows are soft and cool: resting cards use `0 2px 8px rgba(34,34,34,.1)`; raised surfaces (sidebar, menus) use `0 4px 16px -4px rgba(34,34,34,.3)`; overlays go deeper. Borders are 1px `#DEE0E3` hairlines; inputs thicken to a 2px brand border on focus with a soft blue focus ring.

**Imagery.** Sparse. The hero/cover is the blue→teal gradient mesh; product screens are otherwise chrome + data (charts, tables, avatars). No photography in-app beyond user avatars. Charts use the secondary blue/teal ramp with translucent area fills.

**Motion.** Restrained and functional — 0.12–0.18s ease transitions on hover/focus/toggle, a sliding switch thumb, an indeterminate progress sweep, and a spinner. No bounces, no decorative looping animation. Reduced-motion friendly.

**Interaction states.** Hover lightens solids toward the mid-blue and tints ghost/text/outlined surfaces with the pale tonal fill; active deepens the color and removes elevation (a subtle 0.5px press). Disabled drops to the neutral border fill with faint text. Focus shows the 3px blue ring.

---

## ICONOGRAPHY

HyVue CMS uses **Material Symbols (Outlined, weight 400)** throughout — the icon grid in the Figma “Icons” page is the Material Symbols set rendered in both dark-on-light and light-on-dark. We load the **Material Symbols Outlined** webfont from Google Fonts (`tokens/fonts.css`) and expose it via the `Icon` component and the `.material-symbols-outlined` class.

- **System:** Material Symbols Outlined. Use the canonical names (`home`, `dashboard`, `description`, `folder`, `settings`, `notifications`, `account_circle`, `logout`, `language`, `contrast`, `format_size`, `palette`, `check_circle`, `warning`, `cancel`, `chevron_right`, `expand_more`, `first_page`/`last_page`, `leaderboard`, `database`, …).
- **Weight/fill:** default 400, unfilled outline; status icons in Alerts/StatCards use the **filled** variant for emphasis.
- **No emoji, no unicode-as-icon, no hand-drawn SVG.** If a glyph is missing, pick the nearest Material Symbol rather than drawing one.
- **Brand mark:** `assets/logo-mark.png` (the parallelogram glyph). The wordmark is just *HyVue CMS* set in Noto Sans / Noto Sans TC Bold.

---

## SUBSTITUTIONS / CAVEATS

- **Helvetica** is a licensed system font; we fall back to the native `Helvetica, Arial` stack rather than shipping a binary. If you have the licensed face, swap it into `--font-num` / `--font-accent`.
- Fonts are loaded via Google Fonts `@import` (Noto Sans TC + Material Symbols) rather than self-hosted `@font-face`, so the design-system “fonts” count reads 0 — this is intentional and works for consumers online.
- The figure font in the original mixes Helvetica with Lato/Inter in a few spots; we standardize on the Helvetica stack for numerics.

---

## INDEX

**Root**
- `styles.css` — the single entry point (import this). `@import`s the token + font + base layers only.
- `readme.md` — this guide. · `SKILL.md` — Agent-Skill front-matter for Claude Code use.
- `assets/` — `logo-mark.png`, `cover-gradient.jpg`.

**Tokens** (`tokens/`) — `fonts.css`, `colors.css`, `themes.css`, `typography.css`, `spacing.css`, `base.css`.

**Components** (`components/`) — React primitives (namespace `window.HyVueCMSDesignSystem_24ff2f`):
- `core/` — Icon, Button, IconButton, Card, Badge, Chip, Avatar
- `forms/` — Input, Select, Checkbox, Radio, Switch
- `feedback/` — Alert, ProgressLinear, ProgressCircular
- `navigation/` — Breadcrumb, Tabs, Pagination
- `data/` — StatCard

**Guidelines** (`guidelines/cards/`) — foundation specimen cards (Colors, Type, Spacing, Brand) shown in the Design System tab.

**UI kits** (`ui_kits/`) — full-screen product recreations:
- `dashboard/` — the HyVue CMS admin console (sidebar, top-bar, breadcrumb, stat cards, charts, data tables) + a sign-in screen.

See each component's `*.prompt.md` for usage. Use `check_design_system` for the live namespace and component list.
