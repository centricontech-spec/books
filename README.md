# MANA GLOBAL website

New website for www.mana-global.com (Robin Terry). Next.js App Router, Tailwind CSS, built as a **static export** for the Crazy Domains cPanel hosting.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # writes the finished site to out/
```

## Put it live

1. In cPanel File Manager, download a backup of `public_html`.
2. Delete the old site files in `public_html` (keep `.well-known/` and `cgi-bin/`).
3. Upload everything **inside** `out/` into `public_html`, including the hidden `.htaccess`.
4. Open https://www.mana-global.com and click through a few countries.

## Where things are

| What | File |
|---|---|
| Prices, order email, Stripe Payment Links | `src/data/shop.ts` |
| Country editions (name, language, flag, manuscript pages) | `src/data/editions.ts` |
| Book covers (black / colour / white per edition) | `public/covers/` |
| Online reader pages (from the Final Manuscript PDF) | `public/reader/page-001.jpg` … `page-313.jpg` |
| Flags | `public/flags/` |
| Author photo and globe | `public/img/` |

### Taking payments

Buy buttons open an order email to robinterry@mana-global.com until a Stripe Payment Link is pasted into `paymentLink` in `src/data/shop.ts`. Create one link per product in the Stripe dashboard, rebuild and re-upload.

### Pages

- `/` home: slogans, countries with flags, author panel
- `/countries/` about MANA GLOBAL and every edition with its flag
- `/books/` all covers; `/books/<edition>/` the 4 books for that edition (black, colour, white soft covers and Global Edition hard cover), plus Video and E-Book
- `/read/<edition>/` read the edition online; `/read/global-edition/` the whole manuscript
- `/videos/`, `/ebook/`, `/profile/`
