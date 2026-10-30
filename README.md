# PoultryOne ERP — Complete Frontend Prototype v0.2

A web-only, frontend demonstration of a poultry integrator ERP. Built with Next.js 14, React, TypeScript, Tailwind CSS, Recharts and Lucide icons.

## Included interfaces

### Overview
- Executive dashboard with financial KPIs, revenue/expense chart, production snapshot, branch performance, approvals and recent transactions
- Branch management

### Integration / farm operations
- Farmer register
- Farms and sheds
- Batch / flock lifecycle register
- Daily production entries

### Inventory
- Feed inventory and stock movement
- Medicine inventory
- Vaccination and veterinary activity

### Accounts
- Chart of accounts
- Vouchers (payment, receipt, journal and contra)
- Ledgers
- Payments and receipts
- Farmer settlements

### Commercial
- Purchase register
- Sales and harvesting

### Insights / administration
- Reports centre
- Approvals
- Audit log
- Settings

## Prototype interactions
- Sidebar navigation and collapse
- Branch selector
- Searchable registers
- Add-entry forms that add temporary rows to the current screen
- Export/print actions
- Responsive desktop, tablet and mobile layout

## Important limitations
- No database or backend
- No real authentication or permissions
- Sample data only; no live company records
- Entries created in forms are temporary and reset on refresh
- Accounting screens are interface demonstrations, not a production double-entry ledger
- Approval, posting, payment, stock and report actions are not connected to real systems

Do not use this prototype for live accounting, statutory reporting or operational decisions.

## Run on Windows

1. Extract this ZIP.
2. Open the extracted project folder — the folder that directly contains `package.json`.
3. In that folder, open PowerShell / VS Code terminal.
4. Run:

```powershell
npm install
npm run dev
```

5. Open `http://localhost:3000`.

**Important:** Run `npm install` only from the folder where `package.json` is visible. If PowerShell says it cannot find `package.json`, use `dir` to check the folder or `Get-ChildItem -Path . -Filter package.json -Recurse` to locate it.

Requires Node.js 18.17 or later.


## Module milestone: Chart of Accounts (hybrid)
- Standard account types: Assets, Liabilities, Equity, Income and Expenses
- Poultry-specific ledgers for feed and medicine inventory, farmer advances, farmer settlements payable, live bird sales, chick cost, feed consumption, veterinary costs and growing charges
- Ledger register with search, account-type and branch-scope filters
- Create-ledger form with unique account-code validation
- Opening balance and debit/credit nature fields
- CSV export of the filtered register
- Sample state only; new ledgers reset on refresh
- Opening balances are illustrative, not a reconciled trial balance

Voucher posting, automatic journal entries, tax logic, financial statements and database persistence are future modules.
