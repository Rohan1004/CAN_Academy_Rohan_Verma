# How to edit CAN Academy lessons

Each lesson now lives in its own file under **`lessons/`**. You do **not** need to edit `app.js` or `styles.css` to change lesson text.

## Quick start
1. Extract the ZIP. Open the `can-academy` folder in VS Code.
2. Open `lessons/lesson-01.js` (or another lesson).
3. Edit the **text between quotation marks**. Save (Ctrl+S).
4. Open `index.html` in your browser and refresh (Ctrl+R).

## What each field means
- `title`: Lesson name shown on the homepage and lesson page.
- `short`: Short description on the homepage.
- `time`: Estimated duration in minutes (number, no quotes).
- `video`: Video heading. The actual video file is `videos/lesson-1.mp4` for Lesson 1, etc.
- `outcome`: The learning objective.
- `sections`: Written content. Each entry has two strings: `["Section heading", "Section paragraph"]`. You can edit these, remove an entry or add a new entry with the same pattern.
- `activity`: Which interactive activity appears. **Do not change** unless you also update its code in `app.js`.
- `quiz`: Each entry is `["Question", ["Option A", "Option B", "Option C", "Option D"], correctAnswerIndex, "Explanation"]`. Index `0` = A, `1` = B, `2` = C, `3` = D.

## Important editing tips
- The files are JavaScript, with JSON-style content. Keep quotation marks, commas, square brackets and curly braces intact.
- For quotation marks inside a string, use `\"` or rephrase the sentence.
- To insert a new paragraph inside the same section, use `\n\n` inside the quoted text.
- If you add or remove quiz questions, the current passing threshold is still 3 correct answers, and parts of the interface assume four questions. For now, **keep four quiz questions per lesson**.
- Changing the `time` field only changes the displayed estimate; it does not enforce a timer.
- The existing teaching text and questions were AI-generated in the earlier prototype. **Review and replace these with your own authored learning material before assessment**, in line with the module's AI rules.

## Lesson files
- `lesson-01.js` — Introduction
- `lesson-02.js` — Physical layer
- `lesson-03.js` — Frames
- `lesson-04.js` — Arbitration
- `lesson-05.js` — Errors
- `lesson-06.js` — STM32
- `lesson-07.js` — CAN FD
- `lesson-08.js` — Hyperloop

## Video files
Place your videos in the `videos` folder as `lesson-1.mp4` to `lesson-8.mp4`.

## Run
Double-click `index.html`. If local storage is restricted by your browser, open a terminal in the folder and run `python -m http.server 8000`, then visit `http://localhost:8000`.
