import { useRef } from 'react';
import Container from './container';

type Skill = {
    name: string;
    slug: string;
};

const skills: Skill[] = [
    { name: 'Laravel', slug: 'laravel' },
    { name: 'JavaScript', slug: 'javascript' },
    { name: 'React', slug: 'react' },
    { name: 'Tailwind CSS', slug: 'tailwindcss' },
    { name: 'Git', slug: 'git' },
    { name: 'MySQL', slug: 'mysql' },
    { name: 'HTML5', slug: 'html5' },
    { name: 'CSS3', slug: 'css3' },
];

function SkillCell({ name, slug }: Skill) {
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

    const handleImgError = (e: React.SyntheticEvent<HTMLImageElement>) => {
        e.currentTarget.src = `https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/${slug}.svg`;
    };

    return (
        <div
            ref={ref}
            onMouseMove={handleMouseMove}
            className="group relative flex flex-col items-start justify-center gap-3 border border-neutral-200 px-6 py-10 text-left transition-colors hover:bg-neutral-50 dark:border-neutral-800 dark:hover:bg-neutral-900"
        >
            <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                    background:
                        'radial-gradient(150px circle at var(--x) var(--y), rgba(209,54,127,0.15), transparent 70%)',
                }}
            />
            <img
                src={`https://cdn.simpleicons.org/${slug}?viewbox=auto`}
                onError={handleImgError}
                alt={name}
                className="relative h-7 w-7 opacity-80 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0"
            />
            <p className="relative font-mono text-xs tracking-wide text-neutral-600 uppercase group-hover:text-neutral-900 dark:text-neutral-400 dark:group-hover:text-neutral-100">
                {name}
            </p>
        </div>
    );
}

export default function SkillsSection() {
    return (
        <section id="skills" className="py-24">
            <Container>
                <p className="font-mono text-sm text-accent-500">02 — Skills</p>
                <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">
                    What I work with
                </h2>

                <div className="mt-12 grid grid-cols-2 border-t border-l border-neutral-200 sm:grid-cols-4 dark:border-neutral-800">
                    {skills.map((skill) => (
                        <SkillCell key={skill.name} {...skill} />
                    ))}
                </div>
            </Container>
        </section>
    );
}
