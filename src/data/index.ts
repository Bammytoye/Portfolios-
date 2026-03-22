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
        tech: ["React", "Node.js", "PostgreSQL", 'JavaScript', "Tailwind CSS", "REST API"],
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
        tech: ["React", "Nodejs", "MongoDB", "TypeScript", "TailwindCss"],
        color: "#f97316",
        emoji: "🎬",
        LiveLink: "https://netfix-clone-liard.vercel.app/",
        GitLink: "https://github.com/Bammytoye/Netfix-Clone.git",
    },
    {
        id: 4,
        title: "Smart Booking (User)",
        tag: "Full-Stack",
        desc: "A seamless appointment booking platform that allows users to schedule, manage, and track appointments with ease. Designed with a clean UI and smooth user experience for quick and hassle-free bookings.",
        tech: ["React", "Nodejs", "MongoDB", 'JavaScript', "TailwindCss"],
        color: "#22d3ee",
        emoji: "📅",
        LiveLink: "https://zeke-book-appointment.vercel.app/",
        GitLink: "https://github.com/Bammytoye/Zeke-Book-Appointment.git",
    },
    {
        id: 5,
        title: "Smart Booking (Admin)",
        tag: "Full-Stack",
        desc: "A powerful admin dashboard for managing appointments, users, and schedules in real-time. Features intuitive controls, data insights, and efficient workflow tools to streamline booking operations.",
        tech: ["React", "Nodejs", "MongoDB", 'JavaScript', "TailwindCss"],
        color: "#ec4899",
        emoji: "📊",
        LiveLink: "https://zeke-book-appointment-admin.vercel.app/",
        GitLink: "https://github.com/Bammytoye/Zeke-Book-Appointment.git",
    },
    {
        id: 6,
        title: "Zeke Healthcare (Admin/Doctor)",
        tag: "Full-Stack",
        desc: "A powerful healthcare management system for doctors and admins to manage appointments, patients, schedules, and hospital operations in real-time with secure authentication and role-based access.",
        tech: ["React", "Nodejs", "MongoDB", 'JavaScript', "TailwindCss"],
        color: "#84cc16",
        emoji: "🩺",
        LiveLink: "https://zeke-healthcare-admin.vercel.app/",
        GitLink: "https://github.com/Bammytoye/ZekeHealthCare.git",
    },
    {
        id: 7,
        title: "Zeke Healthcare (User)",
        tag: "Full-Stack",
        desc: "A modern patient-facing healthcare platform that allows users to book appointments, view doctors, and manage their medical interactions with a smooth and responsive UI experience.",
        tech: ["React", "Nodejs", "MongoDB", 'JavaScript', "TailwindCss"],
        color: "#f43f5e",
        emoji: "🏥",
        LiveLink: "https://zeke-healthcare-frontend.vercel.app/",
        GitLink: "https://github.com/Bammytoye/ZekeHealthCare.git",
    },
    {
        id: 8,
        title: "Valentine Website",
        tag: "Frontend",
        desc: "A romantic and interactive Valentine-themed website built to create a fun and emotional user experience, featuring smooth animations, love messages, and a beautiful responsive UI design.",
        tech: ["React", 'JavaScript', "TailwindCss"],
        color: "#6366f1",
        emoji: "💌",
        LiveLink: "https://valentine-blue-zeta.vercel.app/",
        GitLink: "https://github.com/Bammytoye/valentine.git",
    },
    {
        id: 9,
        title: "Agency AI",
        tag: "Frontend",
        desc: "A modern AI-powered agency landing page designed to showcase digital services with a sleek UI, smooth animations, and responsive layout built for marketing and tech-driven businesses.",
        tech: ["React", "JavaScript", "TailwindCss"],
        color: "#10b981",
        emoji: "🤖",
        LiveLink: "https://agency-mu-ten.vercel.app/",
        GitLink: "https://github.com/Bammytoye/Agency.git",
    },
    {
        id: 10,
        title: "Amazon Website (Freelance Project)",
        tag: "Frontend",
        desc: "A fully responsive Amazon-inspired e-commerce web application built from scratch, featuring product listing UI, cart design, and modern e-commerce layout with smooth user experience and clean component structure.",
        tech: ["React", "TailwindCss"],
        color: "#8b5cf6",
        emoji: "🛒",
        LiveLink: "",
        GitLink: "https://github.com/PelvinDreams/Amazon_1.git",
    },
    {
        id: 11,
        title: "Workout Website",
        tag: "Full-Stack",
        desc: "A full-stack workout tracker built with the MERN stack. Users can sign up, log in, and manage their workouts adding, tracking, and deleting exercises with load and reps. Features JWT authentication, protected routes, and a clean responsive UI.",
        tech: ["React", "Nodejs", "MongoDB", "TailwindCSS"],
        color: "#16a34a",
        emoji: "🏋️",
        LiveLink: "https://workout-beta-blush.vercel.app/",
        GitLink: "https://github.com/Bammytoye/New-Workout",
    },
    {
        id: 11,
        title: "University ChatBot",
        tag: "Frontend",
        desc: "An empirical research prototype exploring how emotion-adaptive AI chatbots influence customer satisfaction. Features three experimental conditions — basic, emotion-adaptive, and anthropomorphic — built with React and powered by a large language model API. Includes a researcher control panel, post-interaction survey, and CSV data export.",
        tech: ["React", "TailwindCSS", "Groq API", "LLM"],
        color: "#16a34a",
        emoji: "🤖",
        LiveLink: "https://university-support-assistant-chatbo.vercel.app/",
        GitLink: "https://github.com/Bammytoye/University-Support-Assistant.git",
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
        year: "2024",
        role: "Frontend Developer",
        company: "Freelance",
        desc: "Independently designed and developed Amazon website for a client from scratch, handling UI/UX design, frontend architecture, and deployment while ensuring responsive and user-friendly experiences across devices.",
    },
    {
        year: "2023",
        role: "Frontend Developer",
        company: "Zeke Tech",
        desc: "Delivered some client projects, building responsive web interfaces, reusable UI components, and interactive user experiences for diverse business needs.",
    },
    {
        year: "2023",
        role: "Freelance Developer",
        company: "Self-Employed",
        desc: "Started freelancing by developing custom websites and RESTful APIs for startups and SMEs, focusing on responsive design, performance, and client requirements.",
    },
];

// ─── Contact ──────────────────────────────────────────────────────────────────

export const CONTACT_INFO: ContactInfo[] = [
    { icon: "👨🏻‍💻", label: "WhatsApp", val: "+234(0)8169885711" },
    { icon: "📧", label: "Email", val: "bamigbalatoyese@gmail.com" },
    { icon: "💼", label: "LinkedIn", val: "linkedin.com/in/bamigbala-ezekiel/" },
    { icon: "💻", label: "GitHub", val: "github.com/Bammytoye" },
    { icon: "📍", label: "Location", val: "Remote — Worldwide" },
];

// ─── Stats ────────────────────────────────────────────────────────────────────

export const STATS = [
    { n: 2, suf: "+", label: "Years Exp." },
    { n: 13, suf: "+", label: "Projects Done" },
    { n: 5, suf: "+", label: "Happy Clients" },
];
