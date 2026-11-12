# Growth Ecommerce Store Global — Admin Dashboard

A responsive ecommerce administration dashboard built using **React, Vite, JavaScript, and CSS**.

The dashboard provides an Overview screen for viewing sales statistics, monitoring transaction activity, and filtering transactions by customer name, order ID, or payment status.

This project was developed as a frontend implementation assignment for **Growth Ecommerce Store Global**.

**Job ID:** `1S8e1o2e284Ah70FxeUY`

## 1. Project Overview

The application provides a clean, responsive interface for internal ecommerce administration.

It uses 24 prepared sample transaction records from a local JSON file. No live customer information, backend API, database, authentication, or payment processing is included.

The application is structured so that the data service can be updated for future API integration.

## 2. Technologies Used

- React — Functional components and hooks
- Vite — Development server and production build
- JavaScript — Filtering, sorting, and calculations
- CSS3 — Responsive layouts and styling
- HTML5 — Semantic and accessible page structure
- Git & GitHub — Source code version control
- Vercel — Frontend deployment

## 3. Features

### Responsive Dashboard

- Professional navy, blue, and white interface
- Sidebar with Overview navigation
- Header with workspace information
- Responsive desktop, tablet, and mobile layouts
- Mobile sidebar with a navigation toggle
- Horizontally scrollable transaction table on smaller screens

### Sales Statistics

Four statistics are calculated dynamically from the currently filtered transaction records:

1. **Paid Revenue:** Sum of amounts for transactions with Paid status.
2. **Transactions:** Total number of matching records.
3. **Pending Transactions:** Number of transactions with Pending status.
4. **Refunded Amount:** Total amount of Refunded transactions, displayed as a positive informational value.

Amounts are formatted in Indian Rupees (INR) with two decimal places.

### Search and Filtering

- Search by order ID or customer name
- Partial and case-insensitive matching
- Leading and trailing whitespace ignored
- Filter by Paid, Pending, Refunded, or Cancelled status
- Combine search and status filters using AND logic
- Reset filters to restore all transactions
- Automatically update statistics and table records without reloading

### Transaction Table

Displays:

- Order ID
- Customer name
- Transaction date
- Product category
- Transaction amount
- Payment status

Records are sorted by transaction date in descending order, followed by order ID in ascending order for matching dates.

The table also includes an informative empty state when no records match.

## 4. Project Structure

```text
growth-ecommerce-dashboard/
├── public/
├── src/
│   ├── components/
│   │   ├── DashboardShell.jsx
│   │   ├── Sidebar.jsx
│   │   ├── Header.jsx
│   │   ├── StatCard.jsx
│   │   ├── Filters.jsx
│   │   └── TransactionTable.jsx
│   ├── data/
│   │   └── transactions.json
│   ├── services/
│   │   └── transactionService.js
│   ├── utils/
│   │   └── dashboardUtils.js
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── screenshots/
│   ├── dashboard-desktop.png
│   ├── dashboard-table.png
│   ├── dashboard-mobile.jpeg
│   ├── dashboard-mobiletable.jpeg
│   └── dashboard-filtered.jpeg
├── index.html
├── package.json
└── README.md
```

## 5. Installation and Setup

### Prerequisites

Install a compatible Node.js LTS release and npm.

### Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
cd growth-ecommerce-dashboard
```

Replace `YOUR_GITHUB_REPOSITORY_URL` with the actual GitHub repository link.

### Install Dependencies

```bash
npm install
```

### Start the Development Server

```bash
npm run dev
```

Open the local URL displayed in the terminal, normally:

```text
http://localhost:5173/
```

### Create a Production Build

```bash
npm run build
```

The production files are generated in the `dist/` directory.

### Preview the Production Build

```bash
npm run preview
```

## 6. Data Source

The application uses:

```text
src/data/transactions.json
```

The file contains 24 prepared sample records.

Each transaction includes:

| Field | Description |
|---|---|
| id | Unique order identifier |
| customer | Customer name |
| date | Transaction date (YYYY-MM-DD) |
| category | Product category |
| amount | Transaction amount in INR |
| currency | INR |
| status | Paid, Pending, Refunded, or Cancelled |

The original transaction records are not modified during filtering or sorting.

Data loading is handled separately from the dashboard's presentation components.

## 7. Initial Dashboard Statistics

When no filters are applied, the dashboard displays:

| Metric | Value |
|---|---|
| Paid Revenue | ₹4,496.00 |
| Transactions | 24 |
| Pending Transactions | 6 |
| Refunded Amount | ₹4,546.00 |

All statistics are recalculated when filters change.

Refunded Amount is informational and is not deducted from Paid Revenue.

## 8. Filtering Example

**Search input:** `ORD-0012`

**Payment status:** All

Expected results:

| Metric | Result |
|---|---|
| Matching transactions | 1 |
| Paid Revenue | ₹0.00 |
| Pending Transactions | 0 |
| Refunded Amount | ₹0.00 |
| Order ID | ORD-0012 |
| Customer | Ishan Shah |
| Payment status | Cancelled |

Resetting the filters restores all 24 sample records.

## 9. Responsive Design

The dashboard is designed for the following viewport sizes:

| Device | Viewport |
|---|---|
| Mobile | 375 × 812 |
| Tablet | 768 × 1024 |
| Desktop | 1280 × 800 |

### Responsive Behavior

- Desktop: Fixed-width sidebar and four-column statistics layout
- Tablet: Collapsible navigation and two-column statistics layout
- Mobile: Single-column statistics layout and stacked filter controls
- Transaction table: Horizontal scrolling within its own container
- Mobile navigation: Sidebar opens and closes using a button

The interface uses external CSS and avoids inline styling.

## 10. Testing and Verification

### Checks Observed During Development

- [x] Initial transaction count displays 24 records
- [x] Initial statistic values match the supplied sample data
- [x] Exact order-ID search for `ORD-0012` returns one matching transaction
- [x] Statistic cards update for the observed filtered search
- [x] Mobile layout displays stacked statistic cards
- [x] Mobile navigation opens and displays its overlay

### Additional Checks Before Final Submission

- [ ] Confirm partial and mixed-case customer searches with outer whitespace
- [ ] Test each payment status independently
- [ ] Test combined search and status filtering
- [ ] Test search with no matching transactions
- [ ] Test Reset after applying multiple filters
- [ ] Verify all six table columns can be accessed on mobile
- [ ] Confirm final layouts at 375px, 768px, and 1280px
- [ ] Verify keyboard navigation and visible focus indicators
- [ ] Confirm there are no browser console errors
- [ ] Confirm `npm run build` completes successfully
- [ ] Verify the live deployment

These checkboxes should be updated only after the corresponding tests have actually passed.

## 11. Screenshots

Screenshots are provided in the `screenshots/` directory.

- `dashboard-desktop.png` — Desktop dashboard
- `dashboard-table.png` — Transaction table
- `dashboard-mobile.jpeg` — Mobile dashboard
- `dashboard-mobiletable.jpeg` — Mobile transaction table
- `dashboard-filtered.jpeg` — Dashboard with an active search filter

## 12. Deployment

The frontend can be deployed using Vercel.

Recommended Vercel settings:

- Framework preset: Vite
- Build command: `npm run build`
- Output directory: `dist`
- Install command: `npm install`

### Live Demo

Add the deployed application URL here:

`YOUR_VERCEL_DEPLOYMENT_URL`

### GitHub Repository

Add the repository URL here:

`YOUR_GITHUB_REPOSITORY_URL`

## 13. Scope and Limitations

This project implements a single Overview dashboard screen.

The application does not include:

- Authentication
- Checkout
- Database integration
- Live payment processing
- Backend API integration
- Export functionality
- Additional administration screens

All displayed transactions are sample records and should not be interpreted as actual store performance.

## 14. Conclusion

The Growth Ecommerce Store Global dashboard demonstrates a modular React frontend with responsive layouts, reusable components, client-side filtering, dynamically calculated statistics, and transaction visibility.

The implementation focuses on maintainable frontend code and a professional administration interface suitable for future integration with backend services.