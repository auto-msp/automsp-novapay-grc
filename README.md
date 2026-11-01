# NovaPay GRC — AutoMSP

A newly implemented fintech audit application with a dedicated **network segmentation** workflow. This is independent original application code, not a clone of Synapse-T.

## Features
- Risk CRUD, owners, deadlines, likelihood × impact scoring and CSV export.
- Control assessments with notes and required evidence links for effective results.
- Evidence metadata and optional binary attachments in browser IndexedDB (10 MB/file).
- Remediation board with actions, due dates, statuses and risk links.
- Network segmentation inventory with typed validated records and calculated outcomes.
- Audit report with browser print / Save PDF, and versioned JSON record backup/import.
- Cross-workspace search, 5×5 risk heatmap, local history and sample reset.
- Responsive, keyboard accessible interface; no external JS or font dependencies.

## Run / deploy
Serve `public/` with any static web server. For example, `python3 -m http.server 8000 --directory public`. Deploy this repository to Vercel; `vercel.json` declares the static output directory. No build, dependencies, credentials or AI Gateway required.

## Data & limitations
This release is a **browser-local demonstration application**. It has no authentication, multi-user shared database, server evidence storage, live integrations, AI assessment, scanner, or tamper-proof audit trail. Different browsers/devices have separate data. Clearing browser storage removes local records and files. Avoid confidential or regulated data in the public demo.

Record JSON export includes evidence metadata **but not attachment bytes**. Import removes old local attachment files and imported metadata is marked without a local file. Download files separately or reattach them after import. This app does not claim HIPAA compliance, PCI certification, or ISO certification.

Risk thresholds: Low 1–5, Medium 6–11, High 12–19, Critical 20–25. Closed and mitigated risks are excluded from active exposure. Effective control coverage = effective / total controls; not a regulatory score.

## Provenance
Scenario inspiration: https://github.com/fga-grc-lab/GRC-Enterprise-Audit-Lab (Felipe González Arcos), inspected at commit `00b36a324d241453f17e30669d394a18b44c6d40`. Scenario descriptions are paraphrased; original documents and diagrams are not redistributed. Records label repository scenarios versus illustrative examples. Framework names identify audit planning themes only; no standards text is reproduced.

## Files
`public/config.js` contains this app's brand, workflow schema and labelled initial data. `public/app.js` contains shared application behavior. `public/styles.css` contains the responsive design. Application state version: 1; storage key: `automsp-grc:novapay:v1`.
