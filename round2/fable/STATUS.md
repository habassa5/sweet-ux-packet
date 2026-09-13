# Status — Sweet UX round 2 (Fable lane)

Written 2026-09-13, evening Eastern, on acfs-vps (no Xcode, no simulator; HTML rendered with headless Chromium and a fallback typeface).

## Where it is

- Branch: `sweet/ux-round2-fable`, pushed to `origin`. No product PR opened; nothing merged.
- Head with every mockup and document: **`6313ea2`** ("move the trend tooltip off the band label"). This STATUS file lands in the commit after it.
- Base: `a562a82` (main at the time). Docs-only: no Swift, tests, or project files touched. Only `docs/design/ux-round2-fable/**` was written.
- Untracked root briefs (`FABLE_ROUND2_BRIEF.md`, `FABLE_UX_GAUNTLET_BRIEF.md`, `FOUNDERS_HUMAN_UX.md`) were left untracked on purpose.

## What was delivered

| File | Content |
|---|---|
| `MOCKUPS/index.html` | Gallery with PNG previews and links |
| `MOCKUPS/home.html` | Codex IA, three visual directions: A candy cards (recommended), B bloom tiles, C Lens band |
| `MOCKUPS/settings-placement.html` | Gear top-left vs top-right on Home, plus the Settings sheet it opens (Apple Health, lb·in, reminders, account, data, about) |
| `MOCKUPS/face-capture.html` | Six states: positioning, ready, measuring (heart + wave), measuring with live bpm (alternative), signal dropped, finishing, camera denied; X visibility rule |
| `MOCKUPS/face-result.html` | A six tiles with meaning + caption numbers (recommended), B first check (four tiles, tap-to-see), C the HRV "why you got this" sheet |
| `MOCKUPS/skin-capture.html` | Far, filled, review, sending; one coach line; 85 %-wide guide sitting high; Instagram X |
| `MOCKUPS/skin-result.html` | A highlights and lowlights (recommended), B glance bar + dots, C the reading sheet with zones |
| `MOCKUPS/gut-result.html` | Codex layout + Fable tints, borderless, brown drawings; Type 4 and Type 6 |
| `MOCKUPS/history.html` | List with filters and meaning rows, compare (two checks), trend (≥ 7 checks), empty |
| `MOCKUPS/sweet2.css`, `render.cjs`, `png/*.png` | Shared grammar, the render script, Linux Chromium previews |
| `RESEARCH.md` | Oura, WHOOP, You(th) packet frames, Shen, Perfect Corp, esthetician practice, FDA 2026 wellness guidance and FTC, capture X, units, chart method — with sources and evidence classes |
| `LEDGER.md` | Per-screen job, five questions, taps, findings, subtractions, verdicts |
| `FLOWS.md` | Journeys with tap counts, capture chrome rules, baseline rule, result anatomy |
| `SYNTHESIS.md` | The one recommended UX with reasons and an eight-row decision table for Salim |

## Screens walked

Home (3 directions + settings L/R + sheet), Face capture (7 frames), Face result (3), Skin capture (4), Skin result (3), Gut result (2), History (4). Every render was opened and inspected; three layout defects were found and fixed before push (tile wording wrapping, the first-check phone hiding its Done, a tooltip covering the band label).

## Remaining gaps (honest list)

1. **No simulator or device evidence.** Everything is HTML at 402×874 with Roboto. SF Pro metrics, Dynamic Type, dark mode, XXL and VoiceOver order are unproven. Dark mode was not rendered this round.
2. **Baseline algorithm unspecified.** "Within / above / below your usual" needs a statistic and a minimum count (proposal: middle range of the last 14 days, ≥ 7 checks) and a "wobble" threshold for "about the same" (proposal: start from Shen's published MAPE for HRV; heart rate and blood pressure test-retest figures are unknown).
3. **rMSSD derivation.** The vendor documents `hrv_lnrmssd_ms`; Sweet's domain has an `hrvRMSSD` kind. Whether rMSSD in ms is exactly `exp(lnRMSSD)` from that field needs vendor confirmation before it is shown as such.
4. **Skin bands are a proposal.** ≥ 70 / 45–69 / < 45 on the vendor's raw 1–100 has not been calibrated on real returns from the two testers.
5. **Skin capture cue assist** depends on a product decision to use Apple's on-device face rectangle; the static coach line is the fallback and is fully mocked.
6. **Shen instructions-for-use PDF** was fetched but could not be read on this VPS (no PDF tooling); its extra advice (rest, no chewing) is unconfirmed and unused. The developer preparation page is the source for the coaching copy.
7. **Esthetician "strengths first" order** is inferred from consultation guidance and the packet's own summaries; no source scripted it verbatim.
8. **"When to check in" copy** follows the 2026 FDA wellness guidance as summarised by two law firms; counsel should read the final copy before public release. Botox is not named anywhere by design.
9. **Not mocked this round:** the Health tab body, the Ask screen, the Gut capture viewfinder (round-1 Fable mock stands), consent sheets, failure states other than camera-denied, and the Bristol type sheet.
10. **Per-check pastel tints, the go coin, the 16–20 pt card radius and the tinted icon tiles are new visual roles** outside the current `SweetPalette.Selected` and DESIGN.md §6; each needs a bounded Bead if adopted. Direction B's gradients are outside §6 entirely.
11. **Codex's round-2 lane was not seen.** Codex's round-1 Home and Gut mockups were read from `origin/sweet/ux-gauntlet-codex` to reproduce the IA Salim picked; that is recorded in LEDGER.md.

## What Salim decides next

The eight rows in `SYNTHESIS.md` (Home look, settings side, X visibility, heartbeat with or without bpm, tile captions vs tap-to-see, Vision assist on Skin capture, Skin first screen, Skin band thresholds). Everything else in the mocks is either his prior decision applied or a recommendation with a named alternative.
