# Round 2 decision ledger

## Authority and scope

WHO: **Salim**. His September 13, 2026 conversation brief and `CODEX_ROUND2_BRIEF.md` are the round's authority. `FOUNDERS_HUMAN_UX.md` supplies the average-human care principle. No wait for Ranya is required. Her bindings in the brief remain binding.

All outputs belong to `docs/design/ux-round2-codex/`. No product Swift, PR, vendor call, key change, or release. Existing unrelated untracked root files are left untouched.

| Decision | Authority | Application |
| --- | --- | --- |
| Codex Home rows; another visual pass | Salim | Three treatments, whole-row tap targets, explicit action verbs, no row chevrons or giant teal buttons |
| Beauty, care, whimsy; clean | Salim | Warm paper, considered check illustrations, selective candy color, one brand spiral |
| Eyes up; one instrument | Salim and founder-human law | Higher green oval; one coach line above; unbordered X; blurred camera outside Face oval |
| Meaning first | Salim | Six Face hero tiles; Skin highlights and care priorities; values in details |
| Gut is a check | Ranya binding | Short interpretation, compact harder-to-looser row, brown stool, tint around, marker “You” |
| Three tabs | Salim | Home · Health · History; contextual Ask; Settings entry shown left and right |
| HRV | Salim and Ranya binding | rMSSD and personal baseline; no visible SDNN |
| Plain honesty | Salim and Ranya binding | One quiet wellness line on results; none on capture; no vendor names in app UI |
| History | Salim | All / Face / Skin / Gut; no Samples filter; explicit selection of two Face checks |
| Units | Ranya binding | lb and in in profile; appropriate vital units in details |

## Evidence discipline

Observed, documented, inferred, recommended, unconfirmed vendor, and unknown are kept distinct. Synthetic mock data never proves an SDK result. No You(th) pixels or branded assets are reused. Gut tints are independently derived from the written instruction; Fable outputs remain unread.

## Round 2 findings and disposition

| ID | Finding / evidence | Action | Disposition |
| --- | --- | --- | --- |
| R2-01 | Home A remains visually quiet; Salim explicitly asked for more care and whimsy | Supply A/B/C; recommend C’s tinted rows for this round | Recommendation, not a founder selection |
| R2-02 | Screenshot showed the scan arc rotated across the face rather than following the oval | Remove the ellipse rotation and use dash offset on the oval path | Fixed; fresh browser capture |
| R2-03 | Settings About glyph had no explicit size and grew into a large graphic | Bound it to the same small icon size as other settings rows | Fixed; fresh browser capture |
| R2-04 | Initial JavaScript helper named `top` collided with the browser global | Scope the prototype in an IIFE | Fixed; zero runtime exceptions in subsequent sweep |
| R2-05 | History rows originally reopened the same current result | Add saved-record detail, preserving date, values, missing fields and the selected filter on Back | Fixed; covered by browser interaction checks |
| R2-06 | History’s same-day entries were authored in nonchronological order | Sort by timestamp within the timeline | Fixed |
| R2-07 | Perfect Corp marketing said 0–100; current detailed schema said 1–100 | Follow specific schema, explain display score separately | Documented; no fabricated thresholds |
| R2-08 | Face output field is lnRMSSD, while the desired human metric is rMSSD | Keep the design fixture independent; document required math/unit verification | Unconfirmed vendor integration; no relabeling |
| R2-09 | Exact Ranya HRV sentence absent from available sources, including the older feedback PDF | Keep an explicitly documented draft; optional wording request sent without pausing work | Copy still unconfirmed |
| R2-10 | Reviewer input is useful only if independent of the prohibited lane | Launch a fresh, read-only Claude review on the already logged-in separate seat; limit input to this round | Review receipt in MOCKUPS/REVIEW.md when complete |

Product-clarity findings, five-question checks, screen jobs and interaction contracts are recorded in [FLOWS.md](FLOWS.md). Research evidence and uncertainty are in [RESEARCH.md](RESEARCH.md). The accountable visual recommendation is in [SYNTHESIS.md](SYNTHESIS.md).

### Independent review follow-through

The fresh separate-seat reviewer found no blocking missing surface and independently preferred Home C. Its seven “should” findings were resolved: coherent baseline fixtures; saved-result identity; clearer pressure wording; neutral working graphic; one visible scan coach; consistent Skin example scores; fixed camera clipping geometry. Follow-through also removed fake partial progress/manual resume, preserved navigation context, aligned Settings rows and fit the Home B demo link. [The full receipt and disposition](MOCKUPS/REVIEW.md) preserve the initial review rather than silently rewriting it as a final-state endorsement.

The color recommendations remain design choices, not validated medical categories. All 21 baseline mornings are now present in the synthetic History, and selecting any two available Face checks uses their actual fixture values.
