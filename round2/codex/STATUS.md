# Sweet UX round 2 — delivered

Updated September 13, 2026 at 11:58 AM EDT.

**30 interactive review screens, three Home visual directions, and the complete requested docs packet.** Recommended: Home C, Candy keepsakes, with Settings at top-right. No product Swift or product PR.

## Open the work

- [Interactive gallery](MOCKUPS/index.html) — open this local HTML file in a browser; no install, build or network dependency.
- [Recommended Home C](MOCKUPS/screen.html?screen=home-c).
- [Home overview image](MOCKUPS/captures/gallery-home-overview.png).
- [Synthesis](SYNTHESIS.md), [flow contracts](FLOWS.md), [decision ledger](LEDGER.md), [research and sources](RESEARCH.md).

All authored files are under `docs/design/ux-round2-codex/`. Branch: `sweet/ux-round2-codex`. Early scope push: `6c7792b`. First full gallery/research push: `3df3625`. Final gallery, docs and browser-evidence revision: **`9e81feb08c8581883d340117ff86495569aa2c39`**. The subsequent STATUS-only receipt commit is the delivery tip. [Branch on GitHub](https://github.com/total-victory/Sweet/tree/sweet/ux-round2-codex/docs/design/ux-round2-codex).

## Coverage

| Surface | Evidence |
| --- | --- |
| Home | A/B/C, full-row actions, original illustrations, demos on Home |
| Face capture | Ready, neutral working dots, reposition; high green oval; fixed outside blur; unbordered X |
| Face results | Six meaning-first tiles, HRV detail, baseline absent, all readings |
| Skin | Wider capture, still review, meaning-first result, score detail, all observations, rejected-photo recovery |
| Gut | Photo frame, brown-stool result with surrounding tints, You / Harder / Looser, complete clinician block, contextual Ask |
| History | All / Face / Skin / Gut, select two, comparison, different context, empty, saved-record detail |
| Shell | Home · Health · History, Health screen, left and right Settings entry studies, lb/in |

## Verification

- Chromium browser sweep: **30 screens at exactly 402 × 874**; no horizontal overflow, no runtime exceptions, no visible vendor names or SDNN.
- **26 interaction checks passed**, including complete synthetic Face flow, X/retake behavior, all filters, historical result identity, filter-preserving Back, exact two-check selection, third-selection rejection, actual pair arithmetic, comparison return context, Home treatment preservation, Ask, profile preview, fixed capture mask, one scan coach and Reduced Motion.
- Gut clinician block checked fully reachable above navigation; [bottom-position evidence](MOCKUPS/captures/gut-result-bottom.png).
- [Machine-readable report](MOCKUPS/verification.json) and [verification runner](MOCKUPS/verify.mjs). Browser verification time: 9/13/2026, 11:57:55 AM EDT.
- Visual inspection covered all principal surfaces and corrected the scan arc, camera masking, Settings glyph, B demo clipping and result navigation. [Independent reviewer receipt and disposition](MOCKUPS/REVIEW.md).
- Standalone gallery also opened via `file://` to check local, dependency-free loading.
- `node --check` and `git diff --check` passed. Native Swift/macOS tests were not applicable to this documentation-only change.

For repeatable automation, serve `MOCKUPS/` locally on 8042, launch a disposable Chromium CDP endpoint on 9228, then run `node docs/design/ux-round2-codex/MOCKUPS/verify.mjs`. The runner writes only local screenshots and its JSON receipt. Its dedicated ignored browser profile and scratch materials are not part of the pushed artifact.

## Evidence limits and remaining copy

- **Ranya’s exact HRV sentence is still unconfirmed.** It was absent from the supplied brief, readable repository references and the available older founder-feedback PDF. An optional wording request was sent while the work continued. The visible sentence is explicitly tracked as a draft: “HRV is personal. Compare it with your own usual range over time.” No wait for Ranya is required to review these mocks.
- All readings, range bands, Skin states, histories and responses are synthetic. Original SVG portraits stand in for camera imagery. No real-person photo, live provider, clinical-validity, persistence, native accessibility or shipping claim.
- Public Skin documentation specifies 1–100 and separates analysis from adjusted display score. Score-to-color thresholds are not validated here. The Face SDK’s lnRMSSD must not be relabeled as rMSSD; integration requires verified semantics.
- Prohibited `ux-round2-fable` and `ux-gauntlet-fable` outputs were not read. Gut tints were independently recreated from the written request and existing selected hierarchy.

## Agent and Git record

Builder: Codex CLI in the requested isolated clone. Native `codex login status`: ChatGPT login; remaining quota not printed, therefore unknown. One fresh read-only reviewer used the separately logged-in VPS Claude Max seat after native auth and usage checks. Its pre-launch Fable week was 23% used, resetting September 14 at 6:00 PM Eastern. No account switching, GStack orchestration, NTM, Beads, Agent Mail or Founder Console was used.

Changes were staged by explicit path. No `git add -A`, Co-Authored-By trailer, product PR, merge, archive or release. The three pre-existing untracked root brief files were left untouched.
