import { ArrowUpRight } from 'lucide-react';
import { useRef } from 'react';
import Container from './container';

type Project = {
    title: string;
    description: string;
    stack: string[];
    github: string;
    live?: string;
    image?: string;
    size: string;
    placeholder?: boolean;
};

const projects: Project[] = [
    {
        title: 'CampusSkillNet',
        description:
            'A university-exclusive skill and job marketplace connecting students with real opportunities on campus — from vendors selling products to students offering services. My final-year project.',
        stack: ['Laravel', 'MySQL', 'Blade/React'],
        github: 'https://github.com/Edacynthia/Campus-skill-marketplace',
        image: '/images/projects/campusskillnet.png',
        size: 'md:col-span-2 md:row-span-2',
    },
    {
        title: 'ErrorFixer AI Agent',
        description:
            'An AI agent that detects, explains, and fixes code errors — integrated with Telex.im and powered by Google Gemini.',
        stack: ['Laravel', 'Gemini AI', 'REST API'],
        github: 'https://github.com/Edacynthia/error-fix-agent',
        live: 'https://error-fix-agent-production.up.railway.app/error-fix',
        image: '/images/projects/error-fix-agent.png',
        size: '',
    },
    {
        title: 'String Analyzer API',
        description:
            'A RESTful API that analyzes strings — palindrome checks, word counts, hashing, and natural-language filtering.',
        stack: ['Laravel', 'REST API'],
        github: 'https://github.com/Edacynthia/string-analyzer-api',
        live: 'https://analyze-string-api.pxxl.click',
        image: '/images/projects/string-analyzer.png',
        size: '',
    },
    {
        title: "Itse's Portfolio",
        description:
            'A personal portfolio site I built for a client, from layout to deployment.',
        stack: ['HTML', 'CSS', 'Javascript'],
        github: 'https://github.com/Edacynthia/itse_portfolio',
        live: 'https://itse-portfolio.vercel.app',
        image: '/images/projects/portfolio-img.png',
        size: '',
    },
    {
        title: 'NGO Foundation',
        description: 'Details coming soon.',
        stack: [],
        github: '#',
        size: '',
        placeholder: true,
    },
];

function GithubIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
            <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.54 2.87 8.39 6.84 9.75.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.88-2.78.51-3.5-.7-3.72-1.34-.13-.34-.68-1.38-1.16-1.66-.4-.22-.97-.76-.01-.77.9-.01 1.55.85 1.76 1.2 1.03 1.76 2.68 1.27 3.34.96.1-.76.4-1.27.72-1.56-2.51-.29-5.14-1.29-5.14-5.71 0-1.26.44-2.29 1.16-3.1-.12-.29-.5-1.46.11-3.04 0 0 .95-.31 3.11 1.18a10.6 10.6 0 0 1 2.83-.39c.96 0 1.92.13 2.83.39 2.16-1.51 3.11-1.18 3.11-1.18.62 1.58.23 2.75.11 3.04.72.81 1.16 1.83 1.16 3.1 0 4.43-2.64 5.42-5.15 5.71.41.37.77 1.08.77 2.19 0 1.58-.01 2.85-.01 3.24 0 .27.18.6.69.49A10.03 10.03 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
        </svg>
    );
}

function ProjectCard({ project }: { project: Project }) {
    const ref = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const el = ref.current;

        if (!el) {
            return;
        }

        const rect = el.getBoundingClientRect();
        el.style.setProperty('--x', `${e.clientX - rect.left}px`);
        el.style.setProperty('--y', `${e.clientY - rect.top}px`);
    };

    if (project.placeholder) {
        return (
            <div
                className={`flex items-center justify-center rounded-2xl border border-dashed border-neutral-300 p-6 text-sm text-neutral-400 dark:border-neutral-700 ${project.size}`}
            >
                {project.title} — {project.description}
            </div>
        );
    }

    return (
        <div
            ref={ref}
            onMouseMove={handleMouseMove}
            className={`group relative flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white transition-colors hover:border-accent-400/50 dark:border-neutral-800 dark:bg-neutral-900 ${project.size}`}
        >
            {project.image && (
                <div className="relative aspect-video w-full overflow-hidden bg-neutral-100 dark:bg-neutral-800">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full scale-105 object-cover object-top opacity-70 grayscale transition-all duration-500 group-hover:scale-100 group-hover:opacity-100 group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-0 dark:from-neutral-900" />
                </div>
            )}

            <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                    background:
                        'radial-gradient(250px circle at var(--x) var(--y), rgba(209,54,127,0.10), transparent 70%)',
                }}
            />

            <div className="relative flex flex-1 flex-col justify-between p-6">
                <div>
                    <h3 className="font-display text-xl font-semibold">
                        {project.title}
                    </h3>
                    <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                        {project.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                        {project.stack.map((tech) => (
                            <span
                                key={tech}
                                className="rounded-full bg-neutral-100 px-2.5 py-1 font-mono text-xs text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="mt-6 flex items-center gap-4 text-sm">
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 text-neutral-500 hover:text-accent-500"
                    >
                        <a href="https://github.com/Edacynthia" target="_blank" rel="noreferrer" className="text-neutral-500 transition-colors hover:text-accent-500" aria-label="GitHub">
    <GithubIcon className="h-5 w-5" />
</a> Code
                    </a>
                    {project.live && (
                        <a
                            href={project.live}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-1.5 text-neutral-500 hover:text-accent-500"
                        >
                            <ArrowUpRight className="h-4 w-4" /> Live
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}

export default function ProjectsSection() {
    return (
        <section id="projects" className="py-24">
            <Container>
                <p className="font-mono text-sm text-accent-500">
                    03 — Projects
                </p>
                <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">
                    Things I've built
                </h2>

                <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
                    {projects.map((project) => (
                        <ProjectCard key={project.title} project={project} />
                    ))}
                </div>
            </Container>
        </section>
    );
}
