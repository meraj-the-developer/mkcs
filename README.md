# M K C S & Co. Angular Website

A premium Angular single-page website for **M K C S & Co., Chartered Accountants**. This upgraded version is designed to feel more impressive than a static HTML brochure: it uses data-driven sections, a refined executive-style visual system, a mobile menu, animated trust strip, premium service cards, partner cards, process section, and a contact form ready for backend integration.

## Run locally

```bash
npm install
npm start
```

Open `http://localhost:4200/`.

## Build for production

```bash
npm run build
```

The production files will be generated in `dist/mkcs-ca-company-website`.

## Main files

- `src/app/app.component.ts` — all website data and form logic
- `src/app/app.component.html` — page layout
- `src/app/app.component.css` — premium responsive styling
- `src/styles.css` — global font import and base styles

## Contact form note

The form currently validates and shows a success message in the browser. For a real website, connect it to one of these:

- a Node/Express API
- Firebase Functions
- EmailJS
- Formspree
- a PHP mail endpoint on your hosting

## Customisation

Most content can be edited in `app.component.ts` arrays: `services`, `partners`, `insights`, `metrics`, and `process`.
