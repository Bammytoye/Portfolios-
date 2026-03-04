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
        { name: "TypeScript", level: 70 },
        { name: "Tailwind CSS", level: 92 },
        { name: "Vue", level: 78 },
        { name: "HTML", level: 78 },
        { name: "CSS Animations", level: 88 },
    ],
    Backend: [
        { name: "Node.js / Express", level: 91 },
        { name: "PostgreSQL", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "GraphQL", level: 50 },
        { name: "Laravel", level: 50 },
        { name: "SQL", level: 70 },
    ],
};

export const TECH_BADGES = [
    "React",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "MongoDB",
    "SQL",
    "Vue",
    "GraphQL",
    "Laravel",
    "Tailwind",
    "AWS",
];

// ─── Projects ─────────────────────────────────────────────────────────────────

export const PROJECTS: Project[] = [
    {
        id: 1,
        title: "NeuroCommerce",
        tag: "Full-Stack",
        desc: "AI-powered e-commerce platform with real-time personalization engine, headless CMS, and GraphQL API serving 50k+ users.",
        tech: ["Next.js", "GraphQL", "PostgreSQL", "Stripe", "Redis"],
        color: "#00ffe0",
        emoji: "🛒",
        link: "#",
    },
    {
        id: 2,
        title: "VaultDash",
        tag: "Frontend",
        desc: "Real-time crypto portfolio dashboard with WebSocket data feeds, 3D chart visualizations, and dark glassmorphism UI.",
        tech: ["React", "Three.js", "WebSocket", "Recharts", "Framer"],
        color: "#7c3aed",
        emoji: "📊",
        link: "#",
    },
    {
        id: 3,
        title: "FlowBoard",
        tag: "Full-Stack",
        desc: "Collaborative project management tool with drag-and-drop Kanban, real-time sync, and AI task suggestion system.",
        tech: ["React", "Node.js", "Socket.io", "MongoDB", "OpenAI"],
        color: "#f97316",
        emoji: "🎯",
        link: "#",
    },
    {
        id: 4,
        title: "EchoAPI",
        tag: "Backend",
        desc: "High-performance REST & GraphQL gateway with automatic caching, rate limiting, and OpenAPI spec generation.",
        tech: ["Node.js", "Redis", "Docker", "Nginx", "Swagger"],
        color: "#22d3ee",
        emoji: "⚡",
        link: "#",
    },
    {
        id: 5,
        title: "PixelForge",
        tag: "Frontend",
        desc: "Browser-based image editor with WebGL filters, layer system, and WASM-accelerated processing pipeline.",
        tech: ["React", "WebGL", "WebAssembly", "Canvas", "WASM"],
        color: "#ec4899",
        emoji: "🎨",
        link: "#",
    },
    {
        id: 6,
        title: "DataWeave",
        tag: "Full-Stack",
        desc: "ETL pipeline builder with visual node editor, scheduled jobs, and live data transformation previews.",
        tech: ["Vue.js", "Python", "Celery", "PostgreSQL", "Docker"],
        color: "#84cc16",
        emoji: "🔄",
        link: "#",
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
    { icon: "💻", label: "GitHub", val: "github.com/bammytoye" },
    { icon: "📍", label: "Location", val: "Remote — Worldwide" },
];

// ─── Stats ────────────────────────────────────────────────────────────────────

export const STATS = [
    { n: 3, suf: "+", label: "Years Exp." },
    { n: 50, suf: "+", label: "Projects Done" },
    { n: 5, suf: "+", label: "Happy Clients" },
];
