# Joe Mulick — Portfolio

A fast, static portfolio site (no build step, no frameworks) ready for GitHub Pages.

```
portfolio/
├─ index.html        Home: hero, expertise, experience timeline, contact
├─ work.html         Work gallery with channel filters + detail modal
├─ css/styles.css    All styling and the device mockups
├─ js/main.js        Nav, gallery data, filtering, modal
├─ img/              Put real screenshots here (optional)
└─ .nojekyll         Tells GitHub Pages to serve files as-is
```

## Deploy to GitHub Pages

1. Create a new repository on GitHub.
   - For a site at `https://<username>.github.io`, name the repo exactly `<username>.github.io`.
   - For a project site at `https://<username>.github.io/portfolio`, name it anything (e.g. `portfolio`).
2. Upload the **contents of this folder** to the repo root (so `index.html` sits at the top level), then commit.
   - Web upload: repo → **Add file → Upload files** → drag everything in → **Commit**.
   - Or with git:
     ```bash
     git init
     git add .
     git commit -m "Portfolio site"
     git branch -M main
     git remote add origin https://github.com/<username>/<repo>.git
     git push -u origin main
     ```
3. In the repo: **Settings → Pages → Build and deployment**. Set **Source** to *Deploy from a branch*, choose branch `main` and folder `/ (root)`, then **Save**.
4. Wait ~1 minute, then visit the URL Pages shows you.

## Customize

**Copy & content**
- Edit `index.html` for the hero line, expertise, and the experience timeline.
- Edit the `WORK` array near the top of `js/main.js` to change gallery pieces, copy, and the detail-modal fields.

**Swap a mockup for a real screenshot**
In any `WORK` item in `js/main.js`, add an `image` path and it's used automatically instead of the CSS mockup:
```js
{
  id: "welcome",
  channel: "email",
  image: "img/welcome-email.png",   // <-- add this line
  ...
}
```
Put the file in `img/`. Channels: `email`, `sms`, `push`, `landing` (push covers push + in-app).

**Colors & fonts**
All design tokens live at the top of `css/styles.css` under `:root` — brand color, per-channel colors, and the two typefaces (Fraunces + Instrument Sans).

## Notes
- The sample pieces use placeholder branding ("Marlow Goods"). Replace with your real work when ready.
- No external dependencies except Google Fonts, so it loads fast and works offline-ish.
