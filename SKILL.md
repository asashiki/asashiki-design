---
name: asashiki-design
description: Use this skill to generate well-branded interfaces and assets for Asashiki (浅仪式), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping. Aesthetic = 墨と桜: neutral ink-on-white base, restrained sakura-pink accent, subtle anime warmth, one serif webfont for editorial moments.
user-invocable: true
---

# Asashiki Design · 墨と桜

Read **`readme.md`** in this skill first — it is the full design guide (content tone, visual foundations, iconography, red-lines). Then explore the other files.

## Quick rules (do not violate)
- **Neutral first.** Skeleton (bg/surface/border/text) is neutral warm-gray. Sakura pink `--accent` is an accent only — ≤ 12% of the screen.
- **Tokens only.** Never hardcode hex / radius / shadow. Use the CSS variables in `tokens/`. Link `styles.css`, set `data-theme="light|dark"` (+ optional `data-palette="sakura|sumi|moss|mikan|frost"`).
- **No two-color gradients** (the #1 "AI smell" red-line). Buttons/progress are solid fills. The only gradient allowed is `--glow-wash`, a same-hue pale-sakura soft glow, ≤ 2 per screen.
- **Radii:** only 7 / 10 / 14px (+ full). Nothing larger.
- **Layer with 1px borders, not heavy shadows.** Shadow only on truly raised elements.
- **Icons:** Lucide only (16/20/24px, 1.5–2px stroke, `currentColor`). Never hand-draw SVG icons. Never use emoji as primary visual.
- **−12° skew** is the signature — ≤ 3 per screen (eyebrow block / status tag / progress tail / card stripe).
- **Type:** system sans (`--font`) for UI/body; Newsreader serif (`--font-serif`) only for hero / section titles / blog prose; mono for numbers/IDs.

## How to use
- **Visual artifacts** (slides, mocks, throwaway prototypes): copy `assets/` out and write static HTML that links `styles.css`; reuse the `ad-*` classes in `components/components.css` or the markup patterns in `ui_kits/`.
- **Production code**: read the rules here, copy tokens, and become an expert designing with this brand. The system is a *skin layer* — pair with Tailwind/shadcn and swap colors/radius/type to these tokens.

## Files
- `readme.md` — the design guide (read first).
- `styles.css` + `tokens/` — the single CSS entry and all tokens.
- `components/` — 19 React primitives (`.jsx` + `.d.ts`) over `components.css`.
- `ui_kits/showcase/`, `ui_kits/blog/` — full-page reference recreations.
- `guidelines/` — foundation specimen cards.
- `assets/brand/` — logos (color / ink / transparent).

If invoked with no other guidance, ask what the user wants to build, ask a few focused questions, then act as an expert Asashiki designer outputting HTML artifacts **or** production code as the need dictates.
