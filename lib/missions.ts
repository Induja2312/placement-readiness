/**
 * missions.ts — The single source of truth for all engineering sprint missions.
 *
 * Each mission maps an ISO date to its mission metadata.
 * Used by: activities/page.tsx, activities/[date]/page.tsx,
 *           students/[rollnumber]/page.tsx, app/page.tsx
 *
 * To add/edit a mission: update MISSIONS_DATA below.
 * The rest of the UI updates automatically.
 */

export interface Mission {
  date: string          // ISO date "2026-07-16"
  missionName: string   // "Mission PhonePe"
  company: string       // "PhonePe"
  companyIcon: string   // emoji or short symbol
  skill: string         // "Payment Systems"
  week: 1 | 2 | 3 | 4
  weekTheme: string     // "Consulting & Services"
  title: string         // specific task title for this day
  desc: string          // 1-2 sentence description
  tasks: string[]       // step-by-step objectives
  deliverables: string[]// required files
  optionalDeliverables?: string[] // optional extras
  isSpecial?: boolean   // Friday presentation days
  specialNote?: string  // e.g. "No coding today. Present your best work."
}

// ── Week Themes ────────────────────────────────────────────────────────────────

export const WEEK_THEMES: Record<1 | 2 | 3 | 4, { label: string; companies: string; color: string }> = {
  1: { label: 'Consulting & Services',          companies: 'TCS · Deloitte · Thorogood', color: 'blue' },
  2: { label: 'Data, AI & Analytics',           companies: 'MathCompany · Jungroo AI · Celeredge · Caterpillar', color: 'yellow' },
  3: { label: 'Tech Giants & Security',         companies: 'IBM · Palo Alto Networks · Oracle OFSS', color: 'purple' },
  4: { label: 'FinTech, Product & Enterprise',  companies: 'PhonePe · Societe Generale · Commvault · Bounteous', color: 'green' },
}

// ── Standard Deliverables ─────────────────────────────────────────────────────

const STANDARD_DELIVERABLES = ['README.md', 'reflection.md', 'prompts.md']
const STANDARD_OPTIONAL     = ['screenshots/', 'diagram.png', 'code/', 'research/', 'video.mp4']

// ── Mission Data ───────────────────────────────────────────────────────────────

export const MISSIONS_DATA: Mission[] = [
  // ── Week 1: Consulting & Services ──────────────────────────────────────────
  {
    date: '2026-07-15',
    missionName: 'Foundation Day',
    company: 'Tata Consultancy Services',
    companyIcon: '🏢',
    skill: 'Git & Collaboration',
    week: 1,
    weekTheme: 'Consulting & Services',
    title: 'Claim Your Folder — Git, Forks & First PR',
    desc: 'The goal of this day is purely operational — every student experiences the full Git loop once. Fork → Clone → Commit → Push → PR.',
    tasks: [
      'Fork the main repo via GitHub UI',
      'Clone your fork locally',
      'Create students/YOUR_ROLL/profile.md with your name, GitHub username, and a one-line goal',
      'Commit → push → open PR to main',
    ],
    deliverables: ['students/YOUR_ROLL/profile.md'],
    optionalDeliverables: [],
  },
  {
    date: '2026-07-16',
    missionName: 'Mission TCS',
    company: 'Tata Consultancy Services',
    companyIcon: '💼',
    skill: 'SDLC & Agile Workflows',
    week: 1,
    weekTheme: 'Consulting & Services',
    title: 'Design an Agile Release Plan for a Client Portal',
    desc: 'Map out the software development life cycle (SDLC) for a large-scale enterprise client portal. Emphasize Agile sprint planning.',
    tasks: [
      'Define the epic and break it down into 5 user stories',
      'Write acceptance criteria for the most critical user story',
      'Create a simple flow diagram of the CI/CD release pipeline',
      'Write your README.md with the user stories and Agile notes',
      'Complete reflection.md: what surprised you? What would you ask Claude next?',
      'Log your best prompts in prompts.md',
    ],
    deliverables: STANDARD_DELIVERABLES,
    optionalDeliverables: ['diagram.png'],
  },
  {
    date: '2026-07-17',
    missionName: 'Mission Deloitte USI',
    company: 'Deloitte USI',
    companyIcon: '📊',
    skill: 'Business Requirements',
    week: 1,
    weekTheme: 'Consulting & Services',
    title: 'Write a Business Requirement Document (BRD)',
    desc: 'Act as a Technology Consultant. A client needs a cloud migration strategy. Write the high-level BRD.',
    tasks: [
      'Identify the business goals (why migrate to the cloud?)',
      'List 3 functional and 3 non-functional requirements',
      'Identify potential risks and mitigation strategies',
      'Write the findings in a professional format in your README.md',
    ],
    deliverables: STANDARD_DELIVERABLES,
    optionalDeliverables: ['research/'],
  },
  {
    date: '2026-07-18',
    missionName: 'Mission Deloitte India',
    company: 'Deloitte India',
    companyIcon: '📈',
    skill: 'Process Flow Design',
    week: 1,
    weekTheme: 'Consulting & Services',
    title: 'Map a Corporate Onboarding Process Flow',
    desc: 'Design the automated process flow for onboarding a new employee at a global firm, covering IT, HR, and Security systems.',
    tasks: [
      'Identify the systems involved (e.g., Active Directory, HRMS, ServiceNow)',
      'Draw a swimlane flowchart showing step-by-step onboarding',
      'Identify integration points where APIs will be needed',
      'Document your design choices',
    ],
    deliverables: STANDARD_DELIVERABLES,
    optionalDeliverables: ['diagram.png'],
  },
  {
    date: '2026-07-21',
    missionName: 'Mission Thorogood',
    company: 'Thorogood Associates',
    companyIcon: '🗄️',
    skill: 'Data Warehousing',
    week: 1,
    weekTheme: 'Consulting & Services',
    title: 'Design a Data Warehouse Schema for Retail',
    desc: 'Design a Star Schema (Fact and Dimension tables) for a multi-national retail client to track daily sales.',
    tasks: [
      'Define the Fact Table (e.g., Sales) and its measures',
      'Define at least 4 Dimension Tables (e.g., Time, Store, Product, Customer)',
      'Draw the ER (Entity-Relationship) diagram',
      'Write an example SQL query to find total sales by store for the last quarter',
    ],
    deliverables: STANDARD_DELIVERABLES,
    optionalDeliverables: ['diagram.png', 'research/'],
  },
  {
    date: '2026-07-22',
    missionName: 'Mission Thorogood II',
    company: 'Thorogood Associates',
    companyIcon: '⚡',
    skill: 'SQL Optimization',
    week: 1,
    weekTheme: 'Consulting & Services',
    title: 'Optimize Slow BI Queries',
    desc: 'A Business Intelligence dashboard is timing out. You are given a complex, unoptimized SQL query. Refactor it to run instantly.',
    tasks: [
      'Identify bottlenecks: N+1 queries, full table scans, unnecessary JOINs',
      'Rewrite the query using Common Table Expressions (CTEs) or window functions',
      'Suggest appropriate indexing strategies',
      'Document why the new query is faster',
    ],
    deliverables: STANDARD_DELIVERABLES,
    optionalDeliverables: ['research/'],
    isSpecial: false,
  },

  // ── Week 2: Data, AI & Analytics ───────────────────────────────────────────
  {
    date: '2026-07-23',
    missionName: 'Mission MathCompany',
    company: 'The MathCompany',
    companyIcon: '📐',
    skill: 'Data Pipeline Design',
    week: 2,
    weekTheme: 'Data, AI & Analytics',
    title: 'Design an ETL Pipeline for Marketing Analytics',
    desc: 'Design a data pipeline that ingests ads data from multiple sources, transforms it, and loads it into a data lake.',
    tasks: [
      'Map the Extract, Transform, and Load steps',
      'Choose tools for ingestion, processing (e.g. Spark/Pandas), and storage',
      'Handle data anomalies: missing values and duplicate records',
      'Draw the data flow architecture',
    ],
    deliverables: STANDARD_DELIVERABLES,
    optionalDeliverables: ['diagram.png'],
  },
  {
    date: '2026-07-24',
    missionName: 'Mission MathCompany II',
    company: 'The MathCompany',
    companyIcon: '🖥️',
    skill: 'Dashboard Wireframing',
    week: 2,
    weekTheme: 'Data, AI & Analytics',
    title: 'Wireframe an Executive Analytics Dashboard',
    desc: 'Design the layout and metrics for a real-time executive dashboard tracking supply chain health.',
    tasks: [
      'Identify the top 5 KPIs an executive needs to see',
      'Design the wireframe layout (using Excalidraw, Figma, or similar)',
      'Explain why each metric was chosen and how it would be calculated',
    ],
    deliverables: STANDARD_DELIVERABLES,
    optionalDeliverables: ['screenshots/', 'diagram.png'],
  },
  {
    date: '2026-07-25',
    missionName: 'Mission Jungroo',
    company: 'Jungroo AI labs',
    companyIcon: '🧠',
    skill: 'Prompt Engineering',
    week: 2,
    weekTheme: 'Data, AI & Analytics',
    title: 'Build an Adaptive Learning Chatbot Persona',
    desc: 'Design the system prompt for an AI tutor that adapts its difficulty based on the student\'s answers.',
    tasks: [
      'Write the core system prompt establishing the persona and rules',
      'Design a few-shot prompt example showing how the AI should respond to a wrong answer',
      'Test your prompt and iterate to prevent hallucinations or giving away the answer',
      'Document your prompt engineering strategy',
    ],
    deliverables: STANDARD_DELIVERABLES,
    optionalDeliverables: ['research/'],
  },
  {
    date: '2026-07-28',
    missionName: 'Mission Celeredge',
    company: 'Celeredge Inc',
    companyIcon: '🕸️',
    skill: 'Web Scraping & Data Collection',
    week: 2,
    weekTheme: 'Data, AI & Analytics',
    title: 'Design a Resilient Data Scraping Architecture',
    desc: 'Design a system to scrape pricing data from 50+ competitor websites daily without getting blocked.',
    tasks: [
      'Design the architecture for distributed web scraping',
      'Address challenges: IP blocks, CAPTCHAs, and dynamic DOM changes',
      'Explain how you will store and clean the raw HTML data',
      'Write pseudocode for a basic robust scraping function with retries',
    ],
    deliverables: STANDARD_DELIVERABLES,
    optionalDeliverables: ['code/', 'diagram.png'],
  },
  {
    date: '2026-07-29',
    missionName: 'Mission Caterpillar',
    company: 'Caterpillar Hackathon',
    companyIcon: '🚜',
    skill: 'IoT Data Ingestion',
    week: 2,
    weekTheme: 'Data, AI & Analytics',
    title: 'IoT Sensor Data Streaming for Heavy Machinery',
    desc: 'Design a backend system to process thousands of temperature and pressure telemetry events per second from construction equipment.',
    tasks: [
      'Choose a streaming technology (e.g., Kafka, Kinesis) and justify it',
      'Design the event schema (JSON format) for a sensor reading',
      'Explain how to detect anomalies (e.g., engine overheating) in real-time',
      'Draw the stream processing architecture diagram',
    ],
    deliverables: STANDARD_DELIVERABLES,
    optionalDeliverables: ['diagram.png'],
    isSpecial: false,
  },

  // ── Week 3: Tech Giants & Security ──────────────────────────────────────────
  {
    date: '2026-07-30',
    missionName: 'Mission IBM',
    company: 'IBM',
    companyIcon: '☁️',
    skill: 'Cloud Architecture',
    week: 3,
    weekTheme: 'Tech Giants & Security',
    title: 'Migrate a Legacy Monolith to Microservices',
    desc: 'You have a monolithic banking application. Plan the architectural migration to a microservices model on hybrid cloud.',
    tasks: [
      'Identify 4 core domains to break into separate microservices',
      'Design the communication pattern (sync vs async, API gateway)',
      'Explain the data migration strategy (strangler fig pattern vs big bang)',
      'Draw the before/after architecture diagram',
    ],
    deliverables: STANDARD_DELIVERABLES,
    optionalDeliverables: ['diagram.png'],
  },
  {
    date: '2026-07-31',
    missionName: 'Mission IBM CIO',
    company: 'IBM India CIO',
    companyIcon: '🛠️',
    skill: 'Internal Tooling API',
    week: 3,
    weekTheme: 'Tech Giants & Security',
    title: 'Design an Internal Employee Service API',
    desc: 'Design a RESTful API specification for an internal portal where employees can request software licenses and hardware.',
    tasks: [
      'Define resources: Employee, Request, Asset',
      'Write the endpoints with request/response JSON schemas',
      'Define the RBAC (Role-Based Access Control) strategy for approvals',
      'Document error handling formats',
    ],
    deliverables: STANDARD_DELIVERABLES,
    optionalDeliverables: ['research/'],
  },
  {
    date: '2026-08-01',
    missionName: 'Mission Palo Alto',
    company: 'Palo Alto Networks',
    companyIcon: '🛡️',
    skill: 'Network Security',
    week: 3,
    weekTheme: 'Tech Giants & Security',
    title: 'Design a Zero Trust Network Architecture',
    desc: 'Design a secure corporate network utilizing Zero Trust principles for a remote-first workforce.',
    tasks: [
      'Define how identity and access management (IAM) is enforced',
      'Design network segmentation (VLANs/Subnets) and micro-segmentation',
      'Explain how endpoints (laptops/mobiles) are verified before access',
      'Draw the secure network topology',
    ],
    deliverables: STANDARD_DELIVERABLES,
    optionalDeliverables: ['diagram.png'],
  },
  {
    date: '2026-08-04',
    missionName: 'Mission Palo Alto II',
    company: 'Palo Alto Networks',
    companyIcon: '🚨',
    skill: 'Incident Response',
    week: 3,
    weekTheme: 'Tech Giants & Security',
    title: 'Write a Cybersecurity Incident Response Plan',
    desc: 'A simulated ransomware attack has locked critical databases. Write the step-by-step incident response playbook.',
    tasks: [
      'Define the 6 phases of incident response for this scenario',
      'Determine immediate containment actions',
      'Write the root cause analysis (RCA) template',
      'Define the communication plan to internal stakeholders',
    ],
    deliverables: STANDARD_DELIVERABLES,
    optionalDeliverables: ['research/'],
  },
  {
    date: '2026-08-05',
    missionName: 'Mission Oracle',
    company: 'Oracle OFSS',
    companyIcon: '💽',
    skill: 'Financial DB Systems',
    week: 3,
    weekTheme: 'Tech Giants & Security',
    title: 'Design a High-Availability Ledger Database',
    desc: 'Design the database architecture for a core banking ledger that requires strict ACID compliance and zero downtime.',
    tasks: [
      'Choose the database replication strategy (Active-Active vs Active-Standby)',
      'Explain how to handle distributed transactions (e.g., Two-Phase Commit)',
      'Design the schema to ensure double-entry accounting integrity',
      'Draw the high-availability database cluster architecture',
    ],
    deliverables: STANDARD_DELIVERABLES,
    optionalDeliverables: ['diagram.png'],
  },

  // ── Week 4: FinTech, Product & Enterprise ──────────────────────────────────
  {
    date: '2026-08-06',
    missionName: 'Mission PhonePe',
    company: 'PhonePe',
    companyIcon: '💸',
    skill: 'Payment Gateway Integration',
    week: 4,
    weekTheme: 'FinTech, Product & Enterprise',
    title: 'Design the UPI Payment Flow Architecture',
    desc: 'Map the complete technical flow of a UPI transaction from scanning the QR code to money crediting in the bank.',
    tasks: [
      'Identify the actors: User App, UPI Switch (NPCI), Remitter Bank, Beneficiary Bank',
      'Draw a sequence diagram for a successful payment',
      'Design the failure handling (e.g., pending states, auto-reversals)',
      'Document API idempotency best practices',
    ],
    deliverables: STANDARD_DELIVERABLES,
    optionalDeliverables: ['diagram.png'],
  },
  {
    date: '2026-08-07',
    missionName: 'Mission PhonePe II',
    company: 'PhonePe',
    companyIcon: '🚀',
    skill: 'System Scalability',
    week: 4,
    weekTheme: 'FinTech, Product & Enterprise',
    title: 'Scale for the Big Billion Days Sale',
    desc: 'Your payment system usually handles 1,000 TPS. Design the scaling strategy to handle a flash sale peaking at 50,000 TPS.',
    tasks: [
      'Identify the system bottlenecks (DB locks, API limits)',
      'Implement load balancing and auto-scaling strategies',
      'Design a queuing mechanism (e.g., Kafka) to buffer non-critical tasks (like sending SMS receipts)',
      'Draw the scaled architecture diagram',
    ],
    deliverables: STANDARD_DELIVERABLES,
    optionalDeliverables: ['diagram.png'],
  },
  {
    date: '2026-08-08',
    missionName: 'Mission Societe Generale',
    company: 'Societe Generale',
    companyIcon: '🏦',
    skill: 'Secure Authentication',
    week: 4,
    weekTheme: 'FinTech, Product & Enterprise',
    title: 'Implement OAuth2 and MFA for a Trading App',
    desc: 'Design the authentication flow for an institutional trading platform requiring high security.',
    tasks: [
      'Map the OAuth2 Authorization Code flow',
      'Integrate Multi-Factor Authentication (MFA) via TOTP',
      'Explain token lifecycle (JWT expiration, refresh tokens, revocation)',
      'Draw the sequence diagram for the login process',
    ],
    deliverables: STANDARD_DELIVERABLES,
    optionalDeliverables: ['research/'],
  },
  {
    date: '2026-08-11',
    missionName: 'Mission Commvault',
    company: 'Commvault',
    companyIcon: '💾',
    skill: 'Data Backup Strategies',
    week: 4,
    weekTheme: 'FinTech, Product & Enterprise',
    title: 'Design an Enterprise Backup Architecture',
    desc: 'Design a backup strategy for a company with 10PB of data across cloud VMs and on-premise servers.',
    tasks: [
      'Define the RPO (Recovery Point Objective) and RTO (Recovery Time Objective)',
      'Design the backup tiering (hot, warm, cold storage)',
      'Explain how deduplication and compression will be handled',
      'Draw the storage and backup architecture',
    ],
    deliverables: STANDARD_DELIVERABLES,
    optionalDeliverables: [],
  },
  {
    date: '2026-08-12',
    missionName: 'Mission Commvault II',
    company: 'Commvault',
    companyIcon: '🔄',
    skill: 'Disaster Recovery',
    week: 4,
    weekTheme: 'FinTech, Product & Enterprise',
    title: 'Simulate a Multi-Region Failover',
    desc: 'The primary US-East data center goes completely dark. Write the playbook to failover to Europe-West.',
    tasks: [
      'Define the DNS routing changes required',
      'Explain how database cross-region replication will resume operations',
      'Write the communication template to users about degraded performance',
      'List the steps to failback once US-East is restored',
    ],
    deliverables: STANDARD_DELIVERABLES,
    optionalDeliverables: ['research/'],
  },
  {
    date: '2026-08-13',
    missionName: 'Mission Bounteous',
    company: 'Bounteous x Accolite',
    companyIcon: '🛍️',
    skill: 'UI/UX & Frontend Design',
    week: 4,
    weekTheme: 'FinTech, Product & Enterprise',
    title: 'Audit & Redesign a Checkout Flow',
    desc: 'Analyze a poorly designed e-commerce checkout page and propose a friction-less, optimized UI/UX.',
    tasks: [
      'Identify 3 major friction points in traditional checkout forms',
      'Design a new user flow focusing on conversion rate optimization',
      'Address accessibility (a11y) and mobile responsiveness',
      'Create a simple wireframe or state diagram of the new flow',
    ],
    deliverables: ['README.md', 'reflection.md', 'prompts.md'],
    optionalDeliverables: ['screenshots/'],
  },
  {
    date: '2026-08-14',
    missionName: 'Mission Bounteous II',
    company: 'Bounteous x Accolite',
    companyIcon: '🎤',
    skill: 'Technical Interview Prep',
    week: 4,
    weekTheme: 'FinTech, Product & Enterprise',
    title: 'Mock Technical Interview & Code Review',
    desc: 'Simulate a technical interview setting. Review a provided algorithmic problem and document your thinking process.',
    tasks: [
      'Choose a classic algorithm (e.g., LRU Cache, Two Sum, etc.)',
      'Document your approach, time/space complexity, and edge cases',
      'Write clean, well-commented code (pseudocode or actual code)',
      'Reflect on how you would explain this to an interviewer',
    ],
    deliverables: STANDARD_DELIVERABLES,
    optionalDeliverables: ['code/'],
  },
  {
    date: '2026-08-15',
    missionName: 'Mission Demo Day',
    company: 'Cohort 25MX',
    companyIcon: '🏆',
    skill: 'Presentation & Portfolio',
    week: 4,
    weekTheme: 'FinTech, Product & Enterprise',
    title: 'Demo Day + Engineering Showcase',
    desc: 'The final mission. Present your best work from the sprint. Your portfolio, your best mission, your growth.',
    tasks: [
      'Choose your best mission from the 30-day sprint',
      'Prepare a 5-minute presentation',
      'Present to the cohort: problem, your approach, what you learned',
      'Submit final reflection: what changed in how you think about engineering?',
      'Add a final README.md summarising your entire sprint journey',
    ],
    deliverables: STANDARD_DELIVERABLES,
    optionalDeliverables: ['video.mp4', 'screenshots/'],
    isSpecial: true,
    specialNote: '🏆 Final Mission. Demo Day. Make it count.',
  },
]

// ── Lookup Helpers ─────────────────────────────────────────────────────────────

/** Get mission by ISO date string */
export function getMission(date: string): Mission | undefined {
  return MISSIONS_DATA.find(m => m.date === date)
}

/** Get all missions for a given week */
export function getMissionsByWeek(week: 1 | 2 | 3 | 4): Mission[] {
  return MISSIONS_DATA.filter(m => m.week === week)
}

/** Get today's mission in IST */
export function getTodayMission(): Mission | undefined {
  const istTime = new Date(new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }))
  const yyyy = istTime.getFullYear()
  const mm   = String(istTime.getMonth() + 1).padStart(2, '0')
  const dd   = String(istTime.getDate()).padStart(2, '0')
  const todayISO = `${yyyy}-${mm}-${dd}`
  return getMission(todayISO)
}

/** Get next upcoming mission (first mission after today that has no data yet) */
export function getNextMission(activeDates: string[]): Mission | undefined {
  const activeSet = new Set(activeDates)
  return MISSIONS_DATA.find(m => !activeSet.has(m.date) && m.date > (activeDates[activeDates.length - 1] ?? ''))
}

/** All unique dates in the missions schedule */
export const ALL_MISSION_DATES = MISSIONS_DATA.map(m => m.date)

