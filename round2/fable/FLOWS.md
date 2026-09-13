# Flows — Sweet UX round 2 (Fable lane)

Counting rule: start on Home, warm state (permissions granted, consent already given once). Each intentional tap counts; automatic transitions do not. `[OS]` marks a system prompt on first run only. `→` is a tap unless marked auto. Round-1 counts stand where nothing changed; round 2 adds the compare, trend and settings journeys and pins the capture chrome.

## 1. Home → Face → result (1 tap)

```
[Home A] → Face card
[Face capture]  waitingForFace → runningSignalShort → runningSignalGood → finalizing   (all auto)
[Face result]   summary sentence · 6 tiles · more readings · risk models · Ask · Done + Run again · one line
```

Capture chrome, pinned:
- X top-left, no chrome. Visible in `waitingForFace`, `runningSignalBad`, `runningSignalBadDeviceUnstable`, `failed`. Hidden in `runningSignalGood` and `finalizing`. Swipe down always stops. If Salim prefers always-visible, only the visibility rule changes.
- Coach line sits **above** the oval (top ≈ 96 pt). Text per state: `waitingForFace` → the shipped cue ("Come a little closer." / "Center your face." / "Find more light."); first `runningSignalGood` → "Hold still. No talking. / Relax your face. Breathe normally." for two seconds; `runningSignalBad` → "Hold the phone still."; face lost → "Bring your face back into the oval."; `finalizing` → "Almost done."
- Oval centre y = 345 of 874 (rx 149, ry 194). Outside the oval: blur + 28 % dark scrim.
- Stroke: dashed amber (positioning) → solid teal (ready) → teal progress arc from SDK percent → amber arc holds on bad signal → neutral stroke on finalizing. Never a second ring, never a percent.
- Under the oval from `runningSignalShort` on: a heart that beats per SDK heartbeat interval and a drifting waveform. 3b adds the 10-second heart rate; not recommended.
- No disclaimer on capture.

Result → tile sheet: 1 tap. Sheet: reading, the person's usual as a range shape, "what it is", "so what", one method caption.

Baseline rule (Recommended): tiles switch from "Your starting point / First reading" to "Within / Above / Below your usual" once ≥ 7 checks exist within the last 14 days; the usual is the middle range of those checks and updates with every check.

Failure: `[Capture] → auto → [Camera access is off · Open Settings · X]` or `[Could not finish · cause · Try again · X]`.

## 2. Home → Skin → result (3 taps + one-time consent)

```
[Home A] → Skin card
[Consent, first time only] → I understand  [OS camera]
[Skin capture]  coach on top · guide 85 % wide, high · X top-left · shutter
   → shutter
[Review]  full still · "Clear and in focus?" → Use this photo   (Retake tertiary)
[Sending]  ring · "Looking at your skin…" · X cancels     (auto)
[Skin result]  skin type · Doing well · Worth attention · Needs care · See all 15 · When to check in · Ask · Done + Run again · one line
```

Coach line: static "Fill the shape with your face. / Even light · glasses off · relaxed face". Recommended assist: Apple Vision face rectangle on-device flips the stroke to teal and the line to "Lovely. Hold still and tap." when the face fills ≥ ~80 % of the guide width; it never blocks the shutter and never calls the vendor.

Result → reading sheet: 1 tap. Sheet: number /100, zones, "how to read it" with polarity, "what tends to help", one caption.

## 3. Home → Gut → result (3 taps + one-time consent)

```
[Home A] → Gut card
[Consent, first time only] → I understand  [OS camera]
[Gut capture]  round-1 Fable viewfinder (unchanged this round) → shutter
[Review] → Use this photo
[Sending] (auto)
[Gut result]  Back · Your gut check · hero (tinted surround, brown drawing) · 7 tiles, "You" · Harder ← → Looser · What this means · What may help · When to check in with a clinician · Ask docked · one line
```

Tile tap → that type's description sheet (1 tap). Done is Back.

## 4. History (2 taps to anything)

```
[History]  chips All · Face · Skin · Gut  (hidden until two kinds exist)
   → row → [Saved result: same components, read-only]                     2 taps
   → "Compare your two Face checks" card → [Compare: two columns, a word per pair, Done]   2 taps
   → (≥ 7 checks) row "See your usual" on a saved Face result → [Trend: band · dots · sentence · metric chips]   2 taps
Manage (tertiary) → data controls sheet (delete one · delete all · export)
Empty: "No checks yet." → Take a check
```

The compare card appears only when a kind has ≥ 2 records; the trend entry only at ≥ 7 Face checks in 14 days. Neither ever shows a composite or a verdict.

## 5. Settings (1 tap)

```
[Home] → gear (top-right recommended; top-left mocked) → [Settings sheet]
   Apple Health · Units lb·in / kg·cm · Reminders · Account · Your data · About Sweet
```

Units drive the Face result's height/weight rows and BMI caption and the profile form.

## 6. Shell

Tabs: Home · Health · History. No fourth tab. Health becomes the person's readings and connections (Apple Health status, profile); its old settings rows move to the Settings sheet. Ask remains a row on every result, opening with the pinned composer (round-1 flow, unchanged).

## 7. Result anatomy (one grammar, all three checks)

1. Eyebrow (check name) + title (time) + tertiary Close
2. One sentence that says how it went, in the person's own terms (or the honest first-time sentence)
3. The answer: tiles (Face), groups (Skin), hero + row (Gut)
4. Everything else, grouped the way people think, numbers where they help
5. Models / all readings, named as what they are, no vendor name
6. When to check in (Skin, Gut)
7. Ask row
8. Done + Run again (Gut: Back + Ask dock)
9. One quiet honesty line
