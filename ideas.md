# Design Direction — Sankar Prasath S Portfolio

## Three stylistic approaches considered

| Theme Name | Very Brief Intro | Probability |
| --- | --- | --- |
| **Printed Circuit** | A warm, tactile editorial portfolio that treats engineering work as a considered printed artifact. Fine gridlines, offset compositions, and restrained metallic details provide technical confidence without visual noise. | 0.06 |
| **Museum of Making** | A gallery-like approach that frames student work and learning as evolving exhibits, using dark rooms, pale plinths, and quiet captions. It would emphasize materiality and discovery. | 0.03 |
| **Signal Archive** | An archival technical-journal aesthetic driven by numbered sections, margin notes, precise rules, and a restrained utilitarian rhythm. It would foreground process and intellectual curiosity. | 0.08 |

## Chosen approach — Printed Circuit

### Design Movement

**Contemporary editorial modernism**, borrowing the measured hierarchy of premium print magazines and the precise geometry of technical drawing.

### Core Principles

1. **Typography carries the identity.** Generous Playfair Display statements meet compact Inter metadata to make information feel authored, not templated.
2. **Asymmetry establishes intention.** Content leans across a 12-column rhythm, leaving deliberate negative space rather than defaulting to centered blocks.
3. **Technical details remain quiet.** Fine rules, grid lines, section numerals, and vertical labels signal engineering without resorting to literal UI or sci-fi effects.
4. **Learning is presented honestly.** Projects and achievements retain clearly labelled editable states rather than fabricated claims.

### Color Philosophy

Warm alabaster is the paper stock, preventing the portfolio from feeling clinical. Rich charcoal gives headings and dark passages an archival weight, while pale taupe creates gentle separation. Metallic gold is reserved for active moments, italic emphasis, and one visual circuit path: a signal of curiosity and forward motion rather than decoration.

### Layout Paradigm

The page is a **living technical folio**. Sections use a wide editorial canvas with off-axis content pairings, long inset rules, 7/5 and 5/7 column relationships, and occasional full-bleed charcoal interruptions. Fixed architectural lines anchor the page while content shifts its alignment from section to section.

### Signature Elements

1. Four almost-invisible vertical structural lines on desktop, echoing a printed engineering grid.
2. Slim vertical folio labels and numbered section markers in margin-like positions.
3. A gold “signal trace” that appears in button sweeps, active indicators, and sparse divider details.

### Interaction Philosophy

Interaction should feel like turning pages in a well-made folio: deliberate, low-noise, and predictable. Hover states reveal layers rather than demand attention. The navigation follows the reader, while editable portfolio areas disclose their future purpose with clarity.

### Animation

Sections enter with a restrained fade and 14px upward motion over 700–900ms using `cubic-bezier(0.25, 0.46, 0.45, 0.94)`. Portrait and project imagery transition from grayscale to colour and scale subtly over 1.7 seconds. Text and button colour changes move over 500–700ms; no bounce, parallax, or flashing effects are permitted. Reduced-motion preference removes nonessential transforms.

### Typography System

**Playfair Display** is the display face, used in high-contrast headlines at a tight line-height, including selective italic gold emphasis. **Inter** is used at functional weights for navigation, metadata, labels, forms, and body copy. Uppercase UI language uses generous tracking; long-form reading stays comfortably spaced and unforced.

### Brand Essence

**An evolving engineering portfolio for a curious EEE student turning ideas into meaningful technology.**

Personality: **considered, curious, precise**.

### Brand Voice

Headlines are declarative and aspirational without inflated claims. CTAs are short, direct, and specific; microcopy acknowledges work in progress candidly.

> “Learning today. Building tomorrow.”

> “See the ideas taking shape.”

### Wordmark & Logo

The wordmark is set in tracked Inter uppercase, separated by a fine signal rule. The accompanying mark is a compact, abstract SP circuit trace: a geometric symbol with one gold connection point that holds its own at small and large sizes.

### Signature Brand Color

**Signal Gold — `#D4AF37`**. Used with discipline as the unmistakable sign of attention, motion, and connection.

## Style Decisions

- Signal Gold is reserved for one primary emphasis per section: a key italic word, active indicator, circuit node, or signal trace. It is never used as general decoration.
- The recurring technical signature is a system of connected gold nodes, slim trace rules, section folio labels, and the compact SP circuit mark.
- Visual assets should remain tied to Sankar’s engineering journey: original portraits, notebooks, circuits, workbenches, sketches, project artifacts, and in-progress making moments are preferred as they become available.
- Headline treatment intentionally varies between direct statements, line-broken titles, and selective emphasis so the page keeps an authored editorial rhythm.
- Every major section carries a technical-folio cue beyond typography, such as a field-note label, trace rule, connected node, archival caption, or the SP circuit mark.
- Gold italic emphasis remains concentrated in hero-scale moments; later sections rely more on numerals, trace rules, artifact captions, and asymmetric columns for hierarchy.
- LinkedIn content is framed as a dated engineering field note with project-artifact evidence rather than a simulated social-media feed.
