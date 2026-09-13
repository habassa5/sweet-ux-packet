# Research notes — Sweet UX round 2 (Fable lane)

Evidence classes are kept apart: **Observed** (seen in a primary source or a packet frame), **Inferred** (a reasonable reading of observed material), **Recommended** (a Sweet choice this lane proposes), **Unconfirmed vendor** (a vendor claim found only in marketing or search snippets), **Unknown**. Times are Eastern. Fetched 2026-09-13.

## 1. How Oura and WHOOP say "so what" about HRV

**Oura — HRV Balance.** Observed on the Oura blog and Member Care pages:
- "a rolling average of the past two weeks is compared to your baseline over the past three months". Readiness contributors with "balance" in the name compare "14 days against your three-month average, with data from the past few days being weighted more".
- Three words, not a number: **"Optimal"** = recent trend "on par or better than your average"; **"Good"** = "slightly different from your average"; **"Pay attention"** = "below your average".
- "HRV is a highly personal measure, and your unique nervous system determines your HRV range." No cross-user comparison is made.
- Resting heart rate is worded the same way: the score "may decline if you have an RHR that's 3–5 BPM higher or 10–15 BPM lower than your usual average."
- Trends: daily / weekly / monthly / yearly views; temperature shown as "+/-" deviation from a personal baseline.
- Disclaimer, App Store listing: "not a medical device and is not intended to diagnose, treat, cure, monitor, or prevent medical conditions or illnesses… only designed for general fitness and wellness purposes."

Sources: [What is HRV Balance](https://ouraring.com/blog/hrv-balance/) · [Readiness Contributors](https://support.ouraring.com/hc/en-us/articles/360057791533-Readiness-Contributors) · [Using Trends](https://support.ouraring.com/hc/en-us/articles/360055983614-Using-Trends) · [Oura App Store listing](https://apps.apple.com/us/app/oura/id1043837948).

**WHOOP — Recovery.** Observed on the developer docs; the consumer article returned 403 and its wording is from search snippets only:
- Bands: **Green 67–100 %** "well recovered and primed to perform"; **Yellow 34–66 %** "maintaining and ready to take on moderate amounts of strain"; **Red 0–33 %** "rest is likely what your body needs".
- Personal baseline: "Strain is also specific to your baseline." Search snippets (Unconfirmed vendor wording) describe ~30 days to establish a baseline and RMSSD during deep sleep compared with a recent personal baseline.

Sources: [WHOOP 101, developer docs](https://developer.whoop.com/docs/whoop-101/) · [How does WHOOP Recovery work (403 on fetch)](https://www.whoop.com/us/en/thelocker/how-does-whoop-recovery-work-101/).

**What Sweet takes from this (Recommended).**
- A reading is described against **the person's own usual**, in words, before any number: "Within your usual", "Above your usual", "Below your usual", and before a baseline exists, "Your starting point" / "First reading".
- The usual is built from the person's saved Sweet checks, not from sleep and not from a population. Proposal: the middle range of the last **14 days** of checks, shown only once there are **≥ 7 checks** (Salim's "7/14-day baseline"). The exact statistic (inter-quartile range vs mean ± 1 SD) is a builder decision; both are consistent with Oura's and WHOOP's framing. **Unknown** until tested on real tester data.
- Direction gets a favourable green only where the wellness literature and the two vendors agree it usually is (HRV above usual; stress below usual). Everything else outside the usual is amber "worth noticing", never red. Colour is never the only carrier: the words are always there (DESIGN.md §1.6).
- "About the same" on the compare screen means a difference smaller than one check's own wobble. Shen publishes MAPE 11.0 % for SDNN and 7.3 % for lnRMSSD against ECG (§3); those are the starting figures for that threshold. **Unknown** for heart rate and blood pressure until the vendor's test-retest numbers are in hand.

## 2. What You(th) shows (packet, Observed)

Frames read from `docs/reference/youth-recording-2026-08-21/blueprint/evidence/screens/`:
- **082** General Health: a 0–100 gauge, "90", pill "Strong", "10/31 Biomarkers to improve", a generated paragraph naming weak markers. **126** Home: the same gauge plus "You score 8 points higher than your age group."
- **104** Visible Wellness (skin) and **091** Core Health (heart): a summary paragraph ("Your heart health is generally strong… However, your RMSSD… is currently weak…") then rows of *label + Strong/Weak pill + chevron*. Heart lists both RMSSD and HRV SDNN.
- **084 / 093** Biomarker detail: history chart with H/D/W/M/6M, a green reference band, and three disclosure rows "What it is?", "Why is it important?", "How to interpret the results?".
- **134** Metabolic: "Biomarkers in range (1)", "High Fasting Glucose Index · Strong · Low · Optimal range Low", then a paragraph disclaimer recommending regular check-ups.
- **081** Non-medical disclaimer sheet: "The measured digital biomarkers are not intended for medical use, including self-diagnosis or consultation with a doctor, and are only designed for general fitness and wellness purposes."
- **024 / 025** Face video: white corner brackets, "Recording in progress…", a red heart with live "57 bpm" / "67 bpm", and a percent ring "15 %" → "55 %".
- **028 / 029** Selfie: a green rounded rectangle "Place face inside frame", then a dotted face mesh and "Look at the camera".

**What Sweet takes (Recommended):** the *word before the number* row grammar; the "what it is / why it matters / how to read it" trio as a tap sheet; a live heartbeat during the face scan as a named alternative (3b); explicit completion and reasoned unavailability (already doctrine). **What Sweet refuses:** the 0–100 gauge and any composite ring (DESIGN.md §15), the age-group comparison (§15), person-level "Strong/Weak" verdicts (§1.2), and the Binah-only markers (AGENTS.md). Sweet keeps the packet's one-disclaimer idea but as **one quiet line at the end of a result**, never a sheet the person must dismiss and never on capture.

## 3. Shen (Face) — what supports the coaching and the heartbeat

Observed on developer.shen.ai:
- Preparation: the person should "keep a stable position without talking and changing the facial expression", in good lighting, face in the middle of the screen; "the actual measurement will not start until the user's face is in the correct position". The SDK's own UI shows "face positioning hints"; `showUserInterface: false` lets Sweet draw its own.
- Measurement states: `notStarted`, `waitingForFace`, `runningSignalShort`, `runningSignalGood`, `runningSignalBad`, `runningSignalBadDeviceUnstable`, `finalizing`, `finished`, `failed`.
- Realtime values during a measurement: heart rate over 10 s and 4 s windows, HRV and stress index over a chosen period, **heartbeat intervals** ("start and end locations (in seconds) and the duration between heartbeats"), signal quality 0–1, `getMeasurementProgressPercentage()`.
- `MeasurementResults`: `heart_rate_bpm`, `hrv_sdnn_ms`, `hrv_lnrmssd_ms`, `stress_index`, `parasympathetic_activity`, `breathing_rate_bpm`, `systolic_blood_pressure_mmhg`, `diastolic_blood_pressure_mmhg`, `cardiac_workload_mmhg_per_sec`, `age_years`, `bmi_kg_per_m2`, `bmi_category`, `quality_metrics`, `heartbeats`, `average_signal_quality`.
- HRV blog: SDNN and lnRMSSD from "1-min vPPG signals"; "r = 0.98 for SDNN and r = 0.88 for lnRMSSD"; MAPE 11.0 % / 7.3 %; "Taking the logarithm of HRV indices is a common method to achieve a more normal distribution"; lnRMSSD "is often used to monitor the vagal-related adaptation to physical training and post-training recovery".

Sources: [Measurement preparation](https://developer.shen.ai/video-measurement/preparation) · [Measurement (states, realtime)](https://developer.shen.ai/video-measurement/measurement) · [Results](https://developer.shen.ai/video-measurement/results) · [Estimating HRV from video](https://shen.ai/blog/estimating-hrv-video-ppg).

**Unconfirmed vendor:** the Shen.AI Vitals instructions-for-use PDF was fetched but could not be text-extracted on this VPS (no PDF tooling). A search snippet attributes to it: constant lighting, no chewing, a stable device, and "results taken after a rest period of less than 5 minutes should not be considered… resting". Not used in copy.

**Design consequences (Recommended).**
- The coaching in the mock is exactly what the preparation page supports: "Hold still. No talking. Relax your face. Breathe normally." Two seconds, then gone. Nothing about breathing *rate* is coached, because Sweet measures it.
- The heartbeat graphic is driven by the SDK's heartbeat intervals (a beat per detected beat) and the progress arc by `getMeasurementProgressPercentage()`. The waveform is decorative motion under Reduce Motion rules; under Reduce Motion the heart is static and the arc still moves.
- `runningSignalBad` / `runningSignalBadDeviceUnstable` → amber stroke, coach line, X returns. `waitingForFace` → dashed amber and positioning text. `finalizing` → neutral stroke "Almost done."
- **HRV on screen: rMSSD, not SDNN.** Salim's instruction; also the metric both consumer wearables use. Sweet's domain already has `hrvRMSSD`, `hrvSDNN` and `hrvLnRMSSD` kinds; the vendor's documented field is `hrv_lnrmssd_ms`. rMSSD in ms is `exp(lnRMSSD)` if the field is the natural log of RMSSD in ms. **Unknown / for the builder:** confirm with the vendor whether the field is exactly that (the doc's "rounded to 0.1 ms" is odd for a log value) before deriving. SDNN stays in the saved record and out of the UI.

**Ultra-short HRV, is one minute enough?** Observed in the literature: 1-minute ultra-short recordings gave ICC > 0.8 vs standard 5-minute measures for SDNN, RMSSD and pNN50 in an app validation study; a 2015 review supports ultra-short recordings for time-domain indices with caveats; a 2026 rPPG scoping review says time-domain metrics suit short windows better than LF/HF and that movement, occlusion and changing light degrade HRV more than heart rate. Sweet's framing (personal trend, moments not monitor) fits that evidence; a clinical-range claim would not.

Sources: [PMC7428904](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7428904/) · [PMC4586373](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4586373/) · [PMC13533986](https://pmc.ncbi.nlm.nih.gov/articles/PMC13533986/) · [PMC6953345](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6953345/).

## 4. Perfect Corp (Skin) — what the 1–100 means

Observed in the API documentation (Inputs & Outputs):
- `raw_score`: float 1–100, "A higher score indicates healthier and more aesthetically pleasing skin condition."
- `ui_score`: integer 1–100, described as "primarily as a psychological motivator in beauty assessment"; adjusted upward from raw to give "more favorable results".
- HD concerns: `hd_redness, hd_oiliness, hd_age_spot, hd_radiance, hd_moisture, hd_dark_circle, hd_eye_bag, hd_droopy_upper_eyelid, hd_droopy_lower_eyelid, hd_firmness, hd_texture, hd_acne, hd_pore, hd_wrinkle, hd_tear_trough, hd_skin_type` (matches `PerfectCorpSkinAction` in `SweetPlatform`).
- Zones: pores — forehead, nose, cheek, whole; wrinkles — forehead, glabellar, crowfeet, periocular, nasolabial, marionette, whole; texture and acne — whole.
- `skin_age`: "AI-derived skin age relative to the general population distribution". `all.score`: a general 1–100 metric. `skin_type`: Normal, Oily, Dry, Combination and the "& Redness" variants, with whole / t_zone / u_zone.
- Marketing pages claim "95% test-retest reliability" and "over 70,000 medical-grade images" (Unconfirmed vendor: no study named). One marketing page calls the scale a "0–100 severity scale"; the API document and Sweet's shipped copy ("Higher is better for the concern scores.") say the opposite, and the API document wins.

Sources: [Inputs & Outputs](https://docs.perfectcorp.com/reference/ai_skin_analysis/section/overview/inputs-and-outputs) · [Skin Analysis API product page](https://yce.perfectcorp.com/ai-api/products/skin-analysis-api) · [Perfect Corp blog on raw vs ui score](https://www.perfectcorp.com/business/blog/ai-skincare/skin-analysis-api-claude-mcp-integration).

**Design consequences (Recommended).**
- Sweet shows **raw_score** on tap, never ui_score: the shipped honesty fence against vendor composites stands, and the vendor itself describes ui_score as a motivator.
- Green / amber / red on the first screen are **Sweet-defined presentation bands on the vendor's own scale**, proposed as ≥ 70 "Doing well", 45–69 "Worth attention", < 45 "Needs care". They are not vendor bands and not clinical bands. **Unknown** until calibrated on the two testers' real returns; the ledger carries this as an open decision. Words always accompany the colour.
- Zone scores become the "why" line ("More visible around the nose than elsewhere") because that is what a professional would say; no zone is invented, only the returned ones are described.
- `skin_age` is a population-relative figure. DESIGN.md §15 excludes age-group comparison *visuals*; a quiet sentence ("reads a touch under your age") is shown only when the person's age is known from Apple Health or the profile, otherwise the number alone in the tap sheet. `all.score` is a vendor composite: shown only in the "See all 15 readings" list, labelled as the analysis's overall score.

## 5. What an esthetician says, and what they never say

Observed across esthetician-education sources: the consultation is consult → look under good light → touch (texture, elasticity, moisture) → document → "explain them to the client as part of the consultation" and "involve them in the treatment planning process". Scope: "Estheticians cannot diagnose skin conditions or prescribe any medication"; they refer suspicious lesions, unexplained rashes, persistent or severe breakouts, active infections and anything needing prescription management to a dermatologist. **Inferred** (no source scripted it verbatim): a professional leads with what is working, names two or three priorities rather than fifteen, and frames the rest as maintenance; You(th)'s own summary paragraphs follow the same "generally strong… however…" shape (§2). The Skin result adopts that order: Doing well → Worth attention → Needs care → When to check in.

Sources: [ASCP consultation guide](https://www.ascpskincare.com/updates/blog-posts/estheticians-guide-client-consultation) · [GlossGenius skin analysis](https://glossgenius.com/blog/skin-analysis-esthetician) · [Hale Cosmeceuticals analysis techniques](https://www.halecosmeceuticals.com/blog/the-art-of-mastering-esthetician-skin-analysis-techniques) · [Zocdoc esthetician vs dermatologist](https://www.zocdoc.com/blog/guides/esthetician-vs-dermatologist/) · [Healthline](https://www.healthline.com/health/beauty-skincare/esthetician-vs-dermatologist).

## 6. What is allowed: "when to check in", Botox, dermatologists

Observed (law-firm summaries of FDA's January 2026 revision of the General Wellness guidance):
- A wellness product may include "a notification informing a user that evaluation by a healthcare professional may be helpful when outputs fall outside ranges appropriate for general wellness use", provided it avoids naming diseases or conditions, avoids characterising outputs as "abnormal, pathological, or diagnostic", and excludes clinical thresholds, diagnoses or treatment recommendations.
- Non-invasive estimates such as blood pressure can stay in the wellness category when presented without disease reference; claims of "clinical accuracy" or "medical grade", or prompting "specific clinical action or medical management", move a product toward device status.
- FTC: the FTC Act applies to health-app claims; Botox is a prescription drug, so promoting it is advertising a licensed provider's service and carries substantiation and risk-disclosure duties.

Sources: [Covington summary](https://www.cov.com/en/news-and-insights/insights/2026/01/fda-issues-revised-guidance-on-general-wellness-products) · [Troutman summary](https://www.troutman.com/insights/fdas-2026-guidance-on-general-wellness-devices-policy-for-low-risk-devices/) · [FDA guidance page](https://fda.gov/regulatory-information/search-fda-guidance-documents/general-wellness-policy-low-risk-devices) · [FTC mobile health apps tool](https://www.ftc.gov/business-guidance/resources/mobile-health-apps-interactive-tool) · [Holt Law on Botox advertising](https://djholtlaw.com/compliance-considerations-for-advertising-botox-treatments-navigating-ftc-guidelines-and-avoiding-a-wrinkle-in-your-marketing-strategy/).

**Design consequences (Recommended).** "When to check in" names **who** (a dermatologist; a licensed esthetician or a dermatologist) and **what to bring** (a spot that changes, redness that stays, breakouts that aren't settling, lines and firmness), and never a treatment. Botox is not named anywhere; "talk through options with you" is the ceiling. The Gut clinician section keeps its shipped heading and wording; the Face result keeps risk models as models with no vendor name. This lane is not legal advice; counsel should read the final copy before public release.

## 7. Capture chrome: the X

Observed convention: Instagram's story camera and most full-screen phone cameras put a bare X at top-left; iOS sheets and modals put Close at top-right; iOS puts Back at top-left. Salim asked for the Instagram X. The mock uses top-left, no chrome, and hides it during a good Face measurement (a rule Salim offered as an alternative). A swipe-down gesture still stops. Source quality here is weak (design blogs); the decision rests on Salim's instruction, not on the sources.

## 8. Units

lb and in in the US; the profile already stores feet/inches (`SelfReportDetails`). Shen returns estimated height in cm and weight in kg; the mock displays "5 ft 9 in · 165 lb" and lets BMI follow the same estimates. A units switch lives in Settings with lb·in as the US default.

## 9. Chart method note (History trend)

The trend is a single series (no legend needed), 2 pt line, 10 pt dots with a 2 pt surface ring, hairline gridlines, one end label, the person's usual as a light band, tooltip on tap. The palette validator in the dataviz reference flags teal vs neutral as a categorical pair; that check is scoped to multi-series palettes and does not apply to a single-series chart with a reference band. Status hues (green/amber/red) are reserved for the meaning dots and never used as series colours.
