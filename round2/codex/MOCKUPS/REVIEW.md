# Independent review receipt

Fresh read-only Claude review on the separately authenticated VPS seat; native auth and usage were checked before launch. The reviewer inspected the initial gallery based on artifact commit `3df3625` while this round was still being refined. The review below is preserved as received and is **not a claim that its findings remain in the final mocks**.

## Disposition by Codex after review

| Finding | Final disposition |
| --- | --- |
| Home selection | Both independent judgments chose C. The gallery and synthesis now recommend C. |
| Baseline/history inconsistency | Added all 21 morning fixtures, plus the separate evening check, to History. The chart uses the seven latest morning values. Arbitrary selected pairs compute their own interval and difference. |
| History opens today | Fixed with saved-record routing, actual record time/value, and filter-preserving Back. |
| Blood pressure wording | Replaced ambiguous Review reading with Confirm with a cuff, explicitly describing the camera estimate. No inferred abnormal classification. |
| Working glyph / second coach | Neutral three-dot glyph; no bottom scan sentence, ECG animation or partial progress arc. |
| Skin tier inconsistency | Redness fixture now has a lower analysis score than moisture; detail explains that the kind of concern and symptoms matter, rather than a numerical cutoff alone. |
| Drifting camera window | Clip fixed on an outer layer; only the illustrated subject moves or scales. Skin portrait fills more of the guide. |
| Manual resume | Removed. Reposition is a static scenario whose product resume would depend on actual position evidence. |
| Navigation | Removed Back from tab roots and duplicate Home action from completed results; baseline returns to selected comparison; capture exits preserve Home variants. |
| B demo clipping / Settings alignment | Tightened B spacing and normalized Settings row padding. |
| Face tile tints | Retained as concept accents with explicit text; they are not a common numeric severity scale. |
| Height formatting | Kept inches to match Salim’s supplied lb/in binding. |

Final browser evidence and limits: [verification.json](verification.json), [STATUS.md](../STATUS.md).

## Original reviewer response

**Verdict:** I found no blockers. Every surface in the contract is there: Home A/B/C, the three tabs, Settings from both top corners, Face capture/result/HRV detail, Skin capture/result/detail, Gut result, and History select-two → compare. The contract checks pass: lb/in, rMSSD only, no SDNN, no vendor names in `app.js`, one honesty line per result, brown stool, and the clinician section fully visible. The problems are consistency and geometry issues within the prototype.

**Home pick: C (Candy keepsakes), not the lane's A.**
- **C** is the one layout where tinted row surfaces show the whole row is tappable without a chevron. It also carries the most beauty/whimsy while color stays off any CTA, and it fits the viewport exactly (scrollHeight 729 = 729).
- **A** reads as a settings list, and its pink dash before the verb looks like a minus sign (screenshot).
- **B**'s verb capsules look like small buttons competing with the row tap. Its "Explore demos" underline is cut off by the tab bar (screenshot; 744 vs 729 in `verification.json`).

**Should fix**
1. **The synthetic data contradicts itself** (source):
   - The HRV chart (`chart()`, `app.js:25`) plots seven *morning* Face checks, one per day from Sep 7 to Sep 13, and the detail screen says "21 comparable morning checks."
   - History (`records`, `app.js:40`) has only three Face checks. One is an evening check on Sep 10 (HRV 35) that falls on the same day as a chart point of 42.
   - A reviewer following compare → "See your HRV baseline" sees the conflict. Add the matching records to History, or cut the chart back to what History holds.
2. **History Face rows all open today's result** (source, `app.js:41`): `href(type+'-result')` means tapping the Sep 10 or Sep 6 Face row lands on "Today, 9:41 AM." The same happens for Skin and Gut rows.
3. **The Blood pressure tile is the one tile that doesn't lead with meaning** (source + screenshot). "Review reading" hints at a cutoff the mock never defines. It also contradicts the headline "Mostly familiar. One change.", since BP now reads as a second change. Use a personal-baseline phrase like the other five tiles, or explain why BP is flagged.
4. **The working glyph is a pulse trace** (source + screenshot). `.working` uses `icon('heart')`, which is an ECG zigzag (`M3 12h5l2-6 4 12…`). It's the same glyph as the Heart rate tile and the Start button. FLOWS says "not a pulse trace," so the pulsing opacity will read as a measured heartbeat. Use a neutral glyph.
5. **The scan state adds a line below the oval** (screenshot). "Your check is in progress" sits at the bottom next to the top coach. That goes against "one top coach," and FLOWS itself calls text below the oval an eyes-away blocker. Drop it, or rely on the working glyph alone.
6. **The Skin tiers invert the score order** (source, `skinConcerns`):
   - Moisture scores 46 but gets the milder "A little care."
   - Redness scores 52 (less concern, since higher = less) but gets the stronger rose "Keep an eye on it."
   - If the tier comes from content (redness warrants a clinician note) rather than score, say so in detail. Otherwise swap the fixtures.
7. **The face-adjust clear window drifts off the oval** (source; no capture of this screen). `.camera.adjust .portrait{transform:translateX(48px)}` also moves the `clip-path` on `.camera-clear`. The unblurred ellipse ends up about 48 px right of the dashed oval. Move only the drawing, not the clipped layer.

**Polish**
- **Skin clear window sits about 6 px low** (screenshot; source confirms). The clip is rescaled by `scale(1.12)` from origin 37%, so its center lands near y 380 instead of 374. The screenshot shows a blurred band just inside the top of the oval and clear pixels just past the bottom. On Face, the blur layer is scaled 1.06 against 1.0 for the clear layer, which causes a slight mismatch at the oval edge.
- **Face scan arc**: `stroke-dasharray:780 290` draws a frozen ring about 73% complete, which reads as progress with no source. Use a full ring, or a progress value clearly labeled synthetic.
- **Face result tile colors look like status but aren't** (screenshot): mint, lilac and rose are used on "Near your usual," and white on others. Only peach (stress) carries meaning.
- **Navigation shell** (source):
  - Health and History are tab roots but show a Back arrow (`top()`).
  - Health adds its own top-right gear even in the left-Settings variant.
  - The Home tab always goes to `home-a`, so it drops the left variant.
  - Result screens have both Back and Done going to Home.
  - "See your HRV baseline" from compare goes back to face-result, not compare.
- **Settings** (screenshot): "Units" sits about 6 px left of the other rows (it's a `div`, the others are `button`s with default padding). Height as 66 in is correct but unusual; consider showing 5 ft 6 in.
- **Adjust state has a manual "Continue check" button** (source). FLOWS says the product resumes only on a valid provider state, so a manual continue sets the wrong expectation.

**Checked and fine** (source + screenshots):
- **Face capture:** unbordered X; oval at 170–554 above the midline; the clear ellipse matches the oval exactly on Face ready; no capture disclaimer.
- **Gut:** tinted cells with brown stool; "You" label with outline; Harder/Looser; clinician block and Ask button fully above the tabs.
- **History and compare:** third selection is refused with a toast; the mismatch state gives no trend judgment.
- **Placeholder copy:** the HRV sentence is the draft awaiting Ranya's wording, and I didn't count it against the mocks.
