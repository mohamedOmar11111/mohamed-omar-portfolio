---
name: Mohamed Omar — The Growth Architect
description: A boardroom evidence dossier for revenue architecture.
colors:
  mineral-paper: "#F2F0E9"
  sovereign-cobalt: "#1237E0"
  evidence-red: "#EF3E2F"
  ink: "#101218"
  quiet-ink: "#4D515C"
  white: "#FFFFFF"
typography:
  display:
    fontFamily: "Archivo Black, Arial Black, sans-serif"
    fontSize: "clamp(3.5rem, 9vw, 8rem)"
    fontWeight: 400
    lineHeight: 0.9
    letterSpacing: "-0.035em"
  body:
    fontFamily: "Public Sans, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
rounded:
  precise: "2px"
  control: "999px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "48px"
  xl: "96px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
    rounded: "{rounded.precise}"
    padding: "14px 20px"
  button-signal:
    backgroundColor: "{colors.evidence-red}"
    textColor: "{colors.ink}"
    rounded: "{rounded.precise}"
    padding: "14px 20px"
---

# Design System: The Evidence Dossier

## 1. Overview

**Creative North Star: "The Boardroom Evidence Dossier"**

The portfolio feels like a decisive report opened five minutes before a commercial decision: bright enough for daylight, dense only where evidence demands it, and marked with controlled cobalt and red annotations. It rejects generic AI-tool landing pages, hacker-terminal cosplay, neon-on-black cyberpunk, decorative glassmorphism, and agency card grids.

**Key Characteristics:**

- Large, compressed declarations balanced by calm body copy.
- Cobalt fields establish ownership; red marks action and evidence.
- Rectilinear layouts, exposed rules, and asymmetric evidence blocks.
- Motion is brief, directional, and never required to read the page.

## 2. Colors

The palette is committed, daylight-first, and high contrast.

### Primary
- **Sovereign Cobalt:** Owns major fields and establishes authority.

### Secondary
- **Evidence Red:** Reserved for proof marks, active states, and the strategy-call conversion.

### Neutral
- **Mineral Paper:** The working surface; never cream or luxury beige.
- **Ink:** Primary typography and structural lines.
- **Quiet Ink:** Supporting copy where contrast remains AA compliant.

**The Red Pen Rule.** Evidence Red appears only where a reviewer would mark a decisive fact or next action.

## 3. Typography

**Display Font:** Archivo Black (with Arial Black fallback)
**Body Font:** Public Sans (with Arial fallback)

**Character:** The display face is blunt and architectural; the body face is civic, legible, and free of fashion affectation.

### Hierarchy
- **Display** (400, fluid clamp, 0.9): Hero statements only.
- **Headline** (400, fluid clamp, 0.95): Section-level arguments.
- **Title** (700, 1–1.35rem, 1.15): Evidence and service labels.
- **Body** (400, 1rem, 1.65): Explanatory copy capped near 68ch.
- **Label** (700, 0.75rem, 0.08em): Short operational metadata only.

**The No-Costume Rule.** Monospace and faux-terminal language are prohibited.

## 4. Elevation

The system is flat by default. Depth comes from overlapping cobalt fields, hard structural borders, and controlled translation on interactive elements—not ambient shadows or glass blur.

**The Evidence Stays Flat Rule.** Proof never floats decoratively; it sits on the page like a signed record.

## 5. Components

### Buttons
- **Shape:** Precise corners (2px).
- **Primary:** Ink background with white text; compact and decisive.
- **Hover / Focus:** Translate two pixels, invert or shift to Evidence Red, and retain a visible 3px focus outline.
- **Secondary:** Transparent with a full ink border.

### Cards / Containers
- **Corner Style:** Near-square (2px).
- **Background:** Mineral Paper, white, cobalt, or ink.
- **Shadow Strategy:** None at rest.
- **Border:** Full 1px ink rule.
- **Internal Padding:** Fluid from 24px to 48px.

### Navigation
- **Style:** Compact wordmark, three anchor links, and one persistent call CTA. Mobile treatment keeps the CTA visible and collapses secondary anchors.

### Evidence Ledger
- A responsive tabular proof component with one dominant result, exact context, and short intervention statement. It replaces generic case-study cards.

## 6. Do's and Don'ts

### Do:
- **Do** lead with verified commercial evidence.
- **Do** use Sovereign Cobalt for large committed surfaces.
- **Do** reserve Evidence Red for decisive facts and booking actions.
- **Do** preserve keyboard access, focus visibility, and reduced-motion behavior.

### Don't:
- **Don't** reproduce generic AI-tool landing pages.
- **Don't** use hacker-terminal cosplay or neon-on-black cyberpunk.
- **Don't** use decorative glassmorphism, gradient text, or agency card grids.
- **Don't** publish unsupported performance claims or inflated corporate language.
