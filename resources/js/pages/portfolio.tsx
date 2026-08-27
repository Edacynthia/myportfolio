import { Head } from '@inertiajs/react';
import AmbientGlow from '@/components/portfolio/ambient-glow';
import ContactSection from '@/components/portfolio/contact-section';
import Container from '@/components/portfolio/container';
import LanyardCard from '@/components/portfolio/lanyard-card';
import ProjectsSection from '@/components/portfolio/projects-section';
import RoleMarquee from '@/components/portfolio/role-marquee';
import ScrollToTop from '@/components/portfolio/scroll-to-top';
import SkillsSection from '@/components/portfolio/skills-section';
import TerminalWidget from '@/components/portfolio/terminal-widget';
import ThemeToggle from '@/components/theme-toggle';

export default function Portfolio() {
    return (
        <>
            <Head title="Cynthia | Full-Stack Developer" />

           <div className="min-h-screen bg-white font-sans text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
    
    {/* Navbar */}
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-neutral-200 bg-white/95 py-4 backdrop-blur-sm dark:border-neutral-800 dark:bg-neutral-950/95">
        <Container>
            <div className="flex items-center justify-between">

                <a
                    href="/"
                    className="font-display text-lg font-semibold"
                >
                    Eda.cynthia
                </a>

                <div className="hidden gap-8 text-sm font-medium md:flex">
                    <a
                        href="#about"
                        className="transition-colors hover:text-accent-500"
                    >
                        About
                    </a>

                    <a
                        href="#skills"
                        className="transition-colors hover:text-accent-500"
                    >
                        Skills
                    </a>

                    <a
                        href="#projects"
                        className="transition-colors hover:text-accent-500"
                    >
                        Projects
                    </a>

                    <a
                        href="#contact"
                        className="transition-colors hover:text-accent-500"
                    >
                        Contact
                    </a>
                </div>

                <div className="flex items-center gap-3">
                    <ThemeToggle />

                    <span className="flex items-center gap-1.5 rounded-full border border-accent-400/40 px-3 py-1.5 text-xs font-medium text-accent-500">
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-500" />
                        Available for Hire
                    </span>
                </div>

            </div>
        </Container>
    </nav>

    {/* Hero */}
    <section className="relative overflow-hidden pt-36 pb-20">
        <AmbientGlow />

        <Container>
            <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-[1.3fr_1fr]">

                <div className="relative z-10">
                    <p className="font-mono text-sm text-accent-500">
                        Hi, I'm
                    </p>

                    <h1 className="font-display mt-1 text-4xl leading-none font-bold md:text-5xl">
                        Cynthia
                    </h1>

                    <p className="mt-4 max-w-md text-lg text-neutral-600 dark:text-neutral-400">
                        I build{' '}
                        <span className="font-medium text-accent-500">
                            digital realities that work
                        </span>{' '}
                        — turning ideas into fast, dependable web products
                        with Laravel and React, down to the small details
                        most people skip.
                    </p>

                    <div className="mt-8 flex gap-4">
                        <a
                            href="#projects"
                            className="rounded-lg bg-accent-500 px-6 py-3 font-medium text-white transition-colors hover:bg-accent-600"
                        >
                            View My Work
                        </a>

                        <a
                            href="#contact"
                            className="rounded-lg border border-neutral-300 px-6 py-3 font-medium transition-colors hover:border-accent-400 dark:border-neutral-700"
                        >
                            Get In Touch
                        </a>
                    </div>

                    <RoleMarquee />
                </div>

                <div className="relative z-10 flex justify-center">
                    <LanyardCard image="/images/Esanye.jpg" />
                </div>

            </div>
        </Container>
    </section>


                <section id="about" className="py-24">
                    <Container>
                        <p className="font-mono text-sm text-accent-500">
                            01 — About
                        </p>

                        <h2 className="font-display mt-3 text-4xl font-bold md:text-5xl">
                            A bit about me
                        </h2>

                        <div className="mt-12 grid grid-cols-1 items-start gap-12 md:grid-cols-2">
                            <div className="flex justify-center md:justify-start">
                                <TerminalWidget />
                            </div>

                            <div className="space-y-5 text-neutral-600 dark:text-neutral-400">
                                <p>
                                    I'm a final-year Computer Science
                                    student at Edo State University,
                                    Iyahmo, based in Lagos, Nigeria. Most
                                    of my time goes into building things
                                    end-to-end — Laravel on the backend,
                                    React on the front, and enough
                                    curiosity about networking and systems
                                    design to actually understand what's
                                    happening underneath.
                                </p>

                                <p>
                                    Right now I'm deep in my final-year
                                    project,{' '}
                                    <span className="font-medium text-neutral-900 dark:text-neutral-100">
                                        CampusSkillNet
                                    </span>{' '}
                                    — a university-exclusive skill and job
                                    marketplace built to connect students
                                    with real opportunities on campus.
                                    It's taught me more about shipping
                                    something real than any single course
                                    has.
                                </p>

                                <p>
                                    Outside of coursework, I care about
                                    the parts of a product most people
                                    don't notice until they're missing —
                                    the loading state that doesn't jar,
                                    the form that tells you exactly what
                                    went wrong, the page that still feels
                                    fast on a bad connection.
                                </p>
                            </div>
                        </div>
                    </Container>
                </section>

                <SkillsSection />
                <ProjectsSection />
                <ContactSection />
            </div>

            <ScrollToTop />
            
        </>
    );
}