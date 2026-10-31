# Phase 1 spike runbook (on your phone)

Goal: prove the core bet. Chrome asks Fillmate for suggestions, Fillmate sees the form's fields,
and tapping the suggestion fills a Google Form's Email field. No backend, no login.

The debug build ships with a fake answer bank (`SpikeSnapshot`: email, full name, phone, current CTC,
expected CTC). It is not in release builds.

## 0. Prerequisites
- Phone: Android 10+ (API 29), Developer options and USB debugging on, Chrome up to date.
- Computer: Android SDK + `adb`, JDK 17, Node 22. `adb devices` must list your phone as `device`.

## 1. Build and install
```bash
cd apps/mobile && npm ci
cd android && ./gradlew :app:installDebug
```
The autofill service does not need Metro, so ignore the app's red screen if it appears. The app
only has to be installed.

If the build fails, paste the first error to Claude and stop; do not continue with a stale APK.

## 2. Enable Fillmate as the autofill service
Fastest (opens the system picker for this package):
```bash
adb shell am start -a android.settings.REQUEST_SET_AUTOFILL_SERVICE -d package:ai.fillmate
```
Tap **OK** on the "Change autofill service?" dialog. Manual path if that fails:
Settings, search "Autofill service" (usually under Passwords & accounts / Passwords, passkeys & accounts),
choose **Fillmate**.

## 3. Chrome setting
Chrome, then three-dot menu, **Settings**, **Autofill services**, choose **Autofill using another service**,
confirm Fillmate is the selected service. Chrome may ask you to restart.

**Record the exact menu names you actually see** (they differ by Chrome version): this is an open item in
`.claude/autofill-service.md` ("Must verify empirically").

## 4. Three forms to open
Use fake data only. Never submit a real application. The dump logs the first 60 characters of each
node's text, which includes whatever you have typed.

1. **Google Form** you create (forms.google.com). Short-answer questions titled exactly:
   `Email`, `Full name`, `Phone`, `Current CTC`, `Expected CTC`. Open the "Send" link on your phone in Chrome.
2. **Greenhouse**: any public job page, e.g. `https://boards.greenhouse.io/<company>/jobs/<id>`, scroll to the application form.
3. **Lever**: any public job, e.g. `https://jobs.lever.co/<company>/<id>/apply`.

Tap into a text field in each form so Chrome asks the service for a fill.

## 5. Capture the structure dump (once per form)
Run this on your computer **before** opening the form, stop it with Ctrl-C after you tapped 2-3 fields.
Change `<site>` to `google-form`, `greenhouse`, `lever`.
```bash
adb logcat -c
adb logcat -v time -s FillmateStructure:D FillmateAutofill:W | tee docs/spikes/assist-structure/<site>.txt
```
The file holds two kinds of lines: the full node tree, and one `field '<label>' via <Extractor> -> <result>`
line per field the parser accepted. A `fill request failed` warning means an exception: keep it, send it.

Quick check that the dump is not empty:
```bash
grep -c "FillmateStructure" docs/spikes/assist-structure/<site>.txt
```

## 6. Proof recording (Google Form only)
Start the phone's screen recorder (or `adb shell screenrecord /sdcard/fillmate-spike.mp4`, max 3 minutes),
then show, in one take:
1. Settings: Fillmate is the selected autofill service.
2. Chrome settings: "Autofill using another service" is on.
3. The Google Form: tap **Email**; the Fillmate suggestion appears (answer plus `Alias: ...` line).
4. Tap the suggestion; the field fills.
5. Repeat for Full name, Phone, Current CTC, Expected CTC.

Pull it with `adb pull /sdcard/fillmate-spike.mp4` and keep it out of git unless it is small.

## 7. What to report back
- Per form: did a suggestion appear, did it fill, which fields did the parser find (`field '...' via ...` lines)?
- Fields you tapped that produced no `field` line (the parser missed them): note their label as shown on screen.
- Exact Chrome menu names and Chrome version.
- Whether suggestions appeared in the dropdown or in the keyboard strip (Gboard).

Commit the three dumps under `docs/spikes/assist-structure/`. Phase 1 is done when the recording shows the
fill and the dumps are committed.
