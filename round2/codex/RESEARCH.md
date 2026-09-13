# Research — independent Sweet UX round 2

Researched September 13, 2026. Human reporting timezone: America/New_York. This is public-document and supplied-packet research; no paid account was opened and no private patient data or vendor service was used. Public pages may change independently of the pinned Sweet integration.

## What changes the design

| Evidence | Finding | Design consequence | Limit |
| --- | --- | --- | --- |
| Observed You(th) packet | Results lead with a general score, then grouped biomarkers and short interpretations; details and Ask are a deeper layer | Six Face concept tiles, Skin highlights, then values and Ask | Borrow product flow, not pixels, logos, illustrations, branded copy or vendor-incompatible markers |
| Documented Oura | HRV is personal; trends show context over time and separate current values from a historical reference | HRV detail shows a personal range; Health leads with a pattern | Oura measures overnight. Its numerical rules and study claims do not transfer to a one-minute camera check |
| Documented WHOOP | Recovery is presented with meaning and color; HRV is rMSSD measured during sleep; trends offer time windows | Use short labels beside color, show comparable dates, avoid universal “good HRV” | No borrowing Recovery cutoffs or asserting wearable-equivalent measurement |
| Documented Perfect Corp | Current skin documentation states 1–100 analysis and adjusted display scores; higher analysis score means less concern | Number appears after meaning; distinguish the two score types | Not a clinical score; no verified green/amber/red thresholds for Sweet |
| Documented Perfect Corp | Face should occupy roughly 60–80% of image width; too-small face has a specific rejection | Wider Skin oval; direct recovery instruction | Viewport fraction is not proof of source-image face coverage or native detector behavior |
| Observed local Sweet contract | Existing still guidance already says to fill most of the width, as advice rather than a pass/fail test | Guide teaches the instruction; no percentage or invented detection feedback | Current native behavior was read, not executed |
| Documented Face SDK | The field is named lnRMSSD in the current official output documentation | Treat rMSSD as a separate synthetic design fixture; require unit/transform verification before binding real data | Relabeling lnRMSSD as rMSSD is not authorized by this mock |

## Sources and bounded conclusions

### R1 — You(th) supplied recording: meaning, then biomarker detail

**Observed:** inspected [result contact sheet](../../reference/youth-recording-2026-08-21/blueprint/evidence/contact-sheets/15_results_1.jpg) and [full-resolution state 092](../../reference/youth-recording-2026-08-21/blueprint/evidence/screens/092_11-38_rmssd-detail.jpg). The latter actually shows an expanded Heart category, despite the filename suggesting a dedicated detail page. The image, not the filename/OCR, is the evidence. State 081 in the contact sheet shows a non-medical disclaimer; state 082 shows a general health score; 083/089/091/103/104 show grouped interpretation and drill-down.

**Recommended:** preserve summary → group → measurement → Ask. Sweet’s six Face tiles reduce the first-screen reading burden; all supporting results remain accessible. Do not repeat You(th)’s judgment of a person or transplant its full biomarker inventory to a different SDK.

The packet’s [UX flows](../../reference/youth-recording-2026-08-21/blueprint/UX_FLOWS.md) and [screen catalog](../../reference/youth-recording-2026-08-21/blueprint/SCREEN_CATALOG.md) are navigation aids, not stronger evidence than captures. Its “History” contact sheet shows medical-history intake rather than a saved-check comparison screen; it was not treated as evidence for the proposed two-check feature.

### R2 — Oura: personal HRV context

[Oura, Heart Rate Variability](https://support.ouraring.com/hc/lv/articles/360025441974-Heart-Rate-Variability), public member documentation, read September 13, 2026.

**Documented:** Oura describes substantial personal variability and recommends comparing current HRV with one’s own history. It measures across five-minute nighttime intervals and summarizes the night.

**Recommended:** “Within your range,” one personal band, and a separate baseline-building state. Keep a short camera session separate from overnight wearable data. Do not transfer Oura’s measurement accuracy or nighttime interpretation to Face capture.

### R3 — Oura: trend navigation

[Oura, Using Trends](https://support.ouraring.com/hc/articles/360055983614-Using-Trends), updated July 14, 2026, read September 13.

**Documented:** daily, weekly, monthly and yearly views expose changes in one metric; graphs distinguish the latest value from a longer-period average. The documentation also describes two-metric overlay in the web product.

**Recommended:** show dates, a current reading and its reference context. Sweet’s compare-two-Face-checks interaction is a new task-specific design, not a claim that Oura offers the exact same interaction. Avoid a two-metric overlay here; comparing the same measurement between two chosen checks is easier to read.

### R4 — WHOOP: rMSSD and consistent measurement conditions

[WHOOP, Heart Rate Variability Insights & Metrics](https://support.whoop.com/s/article/Heart-Rate-Variability-HRV-Insights-WHOOP-Metrics?language=en_US), public support documentation, read September 13, 2026.

**Documented:** WHOOP identifies rMSSD, overnight sampling, and trends rather than isolated values as the useful context.

**Recommended:** rMSSD is the sole ordinary HRV label; personal context replaces a universal score. Compare similar Face sessions. The wearable’s sampling conditions and recovery model are not evidence for the camera measurement.

### R5 — WHOOP: meaning and color

[WHOOP, Recovery](https://support.whoop.com/s/article/WHOOP-Recovery), published September 11, 2025; read September 13, 2026.

**Documented:** its Recovery feature uses green/yellow/red zones with an explanatory state. The score belongs to its own model.

**Recommended:** pair an explicit text state and icon with a subtle color surface. Never reuse Recovery numerical thresholds for Skin, HRV or a Sweet-wide health grade. In these mocks, Skin states are authored examples; there is no implemented score-to-color classifier.

### R6 — WHOOP: time windows for trends

[WHOOP, Viewing Trends](https://support.whoop.com/s/article/Viewing-Trends), public support documentation, read September 13, 2026.

**Documented:** weekly, monthly and six-month views support looking beyond a single day; metric-specific views give additional detail.

**Recommended:** keep History focused on dated checks and Health focused on patterns. On the two-check screen, preserve both timestamps and make incompatible context visible. Two readings alone are not a trend.

### R7 — Perfect Corp: score semantics and capture requirements

[Perfect Corp, AI Skin Analysis — official API overview](https://docs.perfectcorp.com/reference/ai_skin_analysis/section/overview), especially **Inputs & Outputs** and **File Specs & Errors**, read September 13, 2026.

**Documented:** the current detailed schema describes `raw_score` as a floating-point 1–100 value, with higher values representing better condition in that analysis. `ui_score` is a separate integer 1–100 value adjusted for favorable presentation. It also describes overall score, skin age, multiple concern fields and masks. Capture requirements specify approximately 60–80% face width, front-facing pose, even light, visible forehead, and specific too-small/out-of-frame errors.

**Recommended:** show meaning first, then the analysis score, with the adjusted score explained in a disclosure. Retain all returned fields. Make the Skin guide wider; keep technical percentages out of the user’s instructions.

**Unconfirmed vendor:** entitlement, score-to-label cutoffs, region availability, reliability across conditions, and exact response shape of Sweet’s licensed pinned lane were not executed or verified here.

### R8 — Perfect Corp: why “0–100” needed checking

[Perfect Corp, Build a Skincare App Using Claude and YouCam Skin Analysis API](https://www.perfectcorp.com/business/blog/ai-skincare/skin-analysis-api-claude-mcp-integration), read September 13, 2026.

**Documented vendor marketing:** this article describes the scores as 0–100, while the detailed API overview describes 1–100. The mock follows the more specific schema and calls the number a photo-analysis score. Marketing wording is not evidence that zero is a valid returned score for every API version. No dermatologist-verified, diagnostic or validity claim from the article is adopted.

### R9 — Sweet’s actual still-guidance seam

[PerfectCorpSkinStillPolicy.swift](../../../SweetPlatform/Capture/PerfectCorpSkin/PerfectCorpSkinStillPolicy.swift), `PerfectCorpSkinStillGuidance`, read only. It includes frontal face, centered/focused, even light, no obstruction, neutral expression, forehead visibility, width and portrait advice. The source expressly treats guidance as advice rather than a judgment about an existing still.

**Observed:** the wording “Let the face fill most of the width.” already exists. **Recommended:** encode that human instruction in the wider framing guide and a single coach line. Do not pretend this HTML or the current advice enum detects an aligned face.

### R10 — Face SDK output semantics

[Shen, Measurement Results](https://developer.shen.ai/video-measurement/results), official documentation, read September 13, 2026.

**Documented:** output examples include heart rate, `hrvLnrmssdMs`, separate SDNN, stress, parasympathetic activity, breathing, systolic/diastolic pressure, cardiac workload, age, BMI, heartbeats and quality fields.

**Recommended:** no vendor name on the app screen. Do not relabel a logged HRV quantity as ordinary rMSSD milliseconds. Verify the pinned SDK’s mathematical definition and transformation in implementation before using this design. The fixture is synthetic; this round performs no conversion. Hiding SDNN from ordinary presentation does not authorize discarding the licensed raw payload.

### R11 — Short clinician copy

[NHS, Bleeding from the bottom](https://www.nhs.uk/symptoms/bleeding-from-the-bottom-rectal-bleeding/) and [NHS, Stomach ache](https://www.nhs.uk/symptoms/stomach-ache/), read September 13, 2026.

**Documented:** these sources distinguish persistent changes, bleeding, dark/black stool and severe pain that can warrant medical attention. **Recommended:** keep a brief clinician check-in block in the normal Gut result flow, with detail available through Ask. The mock is not a triage engine; it never infers absence of blood or disease from the brown illustration.

## What remains unknown

- Ranya’s exact HRV sentence was not in the supplied brief, readable repository references, or the available older `/tmp/sweet-founder-review/ranya-feedback.pdf` (August 31, two pages). An optional wording request was sent while independent work continued. Draft: “HRV is personal. Compare it with your own usual range over time.” This is not attributed to her as a verbatim quote.
- No human usability study, native camera session, Skin entitlement check, or live provider measurement was run.
- Camera portraits are original SVG illustrations. They prove layout and blur geometry only, not face coverage, lighting, skin analysis, identity or model performance.
- No Fable artifact was read. Gut tints were recreated from Salim’s written request and the existing selected color hierarchy in `DESIGN.md`; pixel equivalence to Fable is not claimed.
