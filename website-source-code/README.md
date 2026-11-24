# CAN Academy

A self-contained, responsive 8-lesson CAN Bus teaching website. No build tools or server required.

## Run
Open `index.html` in a modern browser. Progress is stored in browser localStorage; if local file storage is restricted, use a simple local server (`python -m http.server 8000`) and visit http://localhost:8000.

## Videos
Put your own filmed videos in `videos/` named `lesson-1.mp4` through `lesson-8.mp4`. Until then, lessons show video placeholders; all written content, simulations and quizzes are available.

## Features
- 8 complete lessons, 32 multiple-choice questions, pass threshold 3/4
- Browser-saved progress, mobile-friendly layout
- Interactive ECU message broadcast, CAN_H/CAN_L levels, frame explorer, bitwise arbitration, errors, STM32 checklist, CAN FD comparison, Hyperloop message-priority planner
- No external libraries or tracking

## Educational scope
Interactive activities are simplified teaching models. This course is not a production CAN protocol implementation or safety-certified design guide. Consult ISO 11898, device reference manuals, datasheets and relevant safety standards for real hardware.

## Files
`index.html`, `styles.css`, `app.js`, `videos/`

## Editing lessons
All lesson text and quizzes are in `lessons/lesson-01.js` through `lesson-08.js`. See `EDIT_LESSONS.md` for step-by-step instructions. `app.js` contains website logic and interactive activities.
