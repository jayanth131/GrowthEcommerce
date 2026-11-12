# Growth Ecommerce Store Global — Dashboard Overview

React 19 + Vite 8 single-screen frontend dashboard for **Job 1S8e1o2e284Ah70FxeUY**. All displayed transactions are the 24 **synthetic sample records** supplied in `src/data/transactions.json`; this does **not** represent actual business performance.

## Run locally

Install Node.js **22.12+**, then:

```bash
npm ci
npm run dev
```

Open the URL printed by Vite. To check a production build locally:

```bash
npm run build
npm run preview
```

No environment variables, API credentials, database, authentication or backend are required.

## Features

- Responsive single Overview screen, semantic data table, mobile navigation toggle with `aria-expanded`.
- Search by order ID or customer (case-insensitive, trimmed outer whitespace).
- Status filter (All / Paid / Pending / Refunded / Cancelled) combined with search using AND.
- Reset both filters; instant updates to cards and table; descriptive empty-result message.
- Date descending / order ID ascending for ties, without changing source record order.
- Four filtered-set cards: Paid revenue, number of transactions, Pending count, positive Refunded amount.
- Accessible field labels, keyboard focus, status text in addition to color and horizontally scrollable table region.

## Code organization

`src/components/` contains the layout and reusable view components. `src/utils/dashboard.js` owns filtering, sorting, INR formatting and totals. `src/services/transactions.js` is the existing data-access seam: future backend integration should replace **only its implementation**. All CSS is external in `src/styles.css`.

## Verified in the preparation environment

Using Node.js 22 and assertions evaluated independently against all 24 raw JSON rows:

| Check | Result |
|---|---|
| Initial unfiltered rows | 24 — PASS |
| Initial paid revenue | ₹4,496.00 — PASS |
| Initial pending count | 6 — PASS |
| Initial refunded amount | ₹4,546.00 — PASS |
| Exact `ORD-0001` search | 1 — PASS |
| `   aShA rAo  ` search | 4 — PASS |
| Individual status filters | 6 each — PASS |
| `aShA` AND `Refunded` | 2 — PASS |
| Search with no matches | 0 — PASS |
| Reset-equivalent empty search and All | 24 — PASS |
| Date descending, ID ascending on ties | PASS |
| Source records remain in original order | PASS |

**Not yet verified:** Vite production build, browser-console checks, keyboard interactions in a browser, live deployment and viewport screenshots at 375/768/1280 px. The preparation environment could not complete `npm ci` due to package registry access; please run these checks locally and update this section with actual outcomes before submission. Do not claim screenshots or deployment until they exist.

## Final release checklist

- [ ] Run `npm ci` then `npm run build` successfully.
- [ ] Verify 375, 768 and 1280 px layouts, navigation toggle and table scrolling.
- [ ] Exercise all filter combinations, Reset, loading and empty table in the browser.
- [ ] Check console for errors and capture desktop, mobile and filtered-state screenshots.
- [ ] Publish to an accessible GitHub repository (do not commit `node_modules` or `dist`).
- [ ] Deploy to Vercel/Netlify: Vite build command `npm run build`, output `dist`, and verify final HTTPS URL.
- [ ] Paste genuine GitHub and live URLs in your submission; no URLs are pre-created.

## Publication details

**GitHub:** _add URL after publishing_  
**Live dashboard:** _add HTTPS URL after deployment_

