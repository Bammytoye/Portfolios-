// ─── Types ────────────────────────────────────────────────────────────────────

export interface Project {
    id: number;
    title: string;
    tag: string;
    desc: string;
    tech: string[];
    color: string;
    emoji: string;
    link: string;
}

export interface TimelineItem {
    year: string;
    role: string;
    company: string;
    desc: string;
}

export interface SkillItem {
    name: string;
    level: number;
}

export interface ContactInfo {
    icon: string;
    label: string;
    val: string;
}

// ─── Nav ──────────────────────────────────────────────────────────────────────

export const NAV_LINKS = [
    "About",
    "Skills",
    "Projects",
    "Experience",
    "Contact",
] as const;
export type NavLink = (typeof NAV_LINKS)[number];

// ─── Skills ───────────────────────────────────────────────────────────────────

export const SKILLS: Record<string, SkillItem[]> = {
    Frontend: [
        { name: "React / Next.js", level: 95 },
        { name: "JavaScript / TypeScript", level: 82 },
        { name: "Tailwind CSS / CSS", level: 92 },
        { name: "HTML5", level: 95 },
        { name: "CSS Animations / Frame Motion", level: 88 },
        { name: "Redux / Zustand", level: 75 },
        { name: "Figma / UI Prototyping", level: 65 },
        { name: "Vue", level: 78 },
    ],

    Backend: [
        { name: "Node.js / Express", level: 95 },
        { name: "PostgreSQL", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "GraphQL", level: 70 },
        { name: "REST API Design", level: 85 },
        { name: "SQL", level: 85 },
        { name: "Authentication (JWT / OAuth / Firebase)", level: 70 },
    ],
    
    Tools: [
        { name: "Git / GitHub", level: 90 },
        { name: "VS Code ", level: 85 },
        { name: "Postman / Insomnia", level: 80 },
        { name: "ESLint / Prettier ", level: 70 },
        { name: "Figma / Adobe XD", level: 65 },
    ],
    Other: [
        { name: "WebSockets / Socket.io", level: 65 },
        { name: "Realtime Apps", level: 60 },
        { name: "SEO & Performance Optimization", level: 70 },
        { name: "Testing & Debugging", level: 70 },
    ],
};

export const TECH_BADGES = [
    "React / Nextjs",
    "JavaScript / TypeScript",
    "Node.js",
    "PostgreSQL",
    "MongoDB",
    "SQL",
    "Vue",
    "GraphQL",
    "Laravel",
    "Tailwind",
    "Postman / Insomnia",
    "Figma",
    "Git",
];

// ─── Projects ─────────────────────────────────────────────────────────────────

export const PROJECTS: Project[] = [
    {
        id: 1,
        title: "School Management",
        tag: "Full-Stack",
        desc: "",
        tech: ['React', 'Nodejs', 'PostgreSQl', 'TailwindCss'],
        color: "#00ffe0",
        emoji: "",
        link: "https://schoolmanagement-omega-ten.vercel.app/",
    },
    {
        id: 2,
        title: "Agency",
        tag: "Frontend",
        desc: "",
        tech: ['React', 'Nodejs', 'PostgreSQl', 'TailwindCss'],
        color: "#7c3aed",
        emoji: "",
        link: "https://agency-mu-ten.vercel.app/",
    },
    {
        id: 3,
        title: "Zeke Book Appointment (User)",
        tag: "Full-Stack",
        desc: "",
        tech: ['React', 'Nodejs', 'PostgreSQl', 'TailwindCss'],
        color: "#f97316",
        emoji: "",
        link: "https://zeke-book-appointment.vercel.app/",
    },
    {
        id: 4,
        title: "Zeke Book Appointment (Admin)",
        tag: "Full-Stack",
        desc: "",
        tech: ['React', 'Nodejs', 'PostgreSQl', 'TailwindCss'],
        color: "#22d3ee",
        emoji: "",
        link: "https://zeke-book-appointment-admin.vercel.app/",
    },
    {
        id: 5,
        title: "Zeke Healthcare (User)",
        tag: "Full-Stack",
        desc: "",
        tech: ['React', 'Nodejs', 'PostgreSQl', 'TailwindCss'],
        color: "#ec4899",
        emoji: "",
        link: "https://zeke-healthcare-frontend.vercel.app/",
    },
    {
        id: 6,
        title: "Zeke Healthcare (Admin/Doctor)",
        tag: "Full-Stack",
        desc: "",
        tech: ['React', 'Nodejs', 'PostgreSQl', 'TailwindCss'],
        color: "#84cc16",
        emoji: "",
        link: "https://zeke-healthcare-admin.vercel.app/",
    },
    {
        id: 7,
        title: "Valentine Blue",
        tag: "Frontend",
        desc: "",
        tech: ['React', 'Nodejs', 'PostgreSQl', 'TailwindCss'],
        color: "#f43f5e",
        emoji: "",
        link: "https://valentine-blue-zeta.vercel.app/",
    },
    {
        id: 8,
        title: "Zeke Chat GPT3",
        tag: "Frontend",
        desc: "",
        tech: ['React', 'Nodejs', 'PostgreSQl', 'TailwindCss'],
        color: "#6366f1",
        emoji: "",
        link: "https://zeke-chat-gpt3.vercel.app/",
    },
    {
        id: 9,
        title: "Vue Todo List",
        tag: "Frontend",
        desc: "",
        tech: ['React', 'Nodejs', 'PostgreSQl', 'TailwindCss'],
        color: "#10b981",
        emoji: "",
        link: "https://vue-todo-list-mauve.vercel.app/",
    },
    {
        id: 10,
        title: "Next.js Todo List",
        tag: "Frontend",
        desc: "",
        tech: ['React', 'Nodejs', 'PostgreSQl', 'TailwindCss'],
        color: "#8b5cf6",
        emoji: "",
        link: "https://nextjs-todo-list-indol.vercel.app/",
    },
];

// ─── Timeline ─────────────────────────────────────────────────────────────────

export const TIMELINE: TimelineItem[] = [
    {
        year: "2024",
        role: "Senior Frontend Engineer",
        company: "TechNova Labs",
        desc: "Led migration of monolith to micro-frontend architecture, reducing bundle size by 40%.",
    },
    {
        year: "2022",
        role: "Full-Stack Developer",
        company: "Stackify Inc.",
        desc: "Built scalable SaaS platform from zero to 10k users. TypeScript, Node, and PostgreSQL.",
    },
    {
        year: "2020",
        role: "Frontend Developer",
        company: "CreativeWeb Studio",
        desc: "Delivered 30+ client projects. Specialized in interactive animations and WebGL experiences.",
    },
    {
        year: "2018",
        role: "Freelance Developer",
        company: "Self-Employed",
        desc: "Started freelancing building custom websites and REST APIs for startups and SMEs.",
    },
];

// ─── Contact ──────────────────────────────────────────────────────────────────

export const CONTACT_INFO: ContactInfo[] = [
    { icon: "📧", label: "Email", val: "bamigbalatoyese@gmail.com" },
    { icon: "💼", label: "LinkedIn", val: "linkedin.com/in/bamigbalaEzekiel" },
    { icon: "💻", label: "GitHub", val: "github.com/Bammytoye" },
    { icon: "📍", label: "Location", val: "Remote — Worldwide" },
];

// ─── Stats ────────────────────────────────────────────────────────────────────

export const STATS = [
    { n: 3, suf: "+", label: "Years Exp." },
    { n: 13, suf: "+", label: "Projects Done" },
    { n: 5, suf: "+", label: "Happy Clients" },
];
