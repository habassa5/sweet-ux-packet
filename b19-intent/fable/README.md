# B19 intent · Fable read of Salim's picks

Live page: https://habassa5.github.io/sweet-ux-packet/b19-intent/fable/

Independent UI/UX gauntlet, 2026-09-16, before look implements the B19 picks. Input: Salim's FormSubmit `1a0ab588bfab25aa` (`/tmp/UX_DECISION_B19_SYNTH.json`), the B19 feedback packet, the synth pool, the Muse first-launch screenshot, and the look source at `31b2548` read from the catalog clone. Astra's lane was not read. Nothing here edits SweetApp.

The page draws every intended screen as a 402×874 phone in the card language that shipped in TestFlight 19 and 20: tinted tiles with the band word on the tile, dot-and-word chips on rows, the 48-point locked bar, the 35-point title with its Georgia second line. The board's white tiles with pill chips are gone.

## How each pick is read

| Pick | Salim's letter | Read as | Verdict |
|---|---|---|---|
| Cards steer | prior-build cards, band words, one language | Keep the shipped VG tile (23 pt radius, symbol, name, band word, value) and Skin tile (21 pt radius, band label, name, finding). Colour in fill and label, never a capsule. VG tiles tint by band tone, not by reading kind (pool A-20). | Ship, with question 6 |
| SK-2 | A | Band word on the tile, no score on the tile. Score one tap in: "62 out of 100. Higher is better." with the band word and the areas. No letter grades. | Ship |
| F-6 | custom | Live Skin shows 4–8 tiles by rule: every Needs care, every Worth attention, Doing well to fill, at least one, cap eight, worst first. "All 15 observations" becomes a card row with the glance strip. Details list shows integers with band words. Saved Skin equals live Skin. | Ship, with question 10 |
| F-7 | B | Skin hues become teal (doing well), caution amber (worth attention), brand magenta (needs care); fills unchanged; applied through the shared band mapping so History, Health, Trends and chips follow. Bristol hues stay inside Gut. | Ship |
| SK-8 | custom | "iOS default" = the Camera app's selfie at 1×: front camera at its own zoom, aspect-fit with dark bands, no fill crop, no lens zoom. Preview, review and kept still are one frame, mirrored the same way (SK-7). One geometry for Skin and Vital Glimpse; only chrome differs. Oval sized to a face at about a foot. Crop measured against the Camera app on device and reported; SDK face-size verdict checked. | Ship, with question 8 |
| TR-3 | B | "BMI 24.3", one decimal, no unit anywhere; explanation in words. Shipped Trends card and detail page. | Ship |
| AS-3 | C | Local opener instantly, model second line after it with a cut-off, context prefetched at open, no consent block in Ask. | Ship |
| consent_global | steer | One first-launch screen in the Muse shape replaces Orientation. It retires the Skin/Gut capture card (F02 C), the first-result card and Ask's "Agree and continue". Legal lives in About and the privacy policy. | Ship, with questions 4 and 5 |
| HL-4 | A | Floor only: shipped Health cards with chips in the shared hues; no sparklines, no range tracks; honest empty state. | Ship, with question 7 |
| F-8 | custom | Profile (Settings → today's "Account & details") is the one editor for height and weight; Settings keeps Units and a pointer row; Apple Health prefill lands in Profile and stays editable; one conversion rule. | Ship, with question 9 |
| HL-3 | B | As shipped: brand magenta outline, last on the page, copy beneath. | Ship |
| AS-5/6/7 | B+C | Worker default moves to the Claude model Salim names at medium effort. TestFlight-only Developer screen: model from the Worker's allowlist, reasoning, Fast only where the model has it, build default read-only, last-answer timing. Gate: StoreKit 2 AppTransaction environment (sandbox = TestFlight) with the receipt-name fallback, plus a developer key injected only into TestFlight archives; the Worker honours overrides only with that key. Build default via `SWEET_ASK_DEFAULT_MODEL` in the xcconfig. Hidden door: five taps on the About version line. | Still needs Salim (questions 1–3) |
| Saved Gut | B, custom wording | Gut result unchanged; a 12-point right-justified "Learn about each type" under the strip on saved and live; the seven types page gets its three group headings. | Ship, with question 10 |
| Home demos | A, custom | Demos stay on Home as a fourth row in the check-row anatomy; "Getting to know your usual" becomes a progress card; demos are journeys that render the same result screen with sample data, titled "Metabolic (demo)", one eyebrow, no disclosure or terminal pages, never saved. | Ship, with question 10 |

## Still needs Salim

1. AS-5: "Claude Sonnet 5 at Medium and Fast" cannot be configured. Fast mode exists only for Claude Opus 5 and Opus 4.8 on the Claude API; neither Sonnet 5 nor Opus 5 has priority tier. Sonnet 5 at medium, standard speed, or Opus 5 at medium with Fast at its premium price? Recommendation: start on Sonnet 5 medium and time it on the Developer screen.
2. AS-5: five taps on the About version line as the hidden door. Recommendation: yes.
3. AS-5: any TestFlight tester who knows the gesture can switch models on their own phone. Acceptable, or add a passcode? Recommendation: acceptable for now; the Worker still refuses anything off its allowlist.
4. Consent: the first-launch screen retires the Skin/Gut "OK, take my selfie" card locked as F02 C two days ago. Intended? Recommendation: yes, on the newer note.
5. Consent: "By continuing, you agree" above one Get started button, no checkbox. Recommendation: yes, the Muse pattern.
6. Cards: Vital Glimpse tiles tint by band tone instead of by kind. It changes a praised screen. Recommendation: yes; it is the only way mint means one thing everywhere.
7. HL-4: the Health HRV hero card takes the same tone tint instead of lilac. Recommendation: yes; a one-line revert otherwise.
8. SK-8: "iOS default" means the Camera app's selfie at 1×, not the wider expanded selfie. Recommendation: yes; look measures the crop on the device.
9. F-8: rename the row and screen from "Account & details" to "Profile". Recommendation: yes.
10. Three assumed defaults: numbers only on the All observations list; "Learn about each type" on live Gut as well as saved; demo results never saved to History.

## Verdicts

Agree to ship if look implements this page: SK-2 A, F-6, F-7 B, SK-8, TR-3 B, AS-3 C, consent_global, HL-4 A, F-8, HL-3 B, Saved Gut B, Home demos A.

Still needs founder: AS-5 B+C. The Developer screen, the TestFlight gate, the Worker override contract and the build-time default ship as drawn; the model choice waits on question 1.

## Not on this page

The 32 AGREE_TO_SHIP items both catalogs endorsed are on PR 192 and were not re-litigated. F01 A stays locked. TF-VG-2 for the record: completion oval signal blue `#456687`, 7-point arc on a 2-point guide.

## Files

- `index.html`: the page. Self-contained, no scripts, no external assets. Phones are HTML and CSS at 402×874.
- `README.md`: this summary.
