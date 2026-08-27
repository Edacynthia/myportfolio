import { ArrowUp } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useState } from 'react';

export default function ScrollToTop() {
    const [progress, setProgress] = useState(0);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight =
                document.documentElement.scrollHeight - window.innerHeight;
            setProgress(docHeight > 0 ? scrollTop / docHeight : 0);
            setVisible(scrollTop > 400);
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();

        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    return (
        <AnimatePresence>
            {visible && (
                <motion.button
                    onClick={scrollToTop}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 16 }}
                    aria-label="Back to top"
                    className="group fixed right-8 bottom-8 z-50 flex flex-col items-center gap-2"
                >
                    <span className="font-mono text-[10px] tracking-wide text-neutral-500 opacity-0 transition-opacity group-hover:opacity-100">
                        cd ~
                    </span>
                    <div className="relative flex h-14 w-8 items-end justify-center overflow-hidden rounded-full border border-neutral-300 bg-white/60 backdrop-blur dark:border-neutral-700 dark:bg-neutral-900/60">
                        <div
                            className="absolute bottom-0 left-0 w-full bg-accent-500 transition-[height] duration-150"
                            style={{ height: `${progress * 100}%` }}
                        />
                        <ArrowUp className="relative mb-1.5 h-4 w-4 text-neutral-700 transition-colors group-hover:text-white dark:text-neutral-200" />
                    </div>
                </motion.button>
            )}
        </AnimatePresence>
    );
}
