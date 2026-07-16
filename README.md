# Placement Readiness Portal

> **GitHub Description:** A fully transparent, GitHub-driven leaderboard and submission portal for the 25MX Cohort (MCA Department, PSG College of Technology). No database, no logins.
> **GitHub Topics:** `nextjs`, `tailwindcss`, `github-actions`, `education`, `leaderboard`, `markdown-driven`, `placement-readiness`

**25MX Cohort — MCA Department, PSG College of Technology**  
*Placement Rep: Tino Britty J*

A fully transparent, GitHub-driven leaderboard and submission portal. No database, no logins. Everything is driven by PRs and Markdown files.  
> Students fork → work in their own folder → open PR → owner merges → leaderboard updates automatically.

📊 **Live Site:** [class.psgmx.tech](https://class.psgmx.tech/)  
📖 **How to contribute:** [HOW_TO_CONTRIBUTE.md](./HOW_TO_CONTRIBUTE.md)  

> [!WARNING]
> **Strict Rule:** You must ONLY work inside the `activities/` folder. Do not edit, modify, or delete any other files or folders in this repository. Any pull requests that touch other files will be automatically rejected.

---

## Leaderboard (auto-updated after every merge)

<!-- LEADERBOARD:START -->
| Rank | Student | Roll No | Score | Attendance |
|------|---------|---------|-------|-----------|
| 🥇 1 | Tino Britty J | 25mx354 | 60 | 3/3 (100%) |
| 🥈 2 | BARATHVIKRAMAN S K | 25mx103 | 60 | 2/3 (67%) |
| 🥉 3 | Abishek S | 25mx301 | 60 | 2/3 (67%) |
| 4 | Tamilini S | 25mx352 | 55 | 3/3 (100%) |
| 5 | ROHITHMAHESHWARAN K | 25mx342 | 45 | 2/3 (67%) |
| 6 | Shanmugappriya K | 25mx223 | 45 | 2/3 (67%) |
| 7 | Surya Krishna S | 25mx126 | 45 | 2/3 (67%) |
| 8 | Radhu Dharsan K M | 25mx341 | 45 | 2/3 (67%) |
| 9 | STEPHINA SMILY C | 25mx125 | 45 | 2/3 (67%) |
| 10 | Saravanavel P | 25mx220 | 45 | 2/3 (67%) |

**🏆 Top Team:** undefined (avg: 46.7 pts)
**Today's submissions:** 2/123 students submitted on 2026-07-16 · **Last updated:** 2026-07-16
<!-- LEADERBOARD:END -->

---

## Repository Structure

```
placement-readiness/
├── activities/                   ← One folder per day, containing student submissions. YOU ONLY WORK HERE.
├── app/                          ← Next.js 14 App Router routes (deployed to Vercel)
├── components/                   ← React UI components
├── lib/                          ← Data loading logic (data.ts)
├── data/                         ← The single source of truth for the portal
│   ├── roster.json               ← Master student list
│   ├── scoreboard.json           ← All student scores
│   ├── attendance.json           ← Per-day attendance
│   └── teams.json                ← Team roster + rollups
├── scripts/                      ← Node scripts run by GitHub Actions
└── .github/workflows/            ← validate-pr.yml, on-merge.yml
```

---

## Local Development

If you want to run the portal locally:

1. Clone the repository
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Open [http://localhost:3000](http://localhost:3000)

## Quick Links

- 🔴 **Students who haven't submitted today** — check the [live dashboard](https://class.psgmx.tech/)
- 📋 [Full Leaderboard](https://class.psgmx.tech/leaderboard)
- 👥 [Team Standings](https://class.psgmx.tech/teams)
- 📅 [Activity Timeline](https://class.psgmx.tech/activities)
