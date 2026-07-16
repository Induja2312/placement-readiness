/**
 * missions.ts — The single source of truth for all engineering sprint missions.
 *
 * Each mission maps an ISO date to its mission metadata.
 * To add/edit a mission: update MISSIONS_DATA below.
 */

export interface Mission {
  date: string
  missionName: string
  company: string
  companyIcon: string
  skill: string
  week: number
  weekTheme: string
  title: string
  desc: string
  tasks: string[]
  deliverables: string[]
  optionalDeliverables?: string[]
  isSpecial?: boolean
  specialNote?: string
}

export const WEEK_THEMES: Record<number, { label: string; companies: string; color: string }> = {
  1: { label: 'Consulting & Services',          companies: 'TCS · Deloitte', color: 'blue' },
  2: { label: 'Data, AI & Analytics',           companies: 'MathCompany · Jungroo', color: 'yellow' },
  3: { label: 'Tech Giants & Security',         companies: 'IBM · Palo Alto', color: 'purple' },
  4: { label: 'FinTech, Product & Enterprise',  companies: 'PhonePe · Societe Generale', color: 'green' },
  5: { label: 'Advanced Engineering',           companies: 'Commvault · Bounteous', color: 'indigo' },
  6: { label: 'Cloud & Infrastructure',         companies: 'Oracle · AWS', color: 'blue' },
  7: { label: 'System Design',                  companies: 'TCS · IBM', color: 'purple' },
  8: { label: 'Security & Optimization',        companies: 'Palo Alto · PhonePe', color: 'red' },
  9: { label: 'Capstone & Review',              companies: 'All Companies', color: 'green' },
  10: { label: 'Final Demo Week',               companies: 'Cohort 25MX', color: 'yellow' },
}

const STANDARD_DELIVERABLES = ['README.md', 'reflection.md', 'prompts.md']

export const MISSIONS_DATA: Mission[] = [
  {
    "date": "2026-07-16",
    "missionName": "Mission Tata 1",
    "company": "Tata Consultancy Services",
    "companyIcon": "🏢",
    "skill": "Git & Collaboration",
    "week": 1,
    "weekTheme": "Consulting & Services",
    "title": "Claim Your Folder — Git, Forks & First PR",
    "desc": "The goal of this day is purely operational — every student experiences the full Git loop once.",
    "tasks": [
      "Understand the problem statement and design constraints",
      "Design the architecture or write the core logic",
      "Document your findings in README.md",
      "Reflect on your learning"
    ],
    "deliverables": [
      "students/YOUR_ROLL/profile.md"
    ]
  },
  {
    "date": "2026-07-17",
    "missionName": "Mission Deloitte 2",
    "company": "Deloitte USI",
    "companyIcon": "📊",
    "skill": "Core Engineering",
    "week": 1,
    "weekTheme": "Consulting & Services",
    "title": "Technical Challenge - Deloitte USI",
    "desc": "A daily engineering task focusing on Consulting & Services systems.",
    "tasks": [
      "Understand the problem statement and design constraints",
      "Design the architecture or write the core logic",
      "Document your findings in README.md",
      "Reflect on your learning"
    ],
    "deliverables": [
      "README.md",
      "reflection.md",
      "prompts.md"
    ],
    "optionalDeliverables": [
      "diagram.png",
      "code/"
    ]
  },
  {
    "date": "2026-07-20",
    "missionName": "Mission Thorogood 3",
    "company": "Thorogood Associates",
    "companyIcon": "🗄️",
    "skill": "Core Engineering",
    "week": 1,
    "weekTheme": "Data, AI & Analytics",
    "title": "Technical Challenge - Thorogood Associates",
    "desc": "A daily engineering task focusing on Data, AI & Analytics systems.",
    "tasks": [
      "Understand the problem statement and design constraints",
      "Design the architecture or write the core logic",
      "Document your findings in README.md",
      "Reflect on your learning"
    ],
    "deliverables": [
      "README.md",
      "reflection.md",
      "prompts.md"
    ],
    "optionalDeliverables": [
      "diagram.png",
      "code/"
    ]
  },
  {
    "date": "2026-07-21",
    "missionName": "Mission The 4",
    "company": "The MathCompany",
    "companyIcon": "📐",
    "skill": "Core Engineering",
    "week": 1,
    "weekTheme": "Data, AI & Analytics",
    "title": "Technical Challenge - The MathCompany",
    "desc": "A daily engineering task focusing on Data, AI & Analytics systems.",
    "tasks": [
      "Understand the problem statement and design constraints",
      "Design the architecture or write the core logic",
      "Document your findings in README.md",
      "Reflect on your learning"
    ],
    "deliverables": [
      "README.md",
      "reflection.md",
      "prompts.md"
    ],
    "optionalDeliverables": [
      "diagram.png",
      "code/"
    ]
  },
  {
    "date": "2026-07-22",
    "missionName": "Mission Jungroo 5",
    "company": "Jungroo AI labs",
    "companyIcon": "🧠",
    "skill": "Core Engineering",
    "week": 1,
    "weekTheme": "Data, AI & Analytics",
    "title": "Technical Challenge - Jungroo AI labs",
    "desc": "A daily engineering task focusing on Data, AI & Analytics systems.",
    "tasks": [
      "Understand the problem statement and design constraints",
      "Design the architecture or write the core logic",
      "Document your findings in README.md",
      "Reflect on your learning"
    ],
    "deliverables": [
      "README.md",
      "reflection.md",
      "prompts.md"
    ],
    "optionalDeliverables": [
      "diagram.png",
      "code/"
    ]
  },
  {
    "date": "2026-07-23",
    "missionName": "Mission Celeredge 6",
    "company": "Celeredge Inc",
    "companyIcon": "🕸️",
    "skill": "Core Engineering",
    "week": 2,
    "weekTheme": "Data, AI & Analytics",
    "title": "Technical Challenge - Celeredge Inc",
    "desc": "A daily engineering task focusing on Data, AI & Analytics systems.",
    "tasks": [
      "Understand the problem statement and design constraints",
      "Design the architecture or write the core logic",
      "Document your findings in README.md",
      "Reflect on your learning"
    ],
    "deliverables": [
      "README.md",
      "reflection.md",
      "prompts.md"
    ],
    "optionalDeliverables": [
      "diagram.png",
      "code/"
    ]
  },
  {
    "date": "2026-07-24",
    "missionName": "Mission Caterpillar 7",
    "company": "Caterpillar Hackathon",
    "companyIcon": "🚜",
    "skill": "Core Engineering",
    "week": 2,
    "weekTheme": "Data, AI & Analytics",
    "title": "Technical Challenge - Caterpillar Hackathon",
    "desc": "A daily engineering task focusing on Data, AI & Analytics systems.",
    "tasks": [
      "Understand the problem statement and design constraints",
      "Design the architecture or write the core logic",
      "Document your findings in README.md",
      "Reflect on your learning"
    ],
    "deliverables": [
      "README.md",
      "reflection.md",
      "prompts.md"
    ],
    "optionalDeliverables": [
      "diagram.png",
      "code/"
    ]
  },
  {
    "date": "2026-07-27",
    "missionName": "Mission IBM 8",
    "company": "IBM",
    "companyIcon": "☁️",
    "skill": "Core Engineering",
    "week": 2,
    "weekTheme": "Tech Giants & Security",
    "title": "Technical Challenge - IBM",
    "desc": "A daily engineering task focusing on Tech Giants & Security systems.",
    "tasks": [
      "Understand the problem statement and design constraints",
      "Design the architecture or write the core logic",
      "Document your findings in README.md",
      "Reflect on your learning"
    ],
    "deliverables": [
      "README.md",
      "reflection.md",
      "prompts.md"
    ],
    "optionalDeliverables": [
      "diagram.png",
      "code/"
    ]
  },
  {
    "date": "2026-07-28",
    "missionName": "Mission Palo 9",
    "company": "Palo Alto Networks",
    "companyIcon": "🛡️",
    "skill": "Core Engineering",
    "week": 2,
    "weekTheme": "Tech Giants & Security",
    "title": "Technical Challenge - Palo Alto Networks",
    "desc": "A daily engineering task focusing on Tech Giants & Security systems.",
    "tasks": [
      "Understand the problem statement and design constraints",
      "Design the architecture or write the core logic",
      "Document your findings in README.md",
      "Reflect on your learning"
    ],
    "deliverables": [
      "README.md",
      "reflection.md",
      "prompts.md"
    ],
    "optionalDeliverables": [
      "diagram.png",
      "code/"
    ]
  },
  {
    "date": "2026-07-29",
    "missionName": "Mission Oracle 10",
    "company": "Oracle OFSS",
    "companyIcon": "💽",
    "skill": "Core Engineering",
    "week": 2,
    "weekTheme": "Tech Giants & Security",
    "title": "Technical Challenge - Oracle OFSS",
    "desc": "A daily engineering task focusing on Tech Giants & Security systems.",
    "tasks": [
      "Understand the problem statement and design constraints",
      "Design the architecture or write the core logic",
      "Document your findings in README.md",
      "Reflect on your learning"
    ],
    "deliverables": [
      "README.md",
      "reflection.md",
      "prompts.md"
    ],
    "optionalDeliverables": [
      "diagram.png",
      "code/"
    ]
  },
  {
    "date": "2026-07-30",
    "missionName": "Mission PhonePe 11",
    "company": "PhonePe",
    "companyIcon": "💸",
    "skill": "Core Engineering",
    "week": 3,
    "weekTheme": "FinTech, Product & Enterprise",
    "title": "Technical Challenge - PhonePe",
    "desc": "A daily engineering task focusing on FinTech, Product & Enterprise systems.",
    "tasks": [
      "Understand the problem statement and design constraints",
      "Design the architecture or write the core logic",
      "Document your findings in README.md",
      "Reflect on your learning"
    ],
    "deliverables": [
      "README.md",
      "reflection.md",
      "prompts.md"
    ],
    "optionalDeliverables": [
      "diagram.png",
      "code/"
    ]
  },
  {
    "date": "2026-07-31",
    "missionName": "Mission Societe 12",
    "company": "Societe Generale",
    "companyIcon": "🏦",
    "skill": "Core Engineering",
    "week": 3,
    "weekTheme": "FinTech, Product & Enterprise",
    "title": "Technical Challenge - Societe Generale",
    "desc": "A daily engineering task focusing on FinTech, Product & Enterprise systems.",
    "tasks": [
      "Understand the problem statement and design constraints",
      "Design the architecture or write the core logic",
      "Document your findings in README.md",
      "Reflect on your learning"
    ],
    "deliverables": [
      "README.md",
      "reflection.md",
      "prompts.md"
    ],
    "optionalDeliverables": [
      "diagram.png",
      "code/"
    ]
  },
  {
    "date": "2026-08-03",
    "missionName": "Mission Commvault 13",
    "company": "Commvault",
    "companyIcon": "💾",
    "skill": "Core Engineering",
    "week": 3,
    "weekTheme": "FinTech, Product & Enterprise",
    "title": "Technical Challenge - Commvault",
    "desc": "A daily engineering task focusing on FinTech, Product & Enterprise systems.",
    "tasks": [
      "Understand the problem statement and design constraints",
      "Design the architecture or write the core logic",
      "Document your findings in README.md",
      "Reflect on your learning"
    ],
    "deliverables": [
      "README.md",
      "reflection.md",
      "prompts.md"
    ],
    "optionalDeliverables": [
      "diagram.png",
      "code/"
    ]
  },
  {
    "date": "2026-08-04",
    "missionName": "Mission Bounteous 14",
    "company": "Bounteous x Accolite",
    "companyIcon": "🛍️",
    "skill": "Core Engineering",
    "week": 3,
    "weekTheme": "FinTech, Product & Enterprise",
    "title": "Technical Challenge - Bounteous x Accolite",
    "desc": "A daily engineering task focusing on FinTech, Product & Enterprise systems.",
    "tasks": [
      "Understand the problem statement and design constraints",
      "Design the architecture or write the core logic",
      "Document your findings in README.md",
      "Reflect on your learning"
    ],
    "deliverables": [
      "README.md",
      "reflection.md",
      "prompts.md"
    ],
    "optionalDeliverables": [
      "diagram.png",
      "code/"
    ]
  },
  {
    "date": "2026-08-05",
    "missionName": "Mission Tata 15",
    "company": "Tata Consultancy Services",
    "companyIcon": "🏢",
    "skill": "Core Engineering",
    "week": 3,
    "weekTheme": "Consulting & Services",
    "title": "Technical Challenge - Tata Consultancy Services",
    "desc": "A daily engineering task focusing on Consulting & Services systems.",
    "tasks": [
      "Understand the problem statement and design constraints",
      "Design the architecture or write the core logic",
      "Document your findings in README.md",
      "Reflect on your learning"
    ],
    "deliverables": [
      "README.md",
      "reflection.md",
      "prompts.md"
    ],
    "optionalDeliverables": [
      "diagram.png",
      "code/"
    ]
  },
  {
    "date": "2026-08-06",
    "missionName": "Mission Deloitte 16",
    "company": "Deloitte USI",
    "companyIcon": "📊",
    "skill": "Core Engineering",
    "week": 4,
    "weekTheme": "Consulting & Services",
    "title": "Technical Challenge - Deloitte USI",
    "desc": "A daily engineering task focusing on Consulting & Services systems.",
    "tasks": [
      "Understand the problem statement and design constraints",
      "Design the architecture or write the core logic",
      "Document your findings in README.md",
      "Reflect on your learning"
    ],
    "deliverables": [
      "README.md",
      "reflection.md",
      "prompts.md"
    ],
    "optionalDeliverables": [
      "diagram.png",
      "code/"
    ]
  },
  {
    "date": "2026-08-07",
    "missionName": "Mission Thorogood 17",
    "company": "Thorogood Associates",
    "companyIcon": "🗄️",
    "skill": "Core Engineering",
    "week": 4,
    "weekTheme": "Data, AI & Analytics",
    "title": "Technical Challenge - Thorogood Associates",
    "desc": "A daily engineering task focusing on Data, AI & Analytics systems.",
    "tasks": [
      "Understand the problem statement and design constraints",
      "Design the architecture or write the core logic",
      "Document your findings in README.md",
      "Reflect on your learning"
    ],
    "deliverables": [
      "README.md",
      "reflection.md",
      "prompts.md"
    ],
    "optionalDeliverables": [
      "diagram.png",
      "code/"
    ]
  },
  {
    "date": "2026-08-10",
    "missionName": "Mission The 18",
    "company": "The MathCompany",
    "companyIcon": "📐",
    "skill": "Core Engineering",
    "week": 4,
    "weekTheme": "Data, AI & Analytics",
    "title": "Technical Challenge - The MathCompany",
    "desc": "A daily engineering task focusing on Data, AI & Analytics systems.",
    "tasks": [
      "Understand the problem statement and design constraints",
      "Design the architecture or write the core logic",
      "Document your findings in README.md",
      "Reflect on your learning"
    ],
    "deliverables": [
      "README.md",
      "reflection.md",
      "prompts.md"
    ],
    "optionalDeliverables": [
      "diagram.png",
      "code/"
    ]
  },
  {
    "date": "2026-08-11",
    "missionName": "Mission Jungroo 19",
    "company": "Jungroo AI labs",
    "companyIcon": "🧠",
    "skill": "Core Engineering",
    "week": 4,
    "weekTheme": "Data, AI & Analytics",
    "title": "Technical Challenge - Jungroo AI labs",
    "desc": "A daily engineering task focusing on Data, AI & Analytics systems.",
    "tasks": [
      "Understand the problem statement and design constraints",
      "Design the architecture or write the core logic",
      "Document your findings in README.md",
      "Reflect on your learning"
    ],
    "deliverables": [
      "README.md",
      "reflection.md",
      "prompts.md"
    ],
    "optionalDeliverables": [
      "diagram.png",
      "code/"
    ]
  },
  {
    "date": "2026-08-12",
    "missionName": "Mission Celeredge 20",
    "company": "Celeredge Inc",
    "companyIcon": "🕸️",
    "skill": "Core Engineering",
    "week": 4,
    "weekTheme": "Data, AI & Analytics",
    "title": "Technical Challenge - Celeredge Inc",
    "desc": "A daily engineering task focusing on Data, AI & Analytics systems.",
    "tasks": [
      "Understand the problem statement and design constraints",
      "Design the architecture or write the core logic",
      "Document your findings in README.md",
      "Reflect on your learning"
    ],
    "deliverables": [
      "README.md",
      "reflection.md",
      "prompts.md"
    ],
    "optionalDeliverables": [
      "diagram.png",
      "code/"
    ]
  },
  {
    "date": "2026-08-13",
    "missionName": "Mission Caterpillar 21",
    "company": "Caterpillar Hackathon",
    "companyIcon": "🚜",
    "skill": "Core Engineering",
    "week": 4,
    "weekTheme": "Data, AI & Analytics",
    "title": "Technical Challenge - Caterpillar Hackathon",
    "desc": "A daily engineering task focusing on Data, AI & Analytics systems.",
    "tasks": [
      "Understand the problem statement and design constraints",
      "Design the architecture or write the core logic",
      "Document your findings in README.md",
      "Reflect on your learning"
    ],
    "deliverables": [
      "README.md",
      "reflection.md",
      "prompts.md"
    ],
    "optionalDeliverables": [
      "diagram.png",
      "code/"
    ]
  },
  {
    "date": "2026-08-14",
    "missionName": "Mission IBM 22",
    "company": "IBM",
    "companyIcon": "☁️",
    "skill": "Core Engineering",
    "week": 4,
    "weekTheme": "Tech Giants & Security",
    "title": "Technical Challenge - IBM",
    "desc": "A daily engineering task focusing on Tech Giants & Security systems.",
    "tasks": [
      "Understand the problem statement and design constraints",
      "Design the architecture or write the core logic",
      "Document your findings in README.md",
      "Reflect on your learning"
    ],
    "deliverables": [
      "README.md",
      "reflection.md",
      "prompts.md"
    ],
    "optionalDeliverables": [
      "diagram.png",
      "code/"
    ]
  },
  {
    "date": "2026-08-17",
    "missionName": "Mission Palo 23",
    "company": "Palo Alto Networks",
    "companyIcon": "🛡️",
    "skill": "Core Engineering",
    "week": 4,
    "weekTheme": "Tech Giants & Security",
    "title": "Technical Challenge - Palo Alto Networks",
    "desc": "A daily engineering task focusing on Tech Giants & Security systems.",
    "tasks": [
      "Understand the problem statement and design constraints",
      "Design the architecture or write the core logic",
      "Document your findings in README.md",
      "Reflect on your learning"
    ],
    "deliverables": [
      "README.md",
      "reflection.md",
      "prompts.md"
    ],
    "optionalDeliverables": [
      "diagram.png",
      "code/"
    ]
  },
  {
    "date": "2026-08-18",
    "missionName": "Mission Oracle 24",
    "company": "Oracle OFSS",
    "companyIcon": "💽",
    "skill": "Core Engineering",
    "week": 4,
    "weekTheme": "Tech Giants & Security",
    "title": "Technical Challenge - Oracle OFSS",
    "desc": "A daily engineering task focusing on Tech Giants & Security systems.",
    "tasks": [
      "Understand the problem statement and design constraints",
      "Design the architecture or write the core logic",
      "Document your findings in README.md",
      "Reflect on your learning"
    ],
    "deliverables": [
      "README.md",
      "reflection.md",
      "prompts.md"
    ],
    "optionalDeliverables": [
      "diagram.png",
      "code/"
    ]
  },
  {
    "date": "2026-08-19",
    "missionName": "Mission PhonePe 25",
    "company": "PhonePe",
    "companyIcon": "💸",
    "skill": "Core Engineering",
    "week": 4,
    "weekTheme": "FinTech, Product & Enterprise",
    "title": "Technical Challenge - PhonePe",
    "desc": "A daily engineering task focusing on FinTech, Product & Enterprise systems.",
    "tasks": [
      "Understand the problem statement and design constraints",
      "Design the architecture or write the core logic",
      "Document your findings in README.md",
      "Reflect on your learning"
    ],
    "deliverables": [
      "README.md",
      "reflection.md",
      "prompts.md"
    ],
    "optionalDeliverables": [
      "diagram.png",
      "code/"
    ]
  },
  {
    "date": "2026-08-20",
    "missionName": "Mission Societe 26",
    "company": "Societe Generale",
    "companyIcon": "🏦",
    "skill": "Core Engineering",
    "week": 4,
    "weekTheme": "FinTech, Product & Enterprise",
    "title": "Technical Challenge - Societe Generale",
    "desc": "A daily engineering task focusing on FinTech, Product & Enterprise systems.",
    "tasks": [
      "Understand the problem statement and design constraints",
      "Design the architecture or write the core logic",
      "Document your findings in README.md",
      "Reflect on your learning"
    ],
    "deliverables": [
      "README.md",
      "reflection.md",
      "prompts.md"
    ],
    "optionalDeliverables": [
      "diagram.png",
      "code/"
    ]
  },
  {
    "date": "2026-08-21",
    "missionName": "Mission Commvault 27",
    "company": "Commvault",
    "companyIcon": "💾",
    "skill": "Core Engineering",
    "week": 4,
    "weekTheme": "FinTech, Product & Enterprise",
    "title": "Technical Challenge - Commvault",
    "desc": "A daily engineering task focusing on FinTech, Product & Enterprise systems.",
    "tasks": [
      "Understand the problem statement and design constraints",
      "Design the architecture or write the core logic",
      "Document your findings in README.md",
      "Reflect on your learning"
    ],
    "deliverables": [
      "README.md",
      "reflection.md",
      "prompts.md"
    ],
    "optionalDeliverables": [
      "diagram.png",
      "code/"
    ]
  },
  {
    "date": "2026-08-24",
    "missionName": "Mission Bounteous 28",
    "company": "Bounteous x Accolite",
    "companyIcon": "🛍️",
    "skill": "Core Engineering",
    "week": 4,
    "weekTheme": "FinTech, Product & Enterprise",
    "title": "Technical Challenge - Bounteous x Accolite",
    "desc": "A daily engineering task focusing on FinTech, Product & Enterprise systems.",
    "tasks": [
      "Understand the problem statement and design constraints",
      "Design the architecture or write the core logic",
      "Document your findings in README.md",
      "Reflect on your learning"
    ],
    "deliverables": [
      "README.md",
      "reflection.md",
      "prompts.md"
    ],
    "optionalDeliverables": [
      "diagram.png",
      "code/"
    ]
  },
  {
    "date": "2026-08-25",
    "missionName": "Mission Tata 29",
    "company": "Tata Consultancy Services",
    "companyIcon": "🏢",
    "skill": "Core Engineering",
    "week": 4,
    "weekTheme": "Consulting & Services",
    "title": "Technical Challenge - Tata Consultancy Services",
    "desc": "A daily engineering task focusing on Consulting & Services systems.",
    "tasks": [
      "Understand the problem statement and design constraints",
      "Design the architecture or write the core logic",
      "Document your findings in README.md",
      "Reflect on your learning"
    ],
    "deliverables": [
      "README.md",
      "reflection.md",
      "prompts.md"
    ],
    "optionalDeliverables": [
      "diagram.png",
      "code/"
    ]
  },
  {
    "date": "2026-08-26",
    "missionName": "Mission Deloitte 30",
    "company": "Deloitte USI",
    "companyIcon": "📊",
    "skill": "Core Engineering",
    "week": 4,
    "weekTheme": "Consulting & Services",
    "title": "Technical Challenge - Deloitte USI",
    "desc": "A daily engineering task focusing on Consulting & Services systems.",
    "tasks": [
      "Understand the problem statement and design constraints",
      "Design the architecture or write the core logic",
      "Document your findings in README.md",
      "Reflect on your learning"
    ],
    "deliverables": [
      "README.md",
      "reflection.md",
      "prompts.md"
    ],
    "optionalDeliverables": [
      "diagram.png",
      "code/"
    ]
  },
  {
    "date": "2026-08-27",
    "missionName": "Mission Thorogood 31",
    "company": "Thorogood Associates",
    "companyIcon": "🗄️",
    "skill": "Core Engineering",
    "week": 4,
    "weekTheme": "Data, AI & Analytics",
    "title": "Technical Challenge - Thorogood Associates",
    "desc": "A daily engineering task focusing on Data, AI & Analytics systems.",
    "tasks": [
      "Understand the problem statement and design constraints",
      "Design the architecture or write the core logic",
      "Document your findings in README.md",
      "Reflect on your learning"
    ],
    "deliverables": [
      "README.md",
      "reflection.md",
      "prompts.md"
    ],
    "optionalDeliverables": [
      "diagram.png",
      "code/"
    ]
  },
  {
    "date": "2026-08-28",
    "missionName": "Mission The 32",
    "company": "The MathCompany",
    "companyIcon": "📐",
    "skill": "Core Engineering",
    "week": 4,
    "weekTheme": "Data, AI & Analytics",
    "title": "Technical Challenge - The MathCompany",
    "desc": "A daily engineering task focusing on Data, AI & Analytics systems.",
    "tasks": [
      "Understand the problem statement and design constraints",
      "Design the architecture or write the core logic",
      "Document your findings in README.md",
      "Reflect on your learning"
    ],
    "deliverables": [
      "README.md",
      "reflection.md",
      "prompts.md"
    ],
    "optionalDeliverables": [
      "diagram.png",
      "code/"
    ]
  },
  {
    "date": "2026-08-31",
    "missionName": "Mission Jungroo 33",
    "company": "Jungroo AI labs",
    "companyIcon": "🧠",
    "skill": "Core Engineering",
    "week": 4,
    "weekTheme": "Data, AI & Analytics",
    "title": "Technical Challenge - Jungroo AI labs",
    "desc": "A daily engineering task focusing on Data, AI & Analytics systems.",
    "tasks": [
      "Understand the problem statement and design constraints",
      "Design the architecture or write the core logic",
      "Document your findings in README.md",
      "Reflect on your learning"
    ],
    "deliverables": [
      "README.md",
      "reflection.md",
      "prompts.md"
    ],
    "optionalDeliverables": [
      "diagram.png",
      "code/"
    ]
  },
  {
    "date": "2026-09-01",
    "missionName": "Mission Celeredge 34",
    "company": "Celeredge Inc",
    "companyIcon": "🕸️",
    "skill": "Core Engineering",
    "week": 4,
    "weekTheme": "Data, AI & Analytics",
    "title": "Technical Challenge - Celeredge Inc",
    "desc": "A daily engineering task focusing on Data, AI & Analytics systems.",
    "tasks": [
      "Understand the problem statement and design constraints",
      "Design the architecture or write the core logic",
      "Document your findings in README.md",
      "Reflect on your learning"
    ],
    "deliverables": [
      "README.md",
      "reflection.md",
      "prompts.md"
    ],
    "optionalDeliverables": [
      "diagram.png",
      "code/"
    ]
  },
  {
    "date": "2026-09-02",
    "missionName": "Mission Caterpillar 35",
    "company": "Caterpillar Hackathon",
    "companyIcon": "🚜",
    "skill": "Core Engineering",
    "week": 4,
    "weekTheme": "Data, AI & Analytics",
    "title": "Technical Challenge - Caterpillar Hackathon",
    "desc": "A daily engineering task focusing on Data, AI & Analytics systems.",
    "tasks": [
      "Understand the problem statement and design constraints",
      "Design the architecture or write the core logic",
      "Document your findings in README.md",
      "Reflect on your learning"
    ],
    "deliverables": [
      "README.md",
      "reflection.md",
      "prompts.md"
    ],
    "optionalDeliverables": [
      "diagram.png",
      "code/"
    ]
  },
  {
    "date": "2026-09-03",
    "missionName": "Mission IBM 36",
    "company": "IBM",
    "companyIcon": "☁️",
    "skill": "Core Engineering",
    "week": 4,
    "weekTheme": "Tech Giants & Security",
    "title": "Technical Challenge - IBM",
    "desc": "A daily engineering task focusing on Tech Giants & Security systems.",
    "tasks": [
      "Understand the problem statement and design constraints",
      "Design the architecture or write the core logic",
      "Document your findings in README.md",
      "Reflect on your learning"
    ],
    "deliverables": [
      "README.md",
      "reflection.md",
      "prompts.md"
    ],
    "optionalDeliverables": [
      "diagram.png",
      "code/"
    ]
  },
  {
    "date": "2026-09-04",
    "missionName": "Mission Palo 37",
    "company": "Palo Alto Networks",
    "companyIcon": "🛡️",
    "skill": "Core Engineering",
    "week": 4,
    "weekTheme": "Tech Giants & Security",
    "title": "Technical Challenge - Palo Alto Networks",
    "desc": "A daily engineering task focusing on Tech Giants & Security systems.",
    "tasks": [
      "Understand the problem statement and design constraints",
      "Design the architecture or write the core logic",
      "Document your findings in README.md",
      "Reflect on your learning"
    ],
    "deliverables": [
      "README.md",
      "reflection.md",
      "prompts.md"
    ],
    "optionalDeliverables": [
      "diagram.png",
      "code/"
    ]
  },
  {
    "date": "2026-09-07",
    "missionName": "Mission Oracle 38",
    "company": "Oracle OFSS",
    "companyIcon": "💽",
    "skill": "Core Engineering",
    "week": 4,
    "weekTheme": "Tech Giants & Security",
    "title": "Technical Challenge - Oracle OFSS",
    "desc": "A daily engineering task focusing on Tech Giants & Security systems.",
    "tasks": [
      "Understand the problem statement and design constraints",
      "Design the architecture or write the core logic",
      "Document your findings in README.md",
      "Reflect on your learning"
    ],
    "deliverables": [
      "README.md",
      "reflection.md",
      "prompts.md"
    ],
    "optionalDeliverables": [
      "diagram.png",
      "code/"
    ]
  },
  {
    "date": "2026-09-08",
    "missionName": "Mission PhonePe 39",
    "company": "PhonePe",
    "companyIcon": "💸",
    "skill": "Core Engineering",
    "week": 4,
    "weekTheme": "FinTech, Product & Enterprise",
    "title": "Technical Challenge - PhonePe",
    "desc": "A daily engineering task focusing on FinTech, Product & Enterprise systems.",
    "tasks": [
      "Understand the problem statement and design constraints",
      "Design the architecture or write the core logic",
      "Document your findings in README.md",
      "Reflect on your learning"
    ],
    "deliverables": [
      "README.md",
      "reflection.md",
      "prompts.md"
    ],
    "optionalDeliverables": [
      "diagram.png",
      "code/"
    ]
  },
  {
    "date": "2026-09-09",
    "missionName": "Mission Societe 40",
    "company": "Societe Generale",
    "companyIcon": "🏦",
    "skill": "Core Engineering",
    "week": 4,
    "weekTheme": "FinTech, Product & Enterprise",
    "title": "Technical Challenge - Societe Generale",
    "desc": "A daily engineering task focusing on FinTech, Product & Enterprise systems.",
    "tasks": [
      "Understand the problem statement and design constraints",
      "Design the architecture or write the core logic",
      "Document your findings in README.md",
      "Reflect on your learning"
    ],
    "deliverables": [
      "README.md",
      "reflection.md",
      "prompts.md"
    ],
    "optionalDeliverables": [
      "diagram.png",
      "code/"
    ]
  },
  {
    "date": "2026-09-10",
    "missionName": "Mission Commvault 41",
    "company": "Commvault",
    "companyIcon": "💾",
    "skill": "Core Engineering",
    "week": 4,
    "weekTheme": "FinTech, Product & Enterprise",
    "title": "Technical Challenge - Commvault",
    "desc": "A daily engineering task focusing on FinTech, Product & Enterprise systems.",
    "tasks": [
      "Understand the problem statement and design constraints",
      "Design the architecture or write the core logic",
      "Document your findings in README.md",
      "Reflect on your learning"
    ],
    "deliverables": [
      "README.md",
      "reflection.md",
      "prompts.md"
    ],
    "optionalDeliverables": [
      "diagram.png",
      "code/"
    ]
  },
  {
    "date": "2026-09-11",
    "missionName": "Mission Bounteous 42",
    "company": "Bounteous x Accolite",
    "companyIcon": "🛍️",
    "skill": "Core Engineering",
    "week": 4,
    "weekTheme": "FinTech, Product & Enterprise",
    "title": "Technical Challenge - Bounteous x Accolite",
    "desc": "A daily engineering task focusing on FinTech, Product & Enterprise systems.",
    "tasks": [
      "Understand the problem statement and design constraints",
      "Design the architecture or write the core logic",
      "Document your findings in README.md",
      "Reflect on your learning"
    ],
    "deliverables": [
      "README.md",
      "reflection.md",
      "prompts.md"
    ],
    "optionalDeliverables": [
      "diagram.png",
      "code/"
    ]
  },
  {
    "date": "2026-09-14",
    "missionName": "Mission Tata 43",
    "company": "Tata Consultancy Services",
    "companyIcon": "🏢",
    "skill": "Core Engineering",
    "week": 4,
    "weekTheme": "Consulting & Services",
    "title": "Technical Challenge - Tata Consultancy Services",
    "desc": "A daily engineering task focusing on Consulting & Services systems.",
    "tasks": [
      "Understand the problem statement and design constraints",
      "Design the architecture or write the core logic",
      "Document your findings in README.md",
      "Reflect on your learning"
    ],
    "deliverables": [
      "README.md",
      "reflection.md",
      "prompts.md"
    ],
    "optionalDeliverables": [
      "diagram.png",
      "code/"
    ]
  },
  {
    "date": "2026-09-15",
    "missionName": "Mission Deloitte 44",
    "company": "Deloitte USI",
    "companyIcon": "📊",
    "skill": "Core Engineering",
    "week": 4,
    "weekTheme": "Consulting & Services",
    "title": "Technical Challenge - Deloitte USI",
    "desc": "A daily engineering task focusing on Consulting & Services systems.",
    "tasks": [
      "Understand the problem statement and design constraints",
      "Design the architecture or write the core logic",
      "Document your findings in README.md",
      "Reflect on your learning"
    ],
    "deliverables": [
      "README.md",
      "reflection.md",
      "prompts.md"
    ],
    "optionalDeliverables": [
      "diagram.png",
      "code/"
    ]
  },
  {
    "date": "2026-09-16",
    "missionName": "Mission Thorogood 45",
    "company": "Thorogood Associates",
    "companyIcon": "🗄️",
    "skill": "Core Engineering",
    "week": 4,
    "weekTheme": "Data, AI & Analytics",
    "title": "Technical Challenge - Thorogood Associates",
    "desc": "A daily engineering task focusing on Data, AI & Analytics systems.",
    "tasks": [
      "Understand the problem statement and design constraints",
      "Design the architecture or write the core logic",
      "Document your findings in README.md",
      "Reflect on your learning"
    ],
    "deliverables": [
      "README.md",
      "reflection.md",
      "prompts.md"
    ],
    "optionalDeliverables": [
      "diagram.png",
      "code/"
    ]
  },
  {
    "date": "2026-09-17",
    "missionName": "Mission Demo Day",
    "company": "Cohort 25MX",
    "companyIcon": "🏆",
    "skill": "Core Engineering",
    "week": 4,
    "weekTheme": "Data, AI & Analytics",
    "title": "Demo Day + Engineering Showcase",
    "desc": "A daily engineering task focusing on Data, AI & Analytics systems.",
    "tasks": [
      "Understand the problem statement and design constraints",
      "Design the architecture or write the core logic",
      "Document your findings in README.md",
      "Reflect on your learning"
    ],
    "deliverables": [
      "README.md",
      "reflection.md",
      "prompts.md"
    ],
    "optionalDeliverables": [
      "diagram.png",
      "code/"
    ],
    "isSpecial": true
  }
]

export function getMission(date: string): Mission | undefined {
  return MISSIONS_DATA.find(m => m.date === date)
}

export function getMissionsByWeek(week: number): Mission[] {
  return MISSIONS_DATA.filter(m => m.week === week)
}

export function getTodayMission(): Mission | undefined {
  const istTime = new Date(new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }))
  const yyyy = istTime.getFullYear()
  const mm   = String(istTime.getMonth() + 1).padStart(2, '0')
  const dd   = String(istTime.getDate()).padStart(2, '0')
  const todayISO = `${yyyy}-${mm}-${dd}`
  return getMission(todayISO)
}

export function isMissionUnlocked(date: string): boolean {
  const istTime = new Date(new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }))
  const yyyy = istTime.getFullYear()
  const mm   = String(istTime.getMonth() + 1).padStart(2, '0')
  const dd   = String(istTime.getDate()).padStart(2, '0')
  const todayISO = `${yyyy}-${mm}-${dd}`
  
  // A mission is unlocked if its date is less than or equal to today
  return date <= todayISO
}

export function getNextMission(activeDates: string[]): Mission | undefined {
  const activeSet = new Set(activeDates)
  return MISSIONS_DATA.find(m => !activeSet.has(m.date) && m.date > (activeDates[activeDates.length - 1] ?? ''))
}

export const ALL_MISSION_DATES = MISSIONS_DATA.map(m => m.date)
