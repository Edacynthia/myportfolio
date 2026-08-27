import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useAppearance } from '@/hooks/use-appearance';

export default function ThemeToggle() {
    const { resolvedAppearance, updateAppearance } = useAppearance();
    const [mounted, setMounted] = useState(false);

    // eslint-disable-next-line react-hooks/set-state-in-effect -- required to avoid SSR/client hydration mismatch on theme icon
    useEffect(() => setMounted(true), []);

    const toggle = () => {
        updateAppearance(resolvedAppearance === 'dark' ? 'light' : 'dark');
    };

    return (
        <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 text-neutral-600 transition-colors hover:border-accent-400 hover:text-accent-500 dark:border-neutral-700 dark:text-neutral-300 dark:hover:border-accent-400 dark:hover:text-accent-400"
        >
            {mounted && resolvedAppearance === 'dark' ? (
                <Sun className="h-4 w-4" />
            ) : mounted ? (
                <Moon className="h-4 w-4" />
            ) : (
                <span className="h-4 w-4" />
            )}
        </button>
    );
}
