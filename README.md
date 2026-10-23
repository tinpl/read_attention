# Live probe

A browser prototype for finding what changes your thinking **right now**.

It is a discovery instrument, not a validated trainer. It tests whether a visual probe can produce an immediate, noticeable change — and whether that change can be named and compared.

## Run

Open `index.html` for the landing page, or `live-probe.html` to go straight to the prototype. There is no build step, no network access, and no server required.

If your browser blocks local files, serve this folder:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000/`.

The probe uses WebGL. If it cannot start, the prototype shows an error message instead of the 3D scene.

## Language

English is the default. Switch **EN / RU** in the top right. The choice is stored locally and carried into the prototype.

## Controls

| Key | Action |
|---|---|
| `Space` | Probe on / off |
| `1–9` | Form |
| `M` | Motion on / off |
| `[` `]` | Size |
| `S` | Timer start / stop |
| `R` | Reset timer |
| `N` | Focus note |
| `Enter` | Save note (while the note field is focused) |
| `T` | Next text |
| `E` | Export JSON |

Rate the change with **1–5** (Weak to Very strong) next to the note field. The rating clears after each save.

## What the prototype tests

The current question is immediate modulation: does a form, its motion, or its size change how you read **while it is present**? The log records the form, motion, size, text, rating, reading time, and your one-line observation. The summary compares forms, motion versus still, and the "no probe" baseline.

A useful result is not only "this form works" but also "this family of forms works" or "only this one form works". The second is an anchor; the first is closer to a parameter.

Switch texts with `T`, or paste your own via **Custom text**, to see whether an effect survives new material.

## Data

Notes and settings stay in your browser (`localStorage`). Use **Export** to save a JSON file. **Clear** removes the notes and events from the browser.

## Third-party

Bundled Three.js r128, MIT license, copyright Three.js Authors.
