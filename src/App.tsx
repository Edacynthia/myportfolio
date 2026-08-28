import { useEffect } from 'react';
import AmbientGlow from './components/portfolio/ambient-glow';
import Container from './components/portfolio/container';
import ContactSection from './components/portfolio/contact-section';
import LanyardCard from './components/portfolio/lanyard-card';
import ProjectsSection from './components/portfolio/projects-section';
import RoleMarquee from './components/portfolio/role-marquee';
import ScrollToTop from './components/portfolio/scroll-to-top';
import SkillsSection from './components/portfolio/skills-section';
import TerminalWidget from './components/portfolio/terminal-widget';
import Signature from './components/portfolio/signature';
import ThemeToggle from './components/theme-toggle';
import { motion } from 'motion/react';

function Logo({ className }: { className?: string }) {
    return (
        <motion.div
            className={className}
            whileHover={{ scale: 1.15, rotate: -8 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        >
            <svg viewBox="0 0 40 40" className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
                <rect width="40" height="40" rx="10" fill="currentColor" className="text-accent-500" />
                <text
                    x="50%"
                    y="54%"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontFamily="'Unbounded', sans-serif"
                    fontWeight="700"
                    fontSize="20"
                    fill="white"
                >
                    EC
                </text>
            </svg>
        </motion.div>
    );
}

export default function App() {
    useEffect(() => {
        document.title = 'Cynthia | Full-Stack Developer';
    }, []);

    return (
        <>
            <div className="min-h-screen bg-white font-sans text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
                <nav className="fixed top-0 left-0 z-50 w-full border-b border-neutral-200 bg-white/95 py-8 backdrop-blur-sm dark:border-neutral-800 dark:bg-neutral-950/95">
                    <Container>
                        <div className="flex items-center justify-between">
                            <a href="/" className="flex items-center gap-2 font-display text-lg font-semibold">
                                <Logo className="h-8 w-8" />
                                
                            </a>

                            <div className="hidden gap-8 text-sm font-medium md:flex">
                                <a href="#about" className="transition-colors hover:text-accent-500">
                                    About
                                </a>
                                <a href="#skills" className="transition-colors hover:text-accent-500">
                                    Skills
                                </a>
                                <a href="#projects" className="transition-colors hover:text-accent-500">
                                    Projects
                                </a>
                                <a href="#contact" className="transition-colors hover:text-accent-500">
                                    Contact
                                </a>
                            </div>

                            <div className="flex items-center gap-3">
                                <ThemeToggle />
                                <span className="flex items-center gap-1.5 rounded-full border border-accent-400/40 px-3 py-1.5 text-sm font-medium text-accent-500">
                                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-500" />
                                    Available for Hire
                                </span>
                            </div>
                        </div>
                    </Container>
                </nav>

                <section className="relative overflow-hidden pt-36 pb-20">
                    <AmbientGlow />
                    <Container>
                        <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-[1.3fr_1fr]">
                            <div className="relative z-10">
                                <p className="font-mono text-lg text-accent-500">Hi, I'm</p>
                                <h1 className="mt-2 font-display text-4xl leading-none font-bold md:text-5xl">
                                    Cynthia
                                </h1>
                                <p className="mt-6 max-w-md text-lg text-neutral-600 dark:text-neutral-400">
                                    I build{' '}
                                    <span className="font-medium text-accent-500">
                                        thoughtful digital experiences from the ground up
                                    </span>{' '}
                                    — from clean, responsive interfaces to reliable systems behind them. I work with React, Tailwind CSS, and Laravel, and I’m passionate about creating technology that is useful, secure, and built to last.
                                </p>
                                <div className="mt-8 flex gap-4">
                                    
                                      <a href="#projects"
                                        className="rounded-lg bg-accent-500 px-6 py-3 font-medium text-white transition-colors hover:bg-accent-600"
                                    >
                                        View My Work
                                    </a>
                                    
                                       <a href="#contact"
                                        className="rounded-lg border border-neutral-300 px-6 py-3 font-medium transition-colors hover:border-accent-400 dark:border-neutral-700"
                                    >
                                        Get In Touch
                                    </a>
                                </div>
                                <RoleMarquee />
                                <Signature className="mt-10 h-20 w-72 text-accent-500" />
                            </div>

                            <div className="relative z-10 flex justify-center">
                                <LanyardCard image="/images/Esanye.jpg" />
                            </div>
                        </div>
                    </Container>
                </section>

                <section id="about" className="py-24">
                    <Container>
                        <p className="font-mono text-sm text-accent-500">01 — About</p>
                        <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">
                            A bit about me
                        </h2>

                        <div className="mt-12 grid grid-cols-1 items-start gap-12 md:grid-cols-2">
                            <div className="flex justify-center md:justify-start">
                                <TerminalWidget />
                            </div>

                            <div className="space-y-5 text-neutral-600 dark:text-neutral-400">
                               <p>
    I'm a Computer Science graduate based in Warri, Nigeria, with a
    passion for building practical, reliable digital experiences. I work
    across the stack with React, Tailwind CSS, and Laravel, while
    exploring cybersecurity, networking, and the systems that make
    technology work underneath.
</p>

<p>
    One of my biggest projects is{' '}
    <span className="font-medium text-neutral-900 dark:text-neutral-100">
        CampusSkillNet
    </span>{' '}
    — a university-focused skill and job marketplace designed to connect
    students with real opportunities within their campus community.
    Building it taught me how to take an idea from a concept to a
    functional product and everything in between.
</p>

<p>
    I care about the details that make technology feel effortless — a
    responsive interface, a smooth user experience, meaningful error
    handling, reliable functionality, and security considered from the
    start. I'm constantly learning, experimenting, and looking for better
    ways to build technology that is both useful and secure.
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