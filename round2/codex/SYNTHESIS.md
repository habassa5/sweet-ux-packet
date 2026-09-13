# Recommended Sweet UX — round 2

**Choose Home C: Candy keepsakes, with Settings at top-right.** Keep the selected row architecture and let a modest amount of color make the checks feel cared for. The lilac, rose and warm honey rows are three specific invitations; each combines a recognizable original illustration, a check name, a useful reason and a small action phrase. The entire row is tappable. The visual emphasis comes from the row itself rather than a giant teal button or a navigation chevron.

[Open the interactive gallery](MOCKUPS/index.html). The three Home treatments are alternatives for Salim to review, not three proposed brands or a vote-average.

## Why C wins this brief

| Direction | Strongest quality | Tradeoff | Decision |
| --- | --- | --- | --- |
| A — Warm editorial | Lightest chrome; compact and legible; illustrative color stays concentrated | Could still feel too restrained after the explicit request for another beauty/whimsy pass | Useful quiet reference |
| B — Rose note | Most affectionate greeting and expressive typography | Tiny action capsules introduce a second visual hierarchy, and descriptions wrap more | Keep as a warmer alternative |
| C — Candy keepsakes | Color makes each row an invitation; strong contrast, room for the illustrations, clear actions | Uses more colored surface than A | **Recommended** for the September 13 direction |

This choice preserves Sweet’s warm paper and ink. The Living Spiral appears only as the Sweet wordmark’s small brand moment. No spiral decorates a check or a result. Gut keeps its selected consistency hierarchy without botanical imagery. Selective bolder typography gives results a clear first read.

## What generalizes across the app

**Care is useful specificity.** Face tells the person where to look. Skin tells them how close to come. Gut explains the current visit before showing a scale. History preserves which check is being compared. A pretty treatment cannot replace any of these jobs.

**Meaning precedes detail.** Face starts with six concepts, not six large numbers. Skin reads like an esthetician’s short highlight and care note, with a clinician check-in only where a persistent concern warrants it. Numbers, method, uncertainty and additional returned fields sit behind an intentional tap. This is progressive disclosure, never permission to drop a licensed vendor field.

**The camera owns the capture screen.** One green oval, one coach line above it, high framing, and an unbordered X. The Face exterior is blurred without modifying the source image. Three quiet working dots communicate activity without acting like a heart trace. Skin’s wider guide answers the close-up requirement visually. No disclaimer competes with capture.

**Honesty is quiet and located.** One wellness line at the end of each result. Simple source/time and actual save-outcome copy are separate useful facts. No vendor names in ordinary UI. No laboratory inference, no invented blood marker, no numerical claim of diagnostic validity.

**Personal means comparable.** HRV uses rMSSD and a personal baseline. The two-check screen keeps timestamps and units attached to readings; a morning/evening mismatch explains the limitation. Overnight wearable data remains a separate series. A single reading and two points are not a trend.

**Navigation gives the person a home.** Home · Health · History. Settings at top-right is recommended because Home’s wordmark can keep its reading position; top-left is supplied as a true alternate. Ask is contextual to the current result, not a fourth tab. Demos remain on Home.

## Surface decisions

| Surface | Final proposed behavior | What to review in the mock |
| --- | --- | --- |
| Home | Whole-row actions with a small explicit verb | A/B/C side by side; all three checks within the first screen |
| Face capture | High green oval, exterior blur, top coach, X | Ready, working and reposition states |
| Face result | Six meaning-first tiles | Main result, individual details, all readings, missing baseline |
| Skin capture | Wider close-up guide, one coach, shutter | Capture, still review, photo-too-small recovery |
| Skin result | Highlight → care priority → concern to watch | Three labeled tints; analysis and adjusted scores in detail |
| Gut result | Short reading → “You” on consistency row → helpful context → clinician → Ask | Stool stays brown; complete clinician block reachable without overlap |
| History | All / Face / Skin / Gut; precise two-Face selection | Filter, selection, matched comparison, different-time comparison, empty state |
| Health | Personal pattern as the main story | One HRV trend, other checks subordinate; no unsupported general score |
| Settings | Same structure from either corner | lb/in, profile preview, labeled preference switches |

## Research-backed boundaries

The detailed Perfect Corp schema describes **1–100**, despite marketing shorthand of 0–100. The analysis score and the more favorable adjusted display score are distinct. This round does not invent cutoffs for green/amber/red; the mock scenarios illustrate a presentation direction that requires validated category rules before implementation.

The Face SDK documentation calls its field **lnRMSSD**. This design’s rMSSD values are independent synthetic fixtures. A native implementation must verify its definition and conversion instead of changing a label. The proposed baseline is also a fixture, not an implemented algorithm.

Ranya’s exact HRV sentence was not found in the supplied brief, repository references or the available older founder-feedback PDF. The sentence in the mock remains a clearly recorded draft: “HRV is personal. Compare it with your own usual range over time.” It is not attributed to her as a quote. No wait for Ranya is imposed on this round.

## What this delivery proves

The gallery supplies independently authored HTML layouts and executable local interactions at 402×874, plus captured browser evidence. It demonstrates the proposed structure, content hierarchy, geometry and selected click paths. Original SVG portraits deliberately stand in for a camera; no photorealistic people or copied competitor artwork enter the design assets.

It does not prove native iOS behavior, SDK quality, clinical interpretation, camera coverage, entitlement, on-device persistence, accessibility compliance or shipping readiness. Those are implementation and device-validation tasks, outside this docs-only branch. No product Swift or PR is included.
