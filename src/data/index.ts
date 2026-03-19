// ─── Types ────────────────────────────────────────────────────────────────────

export interface Project {
    id: number;
    title: string;
    tag: string;
    desc: string;
    tech: string[];
    color: string;
    emoji: string;
    LiveLink: string;
    GitLink: string;
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
        desc: "Developed a full-stack school management system to streamline academic operations including student enrollment, staff management, and course tracking, with a responsive interface and efficient backend API architecture.",
        tech: ["React", "Node.js", "PostgreSQL", "Tailwind CSS", "REST API"],
        color: "#00ffe0",
        emoji: "🏫",
        LiveLink: "https://schoolmanagement-omega-ten.vercel.app/",
        GitLink: "https://github.com/Bammytoye/School-Management-.git",
    },
    {
        id: 2,
        title: "Pretty Health",
        tag: "Frontend",
        desc: "Collaborated with a development team as a frontend engineer to build a responsive healthcare web application, focusing on intuitive UI design, user experience, and responsive interfaces.",
        tech: ["Next.js", "TypeScript", "Tailwind CSS"],
        color: "#7c3aed",
        emoji: "🏥",
        LiveLink: "https://prettyhealthcare.com.ng/",
        GitLink: "https://github.com/Savi1303/ade_healthcare.git",
    },
    {
        id: 3,
        title: "Netflix Clone",
        tag: "Full-Stack",
        desc: "A full-featured Netflix-inspired streaming platform with user authentication, dynamic movie browsing, and responsive UI. Built to deliver a smooth viewing experience with modern web technologies and scalable backend architecture.",
        tech: ["React", "Nodejs", "MongoDB", "TailwindCss"],
        color: "#f97316",
        emoji: "🎬",
        LiveLink: "https://netfix-clone-liard.vercel.app/",
        GitLink: "https://github.com/Bammytoye/Netfix-Clone.git",
    },
    {
        id: 4,
        title: "Netflix Clone",
        tag: "Full-Stack",
        desc: "",
        tech: ["React", "Nodejs", "PostgreSQl", "TailwindCss"],
        color: "#22d3ee",
        emoji: "",
        LiveLink: "https://zeke-book-appointment-admin.vercel.app/",
        GitLink: "https://zeke-book-appointment-admin.vercel.app/",
    },
    {
        id: 5,
        title: "Zeke Healthcare (User)",
        tag: "Full-Stack",
        desc: "",
        tech: ["React", "Nodejs", "PostgreSQl", "TailwindCss"],
        color: "#ec4899",
        emoji: "",
        LiveLink: "https://zeke-healthcare-frontend.vercel.app/",
        GitLink: "https://zeke-healthcare-frontend.vercel.app/",
    },
    {
        id: 6,
        title: "Zeke Healthcare (Admin/Doctor)",
        tag: "Full-Stack",
        desc: "",
        tech: ["React", "Nodejs", "PostgreSQl", "TailwindCss"],
        color: "#84cc16",
        emoji: "",
        LiveLink: "https://zeke-healthcare-admin.vercel.app/",
        GitLink: "https://zeke-healthcare-admin.vercel.app/",
    },
    {
        id: 7,
        title: "Valentine Blue",
        tag: "Frontend",
        desc: "",
        tech: ["React", "Nodejs", "PostgreSQl", "TailwindCss"],
        color: "#f43f5e",
        emoji: "",
        LiveLink: "https://valentine-blue-zeta.vercel.app/",
        GitLink: "https://valentine-blue-zeta.vercel.app/",
    },
    {
        id: 8,
        title: "Zeke Chat GPT3",
        tag: "Frontend",
        desc: "",
        tech: ["React", "Nodejs", "PostgreSQl", "TailwindCss"],
        color: "#6366f1",
        emoji: "",
        LiveLink: "https://zeke-chat-gpt3.vercel.app/",
        GitLink: "https://zeke-chat-gpt3.vercel.app/",
    },
    {
        id: 9,
        title: "Vue Todo List",
        tag: "Frontend",
        desc: "",
        tech: ["React", "Nodejs", "PostgreSQl", "TailwindCss"],
        color: "#10b981",
        emoji: "",
        LiveLink: "https://vue-todo-list-mauve.vercel.app/",
        GitLink: "https://vue-todo-list-mauve.vercel.app/",
    },
    {
        id: 10,
        title: "Next.js Todo List",
        tag: "Frontend",
        desc: "",
        tech: ["React", "Nodejs", "PostgreSQl", "TailwindCss"],
        color: "#8b5cf6",
        emoji: "",
        LiveLink: "https://nextjs-todo-list-indol.vercel.app/",
        GitLink: "https://nextjs-todo-list-indol.vercel.app/",
    },
];

// ─── Timeline ─────────────────────────────────────────────────────────────────

export const TIMELINE: TimelineItem[] = [
    {
        year: "2025",
        role: "Frontend Developer",
        company: "Self-Employed",
        desc: "Worked collaboratively with frontend and backend developers to build and deploy full-stack healthcare web applications, focusing on responsive UI, API integration, and smooth user experience.",
    },
    {
        year: "2020",
        role: "Frontend Developer",
        company: "Zeke Tech",
        desc: "Delivered some client projects, building responsive web interfaces, reusable UI components, and interactive user experiences for diverse business needs.",
    },
    {
        year: "2018",
        role: "Freelance Developer",
        company: "Self-Employed",
        desc: "Started freelancing by developing custom websites and RESTful APIs for startups and SMEs, focusing on responsive design, performance, and client requirements.",
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
