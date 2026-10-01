# Dixor Dark Redesign — Design Spec

**Date:** 2026-09-30
**Status:** Approved
**Reference:** `C:\Users\mooma\Desktop\site-mirrors\dixor-react.vercel.app` (live preview on :4173)
**Target:** `mohamedOmar11111/mohamed-omar-portfolio` → https://mohamedomar11111.github.io/mohamed-omar-portfolio/

---

## 1. Direction

Full inversion to a dark "Forensic Noir" theme. Black canvas, acid-lime single accent, cobalt removed.

Reference tokens extracted from the Dixor bundle (`assets/index-Cp4WAhJt.css`):

| Token | Dixor | This site (before) | This site (after) |
|---|---|---|---|
| `--color-heading` | `#04000b` | `#0b1020` | `#f2f2f0` |
| `--color-paragraph` | `#666` | `#454c63` | `#8e8e93` |
| `--color-primary` | `#C9F31D` | — | `#C9F31D` |
| `--color-secondary` | `#add40c` | — | `#add40c` |
| canvas | black | `#f4f7ff` | `#08080a` |
| section alt | `#0a0a0a` | `#ffffff` | `#0d0d10` |
| hairline | `#1e1e1e` | ink @22% | `#1e1e1e` |
| display | — | Archivo Black | Barlow 800 |
| body | — | Public Sans | Barlow 400/500 |
| Arabic | — | — | IBM Plex Sans Arabic (`[lang="ar"]`) |

### Deliberate deviation from Dixor

Dixor's body colour `#666` on black measures **3.66:1** — passes for large text only, fails WCAG AA for body copy. The long-form GEO pages on this site exist to be read and cited by humans and AI engines, so body text is lifted to `#8e8e93`, measured at **6.14:1** on the canvas and **5.95:1** on the alternating section. The visual character is preserved; the accessibility failure is not.

Measured contrast on the final theme:

| Pair | Ratio | WCAG |
|---|---|---|
| `--ink` on `--paper` | 17.85:1 | AAA |
| `--quiet` on `--paper` | 6.14:1 | AA |
| `--quiet` on `--paper-bright` | 5.95:1 | AA |
| `--signal` on `--paper` | 15.55:1 | AAA |
| `--void` on `--signal` | 15.55:1 | AAA |
| `--signal-deep` on `--paper` | 11.62:1 | AAA |

### Effects layer

Added on top of the token swap so the result reads as the reference rather than a flat recolour:

- Film grain over the full canvas (inline SVG turbulence, 3.5% opacity, non-blocking)
- Ambient lime bloom behind hero, proof, thesis, and call sections
- Vertical white→grey gradient on all display headings
- Animated lime gradient text on case-card figures, the call number, and ledger deltas
- Lime glow shadows (`--glow-lime` / `--glow-lime-hot`) on signal surfaces
- Glass treatment — 20px blur + 160% saturate on header and capsule nav, lime-tinted border
- Sheen sweep across case cards on hover
- Gradient hairline rules on section dividers
- Pulsing ring on the active nav indicator

`background-clip: text` is applied only to elements with no background fill — clipping a filled element hides the fill itself.

### Correction to the original propagation plan

The initial Section 3 finding stated the non-homepage pages were light and needed inverting. That was wrong. They were already dark; each carried its own accent and font:

| Page | Accent (before) | Font (before) |
|---|---|---|
| `index_ai_growth` | emerald `#00ffaa` + cyan `#00D4FF` | Inter |
| `index_ar` | cyan `#00D4FF` + orange `#FFA500` | Cairo |
| `index_pre_skills` | cyan + purple + indigo | Inter |
| `etlaala-recovery` | neon + magenta | Space Grotesk |
| `whitepaper-sgp` | neon cyan | Space Grotesk |
| `knowledge-hub` | neon cyan | Inter |
| `linkedin_authority_carousel` | purple `#a855f7` + cyan | Instrument Serif |
| `index_backup` | neon cyan + magenta | Space Grotesk |

The real defect was incoherence — six accents across five fonts. Propagation therefore became a unification pass: every live accent collapsed to `--signal` `#C9F31D` (or `--signal-deep` `#add40c` for secondary accents), and Space Grotesk / Inter / Archivo Black / Instrument Serif collapsed to Barlow. 21 pages harmonized; `index_backup.html` and `index_pre_skills.html` left archived and untouched.

---

## 2. Components

Ported from Dixor:
- **Pill eyebrow chip** — outline chip, lime on hover, replaces `.section-intro > p` / `.section-label`
- **Stat card** — 1px `#1e1e1e` border, 12px radius, giant Barlow 800 number in lime, market label below; hover fills lime and flips text to `#08080a`
- **Numbered circle** — `01/02/03`, replaces `.method-step` filled circles
- **Section canvas alternation** — `#08080a` / `#0d0d10` rhythm

Retained from this site, recolored:
- Floating capsule nav
- Center hairline grid texture (now `#1e1e1e`)
- Header signal bar (now lime → `#add40c` → lime sweep)

---

## 3. Proof block

Replaces `.proof-ledger` on `index.html` (currently 3 text rows) with:

**Four case cards** — one per named client:

| Card | Sector | Number | Secondary |
|---|---|---|---|
| Etlaala | Travel & Tourism | +1M SAR net profit | −75% CPL (450→110 SAR) |
| Aqarverse | PropTech | 7.45 AED/lead | 129K reach · 227 leads |
| Grow Edge | Education | 690K reach | — |
| Wlmma | — | 123K reach | — |

Each card links to the GitHub metrics vault (Grow Edge and Wlmma have no internal case page).

**Verified ledger table** — the trust element. Baseline → Result → Delta:

| Metric | Baseline | Result | Delta |
|---|---|---|---|
| Monthly net profit | −70,000 SAR | +1,000,000 SAR | +1,529% |
| Cost per lead | 450 SAR | 110 SAR | −75% |
| Conversion rate | 1.2% | 3.8% | +216% |
| Google Ads CTR | — | 14.3% | peak |

**Primary CTA** — "View verified data" → raw `METRICS-VAULT.md` on GitHub. Third-party-hosted, commit-timestamped, publicly auditable. No new on-site case-studies page.

Methodology steps become numbered circles: AI Intent Classification · Arabic Luxury Transcreation · Automated Nurture.

Existing disclaimer (`proof-note`) retained verbatim.

---

## 4. Number corrections

The repos carry three inconsistent figures for one claim. Resolved to a single source of truth:

| Figure | Was | Now | Source |
|---|---|---|---|
| Profit growth | `+1400%` (site, markdown) / `1428` (JSON) | **+1,529%** | (−70,000 → +1,000,000 = 1,070,000 / 70,000) |
| Google Ads CTR | `14%` (JSON) / `14.3%` (docs) | **14.3%** | documented peak |
| CPL | absent from site | **450 → 110 SAR, −75%** | `METRICS-VAULT.md` |

Each figure carries its market label — `110 SAR` (Etlaala · KSA/GCC) and `7.45 AED` (Aqarverse · UAE) — so the two currencies are never silently mixed.

Corrected in visible copy **and** JSON-LD. The `+1400%` string appears in structured data on `growth-architecture-methodology.html` lines 93 and 203.

---

## 5. Structural finding

**Only 1 of 24 pages links `index.css`.** Every other page carries its own inline `<style>`; 9 pages define their own `:root`. There is no design system today — one stylesheet plus 23 one-off stylesheets.

Cobalt footprint is small: 2 occurrences in `index.html`, 1 in `index.css`. Removal is cheap. The duplication is the real cost.

**Propagation strategy (Option C):** link `index.css` to every page so tokens and shared components come from one file, while leaving page-specific inline layout rules in place. Duplicate `:root` blocks become harmless overrides, retired page by page in later passes. The destination is Option A (full cleanup); it is not attempted in the same pass as a colour inversion.

---

## 6. Explicitly untouched

`llms.txt` · `schema.json` · `sitemap.xml` · `robots.txt` · `BingSiteAuth.xml` · `okf/` · `_next/` · `sovereign-v2/` · `onyx-axis/` · `The_Growth_Architect/` · `index_backup.html` · `index_pre_skills.html`

No structural markup changes anywhere. JSON-LD receives data corrections only.

---

## 7. Pilot pages

1. `index.html` — 4-card grid, ledger table, numbered method steps
2. `etlaala-case-study-details.html` — deepest proof narrative
3. `growth-architecture-methodology.html` — Aqarverse + Grow Edge figures, JSON-LD correction

`index_ar.html` — `dir="rtl"`, IBM Plex Sans Arabic, same dark tokens, Arabic proof text reconciled to the English source.

---

## 8. Verification gate

1. All pages render on the dark canvas — visually confirmed, not assumed
2. `grep` proves zero cobalt outside the two archived files
3. `grep` proves zero `+1400%` in any live page or JSON-LD block
4. Contrast audit: body ≥ 4.5:1, display ≥ 3:1, computed not eyeballed
5. `llms.txt` / `schema.json` / `sitemap.xml` / `robots.txt` byte-identical to pre-change
6. Arabic page checked separately for RTL breakage
