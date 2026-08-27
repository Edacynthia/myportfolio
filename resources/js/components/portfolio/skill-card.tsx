import { useRef, type ReactNode } from 'react';

type SkillCardProps = {
    title: string;
    description: string;
    usedIn: string;
    className?: string;
    children?: ReactNode;
};

export default function SkillCard({
    title,
    description,
    usedIn,
    className = '',
}: SkillCardProps) {
    const cardRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const card = cardRef.current;
        if (!card) return;
        const rect = card.getBoundingClientRect();
        card.style.setProperty('--x', `${e.clientX - rect.left}px`);
        card.style.setProperty('--y', `${e.clientY - rect.top}px`);
    };

    return (
        <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            className={`group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-6 transition-colors hover:border-accent-400/50 dark:border-neutral-800 dark:bg-neutral-900 ${className}`}
        >
  <div
    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
    style={{
        background:
            'radial-gradient(200px circle at var(--x) var(--y), rgba(209,54,127,0.15), transparent 70%)',
    }}
/>
            <div className="relative">
                <h3 className="font-display text-lg font-semibold">
                    {title}
                </h3>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                    {description}
                </p>
                <p className="mt-4 text-xs text-accent-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {usedIn}
                </p>
            </div>
        </div>
    );
}