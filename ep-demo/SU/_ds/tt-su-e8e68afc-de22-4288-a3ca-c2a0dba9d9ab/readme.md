# Taiwan Trade — SU Back Office Design System

## What this is
This design system documents the **seller back office ("後台")** of **Taiwantrade** (台灣經貿網), the B2B trade platform run by **TAITRA** (中華民國對外貿易發展協會 / Taiwan External Trade Development Council). The back office lives at `su.ttstaging.com.tw` ("SU" = supplier/seller portal) and is where a supplier manages their company microsite (企業網), product catalog, orders, and inquiries.

The centerpiece captured here is the **Site Build Guide** (建站引導) — a wizard sellers use to stand up their public-facing company microsite: claiming a subdomain, choosing a page template + color scheme, arranging homepage content blocks, and editing per-language content.

## Sources
- 4 saved HTML snapshots of the live staging back office (`su.ttstaging.com.tw`), provided as a local folder `SU/`:
  - `SU.html` — Site Build Guide dashboard (`siteBuildGuideMain`)
  - `SU2.html` — Template & color-scheme step (`encEpDomainbuildStep1Show`)
  - `SU3.html` — Homepage module/block picker (`encEpDomainbuildStep2Show`)
  - `SU4.html` — Per-language content editor (`encEpDomainbuildDataShow`)
- No Figma file or GitHub repo was provided — everything below is reverse-engineered from the shipped CSS (`SU_files/design.css`) and markup in those snapshots.
- No logo file was present in any snapshot — see **Iconography** below.

## Products / surfaces represented
Only one surface was supplied: the **supplier back office**. The consumer-facing storefronts it builds (`*.en.ttstaging.com.tw` company microsites), the buyer-facing marketplace (`ttstaging.com.tw`), and `bu.ttstaging.com.tw` (buyer portal) are referenced in navigation links but were not captured, so they are out of scope here.

## Components
`components/` (namespace `window.TaiwanTradeSUDesignSystem_e8e68a`):
- **core/** — `Button` (outline / solid / dark), `Toggle` (on/off pill), `Badge` (count bubble / hint text)
- **forms/** — `SearchInput` (pill search field)
- **feedback/** — `Modal` (centered dialog with scrim, `.popMsg`)
- **navigation/** — `PageHeading` (dark teal header + accent bar + breadcrumb), `Steps` (wizard tracker), `Sidebar` (accordion menu)

### Intentional additions
The source has no component library or Figma file — only compiled CSS class names (`.btnLook`, `.switchOnOff`, `.popMsg`, etc.). The 8 components above are a from-scratch primitive set inferred directly from those CSS rules, sized to what the Site Build Guide screens actually use. Nothing here was invented beyond what the CSS already implies.

## Templates
- `templates/su-site-build-guide/` — the Site Build Guide dashboard, recreated close to source: subdomain claim, member-tenure badge toggle, multi-language activation, homepage template/module picker (using the real page-block schematic SVGs), product catalog and payment summary rows.

## Guidelines
`guidelines/` — foundation specimen cards: brand/neutral/semantic/microsite-theme colors, display/body/mono type, spacing scale + gutter rules, wordmark, sidebar icon set, page-block schematics.

## Content fundamentals
- **Language**: primarily Traditional Chinese (zh-TW) UI copy with English left in place for proper nouns, brand names, and untranslated buyer-side labels (e.g. "Inquiries", "My Subscription") — copy is bilingual by necessity, not stylistically mixed for effect.
- **Voice**: instructional and procedural, second-person implied ("可輸入您想要使用的子網域名稱" — "you may enter…"). Tone is neutral/administrative, not marketing — this is operational software for exporters, not a consumer app.
- **Casing**: sentence case throughout; no title-case buttons, no ALL CAPS.
- **Structure**: every setting block follows *label → current status line → action button*, e.g. "首頁(Home)配置 / 目前設定：多頁式版型｜綠 / 設定版型與首頁". Status lines use "｜"（full-width pipe）to separate enumerated values.
- **Help text**: short "Tips:" hints in the brand pink/magenta (`--c-hint`) rather than dismissible tooltips; required fields marked with a red `*`.
- **Emoji**: none. Icons and colored status dots do the work emoji would elsewhere.
- **Example**: *"Tips: 版型與設定的區塊設定為各語系共用，選擇版型與色系後，可進一步設定您想要的資料區塊。"* — plain, procedural, no exclamation.

## Visual foundations
- **Color**: dark teal (`#436672`) is the chrome/brand color (headers, primary dark actions); orange (`#f82`) is the single accent used sparingly as a left-edge stripe on every page heading and for highlighted pill buttons; slate blue-grey (`#7d979e`) is the default neutral action color. The overall page canvas is a warm off-white/khaki (`#e8e7dc`) — notably not pure white or cool grey, giving the product a slightly warm, paper-like backdrop. Cards and panels sit on white.
- **Storefront theme options** (customer-facing, chosen inside the wizard, not part of the admin chrome): 銀色系 (silver, for the single-page template), 橘色系 (orange), 綠色系 (green) — for multi-page templates.
- **Type**: Red Hat Display for both display and body text, falling back to Microsoft JhengHei (微軟正黑體) for CJK glyphs Red Hat Display doesn't cover, then system sans. Roboto Mono is loaded for tabular/numeric data. Body text is unusually large on mobile (18px) and steps down to 15px at desktop widths — the opposite of typical responsive type scales, reflecting an older, accessibility-first mobile-web pattern rather than a mobile-app one.
- **Spacing**: a simple content gutter that grows with viewport — `2vw` margins on mobile, fixed `20px` at ≥1000px, plus an extra `48px` right margin at ≥1300px to clear the fixed 240px sidebar.
- **Backgrounds**: flat color only — no gradients, no photographic full-bleed hero imagery in the admin chrome itself (photography lives in seller-uploaded product/content images, not the UI). No hand-drawn illustration or repeating texture.
- **Animation**: minimal and functional only — 0.1–0.3s ease transitions on hover/press states (box-shadow, background-color, left-position of toggle knobs). No entrance animation, no bounce, no page transitions.
- **Hover states**: buttons darken (slate → teal) or invert (white outline → filled black with yellow text, on dark contexts); links go from deep teal to a brighter cyan; a hairline `box-shadow` outline thickens from 1px to 2px rather than the element changing size.
- **Press/active states**: no distinct press state beyond the hover treatment — the product doesn't scale or shrink elements on click.
- **Borders & shadows**: almost no literal `border`s — edges are drawn with 1px `box-shadow` "hairlines" (`#afbabb 0 0 0 1px`) or colored outline-shadows (`#778b8e 0 0 6px`) instead, so borders can double as a colored focus/hover ring by swapping the shadow. Modals and dropdowns use a soft, wide drop shadow (`rgba(0,0,0,.3) 0 5px 16px -5px`).
- **Corner radii**: buttons and pills are fully round (`2em`/circular); cards, modals, and inputs use a small 4–6px radius; icon buttons are perfect circles.
- **Cards**: white background, 4–6px radius, no visible border — depth comes entirely from the colored box-shadow hairline technique above, not from elevation shadows.
- **Transparency/blur**: used sparingly — the sidebar background is `rgba(255,255,255,.95)` over content, and modal scrims are `rgba(200,200,200,.5)`. No backdrop-blur anywhere.
- **Imagery**: none of the admin chrome itself uses photography; product thumbnails uploaded by sellers are plain e-commerce product shots (no consistent color grading, since they're seller-supplied).
- **Layout**: a persistent left sidebar (fixed, 240px expanded / 48px icon rail on tablet) and a fixed top bar; the dark-teal page heading with its orange left accent stripe is the one constant "you are here" landmark across every screen.

## Iconography
- **No logo file** was present anywhere in the supplied snapshots — the header simply renders the wordmark "Taiwan Trade" as text (`<h1><a>Taiwan Trade</a></h1>`). This design system does the same: nowhere is a mark drawn or approximated. `guidelines/brand-wordmark.html` shows the plain-type treatment; please supply the real Taiwantrade/TAITRA logo files if you'd like this replaced.
- **Sidebar function icons**: a real 48×48 PNG icon set was captured and copied into `assets/icons/` (account, notification, inquiries, shopping cart, management, order comments, customized sourcing, go-to-top/bottom) — these are genuine product assets, not redrawn.
- **Inline sprite icons** referenced by the CSS (`icon_function.png`, `icons_func.png`, `icon_score.png`, etc. — used for the circular `.ficon`/`.editThis` action buttons, star ratings, and category-status badges) point at a sprite sheet that was **not** included in the saved snapshots (browsers only saved same-page image references, not the full sprite). These are flagged as missing rather than redrawn from guesswork — if you can export `/images/icon_function.png` and friends from the live site, drop them into `assets/icons/` and the `Button`/icon components can be wired to them.
- **Page-block schematics**: the site-build wizard shows small wireframe-style SVG previews for each homepage module option (multimedia carousel, banner, product grid variants, news, about-us, ad banner, contact form). These are real product SVGs, copied into `assets/schema/` and shown in `guidelines/brand-schematics.html`.
- No emoji, no Unicode-glyph icons, no icon font — the product relies entirely on background-position sprite icons and a handful of real image assets.

## Index
```
styles.css                    → imports every token file (link this one file)
tokens/                       colors · typography · spacing · effects · fonts · base
assets/icons/                 sidebar function icons (real PNGs from the product)
assets/schema/                homepage module-block schematic SVGs (real assets)
components/core/              Button, Toggle, Badge
components/forms/             SearchInput
components/feedback/          Modal
components/navigation/        PageHeading, Steps, Sidebar
templates/su-site-build-guide/ Site Build Guide dashboard recreation
guidelines/                   color / type / spacing / brand specimen cards
SKILL.md                      portable skill file for use in Claude Code
```
